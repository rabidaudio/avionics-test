import { MSFS_API } from "msfs-simconnect-api-wrapper"

const api = new MSFS_API()

async function main() {
    await new Promise((resolve, reject) => {
        api.connect({
            onConnect: resolve,
            onException: reject,
            onRetry: () => console.log('Retrying connect to MSFS....'),
            retries: Infinity,
        })
    })

    api.on('AircraftLoaded', (e) => {
        console.log('AircraftLoaded', e)
    })
}

main()
