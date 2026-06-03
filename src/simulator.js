import "./include-instrument.js"
import "./mock-simvar.js"

// register a protocol handler for coui:// urls (just http)
// window.navigator.registerProtocolHandler("web+coui", window.location.href + "/coui?src=%s")

window.addEventListener('DOMContentLoaded', () => {
    let data = new VCockpitPanelData();
    data.sName = "VCockpit01";
    data.vLogicalSize = new Vec2(1024, 768);
    data.vDisplaySize = new Vec2(1024, 768);
    data.daAttributes = [];
    data.daInstruments = [];
    let instrument = new VCockpitInstrumentData();
    instrument.iGUId = 0;
    // instrument.sUrl = "NavSystems/AS1000/MFD/AS1000_MFD.html";
    instrument.sUrl = "Pages/VCockpit/Instruments/MyInstrument/MyInstrument.html";
    instrument.templateName = "";
    instrument.vPosAndSize = { x: 0, y: 0, z: 1024, w: 768 };
    data.daInstruments.push(instrument);
    Coherent.trigger("ShowVCockpitPanel", data);
    setTimeout(() => { Coherent.trigger("OnAllInstrumentsLoaded"); }, 5000);
})

// window.engine.trigger('ShowVCockpitPanel', {
//     sName: ,
//     daInstruments,
//     daAttributes
// })