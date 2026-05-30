/// <reference types="@microsoft/msfs-types/pages/vcockpit/core/vcockpit" />

import { FSComponent } from '@microsoft/msfs-sdk';
import { MyComponent } from './MyComponent';

class MyInstrument extends BaseInstrument {
  // private pluginSystem?: PluginSystem<AvionicsPlugin<void>, void>;

  get templateID(): string {
    return 'MyInstrument';
  }

  public connectedCallback(): void {
    super.connectedCallback();
    console.log('connectedCallback');

    // this.initPlugins();
    FSComponent.render(<MyComponent />, document.getElementById('InstrumentContent'));
  }

  // public async initPlugins(): Promise<void> {
  //   this.pluginSystem = new PluginSystem<AvionicsPlugin<void>, void>();

  //   await this.pluginSystem.addScripts(this.xmlConfig, this.templateID, (target: string) => false);
  //   await this.pluginSystem.startSystem();

  //   /*
  //   // passing data:
  //   this.pluginSystem = new PluginSystem<AvionicsPlugin<MyPluginBinder>, MyPluginBinder>();

  //   await this.pluginSystem.addScripts(this.xmlConfig, this.templateID, (target: string) => false);
  //   await this.pluginSystem.startSystem({ bus: this.bus });
  //   */
  // }
}

registerInstrument('my-instrument', MyInstrument);
