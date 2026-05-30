import { FSComponent, DisplayComponent, VNode } from '@microsoft/msfs-sdk'

import './MyComponent.css'

export class MyComponent extends DisplayComponent<any> {
  public render(): VNode {
    return (
      <div class='my-component'>Hello World!</div>
    )
  }
}
