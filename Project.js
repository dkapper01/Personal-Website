import "./MyChip.js"; // Path to your MyChip component file

export class MyContainer extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor.
    this.attachShadow({ mode: "open" }); // Attach a shadow root to the element.
    this.render();
  }

  static get observedAttributes() {
    return ["description", "year", "url", "name", "number"]; // Observe changes to these attributes
  }

  attributeChangedCallback(name, oldValue, newValue) {
    this.render(); // Re-render the component whenever observed attributes change
  }

  render() {
    // Use attributes in the component's template
    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          border: 1px solid #ccc;
          padding: 10px;
        }
      </style>
      <div>
        <h2>${this.number}</h2>
        <p>${this.name}</p>
        <p>${this.description}</p>
        <p>Year: ${this.year}</p>
        <a href="${this.url}">More info</a>
        <my-chip label="Click me!" color="#FF5733"></my-chip>

      </div>
    `;
  }

  get description() {
    return this.getAttribute("description");
  }

  set description(newValue) {
    this.setAttribute("description", newValue);
  }

  get year() {
    return this.getAttribute("year");
  }

  set year(newValue) {
    this.setAttribute("year", newValue);
  }

  get url() {
    return this.getAttribute("url");
  }

  set url(newValue) {
    this.setAttribute("url", newValue);
  }

  get name() {
    return this.getAttribute("name");
  }

  set name(newValue) {
    this.setAttribute("name", newValue);
  }

  get number() {
    return this.getAttribute("number");
  }

  set number(newValue) {
    this.setAttribute("number", newValue);
  }
}

customElements.define("my-container", MyContainer);
