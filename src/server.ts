/// <reference types="@microsoft/msfs-types/js/simvar" />

import { MSFS_API } from "msfs-simconnect-api-wrapper"
// import Koa from 'koa'
// import { Router } from '@koa/router'


const msfs = new MSFS_API()

async function main() {
    await new Promise((resolve, reject) => {
        msfs.connect({
            onConnect: resolve,
            onException: reject,
            onRetry: () => console.log('Retrying connect to MSFS....'),
            retries: Infinity,
        })
    })

    // msfs.on('AircraftLoaded', (e) => {
    //     console.log('AircraftLoaded', e)
    // })

    // app.listen(8888)
}

type SimVarUnit = "" | "amp" | "ampere" | "amperes" | "amps" | "angl16" | "angl32" | "atm" | "atmosphere" | "atmospheres" | "bar" | "bars" | "Bco16" | "bel" | "bels" | "Bool" | "Boolean" | "boost cmHg" | "boost inHg" | "boost psi" | "celsius fs7 egt" | "celsius fs7 oil temp" | "celsius scaler 1/256" | "celsius scaler 16k" | "celsius scaler 256" | "celsius" | "centimeter of mercury" | "centimeter" | "centimeters of mercury" | "centimeters" | "cm" | "cm2" | "cm3" | "cmHg" | "cu cm" | "cu ft" | "cu in" | "cu km" | "cu m" | "cu mm" | "cu yd" | "cubic centimeter" | "cubic centimeters" | "cubic feet" | "cubic foot" | "cubic inch" | "cubic inches" | "cubic kilometer" | "cubic kilometers" | "cubic meter" | "cubic meters" | "cubic mile" | "cubic miles" | "cubic millimeter" | "cubic millimeters" | "cubic yard" | "cubic yards" | "day" | "days" | "decibel" | "decibels" | "decimile" | "decimiles" | "decinmile" | "decinmiles" | "degree angl16" | "degree angl32" | "degree latitude" | "degree longitude" | "degree per second ang16" | "degree per second" | "degree" | "degrees angl16" | "degrees angl32" | "degrees latitude" | "degrees longitude" | "degrees per second ang16" | "degrees per second" | "Degrees" | "degrees" | "Enum" | "fahrenheit" | "farenheit" | "feet per minute" | "feet per second squared" | "feet per second" | "feet" | "feet/minute" | "feet/second" | "flags" | "foot per second squared" | "foot pound" | "foot pounds" | "foot" | "foot-pound" | "foot-pounds" | "FractionalLatLonDigits" | "Frequency ADF BCD32" | "Frequency BCD16" | "Frequency BCD32" | "fs7 charging amps" | "fs7 oil quantity" | "ft lb per second" | "ft" | "ft-lbs" | "ft/min" | "ft2" | "ft3" | "G Force 624 scaled" | "G Force" | "gallon per hour" | "gallon" | "gallons per hour" | "gallons" | "geepound" | "geepounds" | "GForce" | "GLOBALP->delta_heading_rate" | "GLOBALP->eng1.manifold_pressure" | "GLOBALP->eng1.oil_prs" | "GLOBALP->eng1.oil_tmp" | "GLOBALP->vertical_speed" | "gph" | "grad" | "grads" | "half" | "halfs" | "hectopascal" | "hectopascals" | "Hertz" | "hour over 10" | "hour" | "hours over 10" | "hours" | "Hz" | "in" | "in2" | "in3" | "inch of mercury" | "inch" | "inches of mercury" | "inches" | "inHg 64 over 64k" | "inHg" | "kelvin" | "keyframe" | "keyframes" | "kg" | "kgf meter" | "kgf meters" | "KgFSqCm" | "KHz" | "kilogram force per square centimeter" | "kilogram meter squared" | "kilogram meter" | "kilogram meters" | "kilogram per cubic meter" | "kilogram per second" | "kilogram" | "kilograms meter squared" | "kilograms per cubic meter" | "kilograms per second" | "kilograms" | "Kilohertz" | "kilometer per hour" | "kilometer" | "kilometer/hour" | "kilometers per hour" | "kilometers" | "kilometers/hour" | "kilopascal" | "km" | "km2" | "km3" | "knot scaler 128" | "knot" | "knots scaler 128" | "knots" | "kPa" | "kph" | "LatLonFormat" | "lbf-feet" | "lbs" | "liter per hour" | "liter" | "liters per hour" | "liters" | "m/s" | "m2" | "m3" | "mach 3d2 over 64k" | "mach" | "machs" | "mask" | "mbar" | "mbars" | "Megahertz" | "meter cubed per second" | "meter cubed" | "meter latitude" | "meter per minute" | "meter per second scaler 256" | "meter per second squared" | "meter per second" | "meter scaler 256" | "meter" | "meter/second" | "meters cubed per second" | "meters cubed" | "meters latitude" | "meters per minute" | "meters per second scaler 256" | "meters per second squared" | "meters per second" | "meters scaler 256" | "meters" | "meters/second" | "MHz" | "mile per hour" | "mile" | "miles per hour" | "miles" | "millibar scaler 16" | "millibar" | "millibars scaler 16" | "millibars" | "millimeter of mercury" | "millimeter of water" | "millimeter" | "millimeters of mercury" | "millimeters of water" | "millimeters" | "minute per round" | "minute" | "minutes per round" | "minutes" | "mm2" | "mm3" | "mmHg" | "more_than_a_half" | "mph" | "nautical mile" | "nautical miles" | "newton meter" | "newton meters" | "newton per square meter" | "newtons per square meter" | "nice minute per round" | "nice minutes per round" | "Nm" | "nmile" | "nmiles" | "number" | "number_number" | "numbers" | "Pa" | "part" | "pascal" | "pascals" | "per degree" | "per hour" | "per minute" | "per radian" | "per second" | "percent over 100" | "percent scaler 16k" | "percent scaler 2pow23" | "percent scaler 32k" | "percent" | "percentage" | "position 128" | "position 16k" | "position 32k" | "position" | "pound per hour" | "pound scaler 256" | "pound" | "pound-force per square foot" | "pound-force per square inch" | "poundal feet" | "pounds per hour" | "pounds scaler 256" | "pounds" | "pph" | "psf scaler 16k" | "psf" | "psi 4 over 16k" | "psi fs7 oil pressure" | "psi scaler 16k" | "psi" | "quart" | "quarts" | "radian per second" | "radian" | "radians per second" | "radians" | "rankine" | "ratio" | "revolution per minute" | "revolutions per minute" | "round" | "rounds" | "rpm 1 over 16k" | "rpm" | "rpms" | "scaler" | "second" | "Seconds" | "seconds" | "slug feet squared" | "Slug per cubic feet" | "Slug per cubic foot" | "slug" | "Slug/ft3" | "slugs feet squared" | "Slugs per cubic feet" | "Slugs per cubic foot" | "slugs" | "sq cm" | "sq ft" | "sq in" | "sq km" | "sq m" | "sq mm" | "sq yd" | "square centimeter" | "square centimeters" | "square feet" | "square foot" | "square inch" | "square inches" | "square kilometer" | "square kilometers" | "square meter" | "square meters" | "square mile" | "square miles" | "square millimeter" | "square millimeters" | "square yard" | "square yards" | "third" | "thirds" | "times" | "volt" | "volts" | "Watt" | "Watts" | "yard" | "yards" | "yd2" | "yd3" | "year" | "years" | "string" | "latlonaltpbh" | "latlonalt" | "Millibars" | "PBH" | "XYZ" | "PID_STRUCT" | "POIList" | "GlassCockpitSettings" | "FuelLevels" | string

class MockSimVar {
    private ready: boolean
    private msfs: MSFS_API

    constructor(msfs: MSFS_API) {
        this.ready = false
        this.msfs = msfs
        this.msfs.connect({
            onConnect: () => { this.ready = true },
            onRetry: () => console.log('Retrying connect to MSFS....'),
            retries: Infinity,
        })
    }

    IsReady(): boolean {
        return this.ready
    }

    LogSimVarValueHistory(): void {
        // TODO implement
    }
    LogSimVarValueHistoryByTimePerFrame(): void {
        // TODO implement
    }

    GetRegisteredId(name: any, unit: any, dataSource: any): number {

    }

    GetSimVarValue(name: string, unit: SimVarUnit, dataSource?: string): any {
        // this.msfs.get()
        // unfortunately the library we're mocking doesn't return a promise for this.
        // the best way I can think to handle this is to return a zero value, and then
        // subscribe to the value, caching it in memory, and returning instantly from memory
        // when subsequently requested
    }

    GetSimVarValueFast(name: string, unit: SimVarUnit, dataSource?: string): any {
        // this doesn't ever seem to be used in the MSFS-avionics lib, so probably not worth implementing
        return this.GetSimVarValue(name, unit, dataSource)
    }

    GetSimVarValueFastReg(registeredID: number): any {

    }

    // GetSimVarValueFastRegString(registeredID: number): any {
    //     // NOTE: never called in msfs-avionics
    // }

    // GetSimVarArrayValues(simvars: SimVarBatch, callback: SingleArgumentCallback, dataSource?: string): void {
    //     // NOTE: never called in msfs-avionics
    // }

    SetSimVarValue(name: string, unit: SimVarUnit, value: any, dataSource?: string): Promise<any> {
        this.msfs.set(name, value)
        // TODO: return promise that resolves on next frame
    }

    // GetGlobalVarValue(name: string, unit: SimVarUnit): any {
    //     // NOTE: never called in msfs-avionics
    // }

    // GetRegisteredGameVarId(name: any, unit: any, dataSource: any): number {
    //     // NOTE: never called in msfs-avionics
    // }

    GetGameVarValue(name: string, unit: SimVarUnit, param1?: Number, param2?: Number): any {

    }

    // GetGameVarValueFast(name: string, unit: SimVarUnit, param1?: Number, param2?: Number): any {
    //     // NOTE: never called in msfs-avionics
    // }

    // GetGameVarValueFastReg(regId: number, param1?: Number, param2?: Number): any {
    //     // NOTE: never called in msfs-avionics
    // }

    SetGameVarValue(name: string, unit: SimVarUnit, value: any): Promise<any> {
        
    }
}

main()
