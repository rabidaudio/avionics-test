import { IncludeFragmentElement } from "@github/include-fragment-element"

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
    this.addEventListener('include-fragment-replace', (e) => {
        e.preventDefault()
        const fragment: DocumentFragment = (e as any).detail.fragment
        this.replaceWith(this.#rewriteElements(fragment))
        this.#inject()
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

  // inject the element by name into the dom
  #inject() {
    const name = this.getAttribute('name')
    if (!name) return
    
    const ctor = customElements.get('name')
    console.log('inject', name, ctor)
    if (ctor) document.body.appendChild(new ctor())
  }
}

IncludeInstrumentElement.define()
