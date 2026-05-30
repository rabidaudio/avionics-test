import { IncludeFragmentElement } from "@github/include-fragment-element"
import "./MockSimVar"

import '@microsoft/msfs-sdk'

// import { MyInstrument } from "./MyInstrument"

// registerInstrument('my-instrument', MyInstrument)

// This wraps @github/include-fragment-element using events to adjust the
// content to support MSFS's bizarre instrument html formats. Notably,
// these html fragments have:
//  - script tags where divs are placed
//      <script type="text/html" id="MyInstrument"><div id="InstrumentContent"></div></script>
// - normal css imports
//      <link rel="stylesheet" href="MyInstrument.css" />
// - script tags where logic is imported
//      <script type="text/html" import-script="/Pages/VCockpit/Instruments/MyInstrument/MyInstrument.js"></script>
class IncludeInstrumentElement extends IncludeFragmentElement {
  static define(tag = 'include-instrument', registry = customElements) {
    registry.define(tag, this)
    return this
  }

  connectedCallback(): void {
    super.connectedCallback()
    // const fragment = document.importNode(template.content, true)
    this.addEventListener('include-fragment-replace', (e) => {
        e.preventDefault()
        const fragment: DocumentFragment = (e as any).detail.fragment
        this.replaceWith(this.#rewriteElements(fragment))
    })
  }

  // recursively mutate the fragment in place
  #rewriteElements(parent: Node) {
        for (const child of parent.childNodes) {
            if (child.nodeType == Node.ELEMENT_NODE) {
                const el = child as Element
                const type = el.getAttribute('type')
                const src = el.getAttribute('import-script')
                const id = el.getAttribute("id")
                if (el.tagName === 'SCRIPT' && type == "text/html") {
                    if (src) {
                        // script tag
                        const newEl = document.createElement('script')
                        newEl.setAttribute('src', src)
                        // el.setAttribute("type", "text/javascript")
                        // el.removeAttribute("type")
                        // el.removeAttribute('import-script')
                        // el.setAttribute("src", src)
                        // parent.replaceChild(newEl, el)
                        parent.removeChild(el)
                        document.head.appendChild(newEl)
                    } else if (id) {
                        // html content
                        const newEl = document.createElement('div')
                        newEl.innerHTML = el.innerHTML
                        parent.replaceChild(newEl, el)
                    }
                } else {
                    this.#rewriteElements(el)
                }
            }
        }
        return parent
  }
}

IncludeInstrumentElement.define()
