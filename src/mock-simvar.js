// This file implements the underlying simvar interface used by the avionics library
// to communicate with the simulator. It proxies these calls to a remote host.
class MockSimVar {
    constructor() {
        this.watchers = {}
        this.id = 0
    }

    registerSimVarWatcher_EX1(name, unit, dataSource, bUnload) {
        console.log('registerSimVarWatcher_EX1', name, unit, dataSource, bUnload)
        // throw new Error(`UNIMPLEMENTED registerSimVarWatcher_EX1 ${[name, unit, dataSource, bUnload]}`)
        const id = this.id++;
        this.watchers[id] = { name, unit, dataSource }
        return id
    }

    registerSimVarArrayWatcher(simvars, instrumentID) {
        console.log('registerSimVarArrayWatcher', simvars, instrumentID)
        // throw new Error(`UNIMPLEMENTED registerSimVarArrayWatcher ${[simvars, instrumentID]}`)
        //return requestID
        
        // NOTE: follows up with Coherent.call("getArrayValuesReq")
        return this.id++
    }

    getValue(name, unit, dataSource) {
        console.log('getValue', name, unit, dataSource)
        // throw new Error(`UNIMPLEMENTED getValue ${[name, unit, dataSource]}`)
        return 5.1
    }

    getValue_LatLongAlt(name, dataSource) {
        console.log('getValue_LatLongAlt', name, dataSource)
        // throw new Error(`UNIMPLEMENTED getValue_LatLongAlt ${[name, dataSource]}`)
        return { lat: 33.7439159, long: -84.3636837, alt: 1000 }
    }

    getValue_LatLongAltPBH(name, dataSource) {
        console.log('getValue_LatLongAltPBH', name, dataSource)
        // throw new Error(`UNIMPLEMENTED getValue_LatLongAltPBH ${[name, dataSource]}`)
        return { lla: this.getValue_LatLongAlt(), pbh: this.getValue_PBH() }
    }

    getValue_PBH(name, dataSource) {
        console.log('getValue_PBH', name, dataSource)
        // throw new Error(`UNIMPLEMENTED getValue_PBH ${[name, dataSource]}`)
        return { pitchDegree: 10, bankDegree: 2, headingDegree: 180 }
    }

    getValue_PID_STRUCT(name, dataSource) {
        console.log('getValue_PID_STRUCT', name, dataSource)
        // throw new Error(`UNIMPLEMENTED getValue_PID_STRUCT ${[name, dataSource]}`)
        return {
            pid_p: 0.11,
            pid_i: 0.22,
            pid_i2: 0.33,
            pid_d: 0.44,
            i_boundary: 0.55,
            i2_boundary: 0.66,
            d_boundary: 0.77
        }
    }

    getValue_XYZ(name, dataSource) {
        console.log('getValue_XYZ', name, dataSource)
        // throw new Error(`UNIMPLEMENTED getValue_XYZ ${[name, dataSource]}`)
        return { x: 3, y: 4, z: 5 }
    }

    getValueReg_String(registeredID) {
        console.log('getValueReg_String', registeredID)
        // throw new Error(`UNIMPLEMENTED getValueReg_String ${[registeredID]}`)
        return `valuereg:${registeredID}`
    }

    getValueReg(registeredID) {
        console.log('getValueReg', registeredID)
        // throw new Error(`UNIMPLEMENTED getValueReg ${[registeredID]}`)
        return 6.2
    }

    getValueRegByContainerID(registeredID, containerID) {
        console.log('getValueRegByContainerID', registeredID, containerID)
        // throw new Error(`UNIMPLEMENTED getValueRegByContainerID ${[registeredID, containerID]}`)
        return 7.3
    }
}
// TODO: don't assign until connected to server
Object.assign(window, { simvar: new MockSimVar() })


// https://docs.flightsimulator.com/html/Programming_Tools/JavaScript/Coherent.htm
// RegisterViewListener
// EventEmitter: on, off, trigger
// call

// Coherent
// Coherent.call("getArrayValuesReq", simvars.requestID).then(callback);
// Coherent.call("getArrayValues", simvars.getCount(), simvars.getIndex(), simvars.getNames(), simvars.getUnits(), dataSource).then(callback);
// Coherent.call("setValue_LatLongAlt", name, (value), dataSource);
// Coherent.call("setValue_LatLongAltPBH", name, (value), dataSource);
// Coherent.call("setValue_PBH", name, (value), dataSource);
// Coherent.call("setValue_PID_STRUCT", name, (value), dataSource);
// Coherent.call("setValue_XYZ", name, (value), dataSource);
// Coherent.call("setValueReg_String", regID, (value));
// Coherent.call("setValueReg_Bool", regID, (!!value));
// Coherent.call("setValueReg_Number", regID, value);
// Coherent.call("setValue_String", name, (value), dataSource);
// Coherent.call("setValue_Bool", name, (!!value), dataSource);
// Coherent.call("setValue_Number", name, unit, value, dataSource);
// Coherent.call("setGameVar_String", name, unit, value);
// Coherent.call("setGameVar_Number", name, unit, value);


// Coherent.call('TRIGGER_KEY_EVENT', key, bypass, value0, value1, value2);
// Coherent.call('INTERCEPT_KEY_EVENT', key, passThrough ? 0 : 1);
// Coherent.call('SET_LOAD_LATLON', center.lat, center.lon);
// Coherent.call('GET_NEAREST_AIRSPACES');
// Coherent.call('START_NEAREST_SEARCH_SESSION', type);
// Coherent.call('GET_METAR_BY_IDENT', ident);
// Coherent.call('GET_METAR_BY_LATLON', lat, lon);
// Coherent.call('SEARCH_BY_IDENT', ident, coherentFilter, maxItems);
// Coherent.call('SEARCH_NEAREST', this.sessionId, lat, lon, radius, maxItems)
// Coherent.call('SET_NEAREST_AIRPORT_FILTER', this.sessionId, showClosed ? 1 : 0, classMask);
// Coherent.call('SET_NEAREST_EXTENDED_AIRPORT_FILTERS', this.sessionId, surfaceTypeMask, approachTypeMask, toweredMask, minRunwayLength);
// Coherent.call('SET_NEAREST_INTERSECTION_FILTER', this.sessionId, typeMask, showTerminalWaypoints ? 1 : 0);
// Coherent.call('SET_NEAREST_VOR_FILTER', this.sessionId, classMask, typeMask);
// Coherent.call('SET_NEAREST_BOUNDARY_FILTER', this.sessionId, classMask);
// Coherent.call('GET_AIR_TRAFFIC'), Wait.awaitDelay(1000)]);
// Coherent.call('PLAY_INSTRUMENT_SOUND', entry.sequence[0].originalStr);
// Coherent.call('PLAY_INSTRUMENT_SOUND', soundToPlay.originalStr);
// Coherent.call('SET_MAP_RESOLUTION', this.uid, resolution[0], resolution[1]);
// Coherent.call('SET_MAP_HEIGHT_COLORS', this.uid, colors);
// Coherent.call('SET_MAP_ALTITUDE_RANGE', this.uid, requiredMin, requiredMax);
// Coherent.call('SET_MAP_CLEAR_COLOR', this.uid, color);
// Coherent.call('SHOW_MAP_WEATHER', this.uid, wxrMode.mode, wxrMode.arcRadians);
// Coherent.call('SET_MAP_WEATHER_RADAR_COLORS', this.uid, this.wxrColorsArray, this.wxrRateArray);
// Coherent.call('SHOW_MAP_ISOLINES', this.uid, showIsolines);
// Coherent.call('SET_MAP_PARAMS', this.uid, this.pos, this.radius);
// Coherent.call('SHOW_MAP', uid, true);
// Coherent.call('apSetAutopilotMode', exports.MSFSAPStates.Alt, 0);
// Coherent.call('AP_VS_VAR_SET_ENGLISH', 1, currentVs);
