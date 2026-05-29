import "./MockSimVar"
import '@microsoft/msfs-sdk'

import { MyInstrument } from "./MyInstrument"

registerInstrument('my-instrument', MyInstrument)
