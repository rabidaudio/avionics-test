// This file implements the underlying simvar interface used by the avionics library
// to communicate with the simulator. It proxies these calls to a remote host.
const simvar = {
    registerSimVarWatcher_EX1: (name, unit, dataSource, bUnload) => {
        throw new Error(`UNIMPLEMENTED registerSimVarWatcher_EX1 ${[name, unit, dataSource, bUnload]}`)
    },
    getValue: (name, unit, dataSource) => {
        throw new Error(`UNIMPLEMENTED getValue ${[name, unit, dataSource]}`)
    },
    getValue_LatLongAlt: (name, dataSource) => {
        throw new Error(`UNIMPLEMENTED getValue_LatLongAlt ${[name, dataSource]}`)
    },
    getValue_LatLongAltPBH: (name, dataSource) => {
        throw new Error(`UNIMPLEMENTED getValue_LatLongAltPBH ${[name, dataSource]}`)
    },
    getValue_PBH: (name, dataSource) => {
        throw new Error(`UNIMPLEMENTED getValue_PBH ${[name, dataSource]}`)
    },
    getValue_PID_STRUCT: (name, dataSource) => {
        throw new Error(`UNIMPLEMENTED getValue_PID_STRUCT ${[name, dataSource]}`)
    },
    getValue_XYZ: (name, dataSource) => {
        throw new Error(`UNIMPLEMENTED getValue_XYZ ${[name, dataSource]}`)
    },
    getValueReg_String: (registeredID) => {
        throw new Error(`UNIMPLEMENTED getValueReg_String ${[registeredID]}`)
    },
    getValueReg: (registeredID) => {
        throw new Error(`UNIMPLEMENTED getValueReg ${[registeredID]}`)
    },
    getValueRegByContainerID: (registeredID, containerID) => {
        throw new Error(`UNIMPLEMENTED getValueRegByContainerID ${[registeredID, containerID]}`)
    },
    registerSimVarArrayWatcher: (simvars, instrumentID) => {
        throw new Error(`UNIMPLEMENTED registerSimVarArrayWatcher ${[simvars, instrumentID]}`)
        //return requestID
    }
}
// TODO: don't assign until connected to server
Object.assign(window, { simvar })

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

