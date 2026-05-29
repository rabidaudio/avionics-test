// export type { RunwayDesignator } from "@microsoft/msfs-types/js/simvar"

export const SimVar = {

    GetRegisteredId: (name: string, unit: string, dataSource = null) => {
        return 0; // return a number
    }

    // GetSimVarValueFastReg

    
    // instance:
    // getValueReg(id)
    // getValueReg_String(id)
    // getValue_LatLongAlt(name, datasrc)
    // getValue_LatLongAltPBH(name, datasrc)
    // getValue_PBH()
    // getValue_PID_STRUCT
    // getValue_XYZ

};

// Coherent
// Coherent.call('setValueReg_String', regID, value);
// Coherent.call('setValueReg_Bool', regID, !!value);
// Coherent.call('setValueReg_Number', regID, value);
// Coherent.call('setValue_LatLongAlt', name, value, dataSource);
// Coherent.call('setValue_LatLongAltPBH', name, value, dataSource);
// Coherent.call('setValue_PBH', name, value, dataSource);
// Coherent.call('setValue_PID_STRUCT', name, value, dataSource);
// Coherent.call('setValue_XYZ', name, value, dataSource);
// Coherent.call('setValueReg_Number', regID, value);
// Coherent.call('SHOW_MAP', uid, true);

export function registerInstrument(name: string, component: BaseInstrument) {
    console.log('register', name, component)
}

import { MyInstrument } from "./MyInstrument";

console.log(MyInstrument);