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

  connectedCallback() {
    super.connectedCallback()
    this.addEventListener('include-fragment-replace', (e) => {
        e.preventDefault()
        const fragment = e.detail.fragment
        this.replaceWith(this.#rewriteElements(fragment))
    })
  }

  // recursively mutate the fragment in place
  #rewriteElements(parent) {
        for (const child of parent.childNodes) {
            if (child.nodeType == Node.ELEMENT_NODE) {
                const type = child.getAttribute('type')
                const src = child.getAttribute('import-script')
                const id = child.getAttribute("id")
                if (child.tagName === 'SCRIPT' && type == "text/html") {
                    if (src) {
                        // script tag
                        const newEl = document.createElement('script')
                        newEl.setAttribute('src', src)
                        parent.removeChild(child)
                        document.head.appendChild(newEl)
                    } else if (id) {
                        // html content
                        const newEl = document.createElement('div')
                        newEl.innerHTML = child.innerHTML
                        parent.replaceChild(newEl, child)
                    }
                } else {
                    this.#rewriteElements(child)
                }
            }
        }
        return parent
  }
}

IncludeInstrumentElement.define()
