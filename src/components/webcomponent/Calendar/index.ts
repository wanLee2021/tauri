

class Calendar extends HTMLElement {

  static get observedAttributes() {
    return [''];
  }
  constructor() {
    super();
    const template = document.createElement("template")
    template.innerHTML = `
    
    `

    const shadowDom = this.attachShadow({ mode: "closed"})
    shadowDom.appendChild(template.content.cloneNode(true))
  }

}


export default Calendar