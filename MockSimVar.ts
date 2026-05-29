// This file implements the minimum interfaces defined in @microsoft/msfs-types
// and populates the global namespace with them so they are available when executing
// instruments in a simulated environment.
import { FSComponent } from "@microsoft/msfs-sdk"


import * as enums from "./enums"

export const Avionics = {
    Utils: {
        DEG2RAD: 0.0174533,
        RAD2DEG: 57.2958,
        DEGREE_SYMBOL: '°',
        METER2FEET: 3.28084,
        FEET2METER: 0.3048,
    }
};

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

Object.assign(window as any, { Avionics, SimVar, ...enums })

class MockBaseInstrument extends HTMLElement {

    public connectedCallback(): void {
        // no-op, subclasses can override
    }

    public disconnectedCallback(): void {
        // no-op, subclasses can override
    }

    /*
    static allInstrumentsLoaded: boolean;
    static useSvgImages: boolean;
    dataMetaManager: DataReadMetaManager;
    urlConfig: URLConfig;
    xmlConfig: Document;
    instrumentXmlConfig: Element;
    protected startTime: number;
    private _frameCount;
    protected electricity: HTMLElement;
    protected electricalLogic: CompositeLogicXMLElement;
    protected electricityAvailable: boolean;
    protected initDuration: number;
    protected hasBeenOff: boolean;
    protected isStarted: boolean;
    protected needValidationAfterInit: boolean;
    protected initAcknowledged: boolean;
    protected screenState: ScreenState;
    protected reversionaryMode: boolean;
    protected highlightSvg: HTMLElement;
    protected highlightList: Array<HighlightedElement>;
    protected backgroundList: Array<Element>;
    private _instrumentId;
    private _lastTime;
    private _deltaTime;
    private _frameLastTime;
    private _frameDeltaTime;
    private _isConnected;
    private _isInitialized;
    private _xmlConfigFile;
    private _quality;
    private _gameState;
    private _alwaysUpdate;
    private _alwaysUpdateList;
    private _pendingCalls;
    private _pendingCallUId;
    private _facilityLoader;
    private _mainLoopFuncInstance;
    constructor();
    get initialized(): boolean;
    get instrumentIdentifier(): string;
    get instrumentIndex(): number;
    get isInteractive(): boolean;
    get IsGlassCockpit(): boolean;
    get isPrimary(): boolean;
    get deltaTime(): number;
    get frameCount(): number;
    get flightPlanManager(): FlightPlanManager;
    get facilityLoader(): FacilityLoader;
    connectedCallback(): void;
    disconnectedCallback(): void;
    protected Init(): void;
    setInstrumentIdentifier(_identifier: string): void;
    setConfigFile(_file: string): void;
    getChildById(_selector: String): any;
    getChildrenById(_selector: String): any;
    getChildrenByClassName(_selector: string): any;
    startHighlight(_id: string): void;
    stopHighlight(_id: string): void;
    clearHighlights(): void;
    updateHighlightElements(): void;
    onInteractionEvent(_args: Array<string>): void;
    onSoundEnd(_event: Name_Z): void;
    getQuality(): Quality;
    getGameState(): GameState;
    protected reboot(): void;
    protected onFlightStart(): void;
    protected onQualityChanged(_quality: Quality): void;
    protected onGameStateChanged(_oldState: GameState, _newState: GameState): void;
    private loadDocumentAttributes;
    protected parseXMLConfig(): void;
    protected parseURLAttributes(): void;
    private beforeUpdate;
    protected Update(): void;
    private afterUpdate;
    doUpdate(): void;
    private CanUpdate;
    private canUpdate;
    protected updateElectricity(): void;
    protected isElectricityAvailable(): boolean;
    onShutDown(): void;
    onPowerOn(): void;
    protected isBootProcedureComplete(): boolean;
    acknowledgeInit(): void;
    isInReversionaryMode(): boolean;
    wasTurnedOff(): boolean;
    playInstrumentSound(soundId: string): boolean;
    private createMainLoop;
    private mainLoop;
    private killMainLoop;
    private loadXMLConfig;
    private loadURLAttributes;
    getTimeSinceStart(): number;
    getAspectRatio(): number;
    isComputingAspectRatio(): boolean;
    isAspectRatioForced(): boolean;
    getForcedScreenRatio(): number;
    getForcedAspectRatio(): number;
    protected updateHighlight(): void;
    highlightGetState(_valueMin: number, _valueMax: number, _period: number): number;
    private initTransponder;
    requestCall(_func: Function, _timeout?: number): number;
    removeCall(_uid: number): void;
    protected updatePendingCalls(): void;
    protected clearPendingCalls(): void;
    alwaysUpdate(_element: Updatable, _val: boolean): void;
    protected updateAlwaysList(): void;
    protected clearAlwaysList(): void;
     */
}

Object.assign(window as any, {
    BaseInstrument: MockBaseInstrument,
    registerInstrument: (name: string, component: CustomElementConstructor) => {
        window.customElements.define(name, component)
        window.addEventListener('DOMContentLoaded', () => {
        //     console.log('register', name, component)
            document.body.appendChild(new component())
        })
    }
})

// (window as any).SimVar = SimVar;

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

