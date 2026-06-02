import Koa from 'koa'
import { send } from '@koa/send'
import { glob, realpath } from 'node:fs/promises'
import path from 'node:path'

const app = new Koa()

// TODO: take in query string and render html template
app.use(async (ctx, next) => {
    if (ctx.path === "" || ctx.path === "/" || ctx.path === "index.html") {
        console.log("index")
        await send(ctx, "simulator.html")
    } else if (ctx.path.startsWith("/build/") || ctx.path.startsWith("/src/")) {
        await send(ctx, ctx.path)
    } else {
        return await next()
    }
})

app.use(async (ctx) => {
    const packagesPath = path.resolve(process.argv[2] || "Packages")
    const resolvedPath = path.join(packagesPath, "*/html_ui", ctx.path)
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
    return await send(ctx, relTarget, { root: packagesPath })
})

function main() {
    app.listen(8888, () => console.log("http://localhost:8888"))
}

main()
