import Koa from 'koa'
import { send } from '@koa/send'
import { glob, realpath } from 'node:fs/promises'
import path from 'node:path'
import { compose, Transform } from 'node:stream'

const app = new Koa()

const host = "http://localhost:8888" // TODO

const textReplacer = (srcText, replaceText) => {
    const size = Math.max(srcText.length, replaceText.length)*2
    const replace = (src) => src.replaceAll(srcText, replaceText)
    let buffer = ''
    return async function* (source) {
        for await (const chunk of source) {
            if (!Buffer.isEncoding('utf8')) {
                yield chunk
            } else {
                const data = buffer + chunk.toString('utf8')
                const replaced = replace(data)
                buffer = data.slice(-1*size)
                yield replaced.slice(0, replaced.length - size)
            }
        }
        yield replace(buffer)
    }
}

// TODO: take in query string and render html template
app.use(async (ctx, next) => {
    if (ctx.path === "" || ctx.path === "/" || ctx.path === "index.html") {
        console.log("index")
        await send(ctx, "simulator.html")
    } else if (ctx.path.startsWith("/build/") || ctx.path.startsWith("/src/")) {
        await send(ctx, ctx.path)
    // } else if (ctx.path === "/coui") {
    //     return ctx.redirect(ctx.query["src"].replace(/^\/html_UI\//, ''))
    } else {
        return await next()
    }
})

app.use(async (ctx) => {
    const packagesPath = path.resolve(process.argv[2] || "Packages")
    const reqPath = ctx.path.replace(/^\/?html_(ui|UI)/, '')
    console.log('reqPath', reqPath)
    const resolvedPath = path.join(packagesPath, "*/html_ui", reqPath)
    const match = await Array.fromAsync(glob(resolvedPath))
    if (match.length === 0) {
        console.log(ctx.path, "not found")
        ctx.res.writeHead(404).end("not found")
        return
    }
    // handle case sensitivity
    const target = await realpath(match[0])
    // note: send only allows relative paths
    const relTarget = path.relative(packagesPath, target)
    console.log(ctx.path, " -> ", relTarget)
    await send(ctx, relTarget, { root: packagesPath })
    // Existing packages often seem to use "coui://<path>" urls
    // to load assets. We can't write a handler for this scheme
    // on the frontend so instead we rewrite all outgoing files
    // to use an HTTP scheme instead
    ctx.body = compose(ctx.body, textReplacer("coui://", host))
})

function main() {
    app.listen(8888, () => console.log("http://localhost:8888"))
}

main()
