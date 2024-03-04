import "./Chip.js"; // Path to your Chip component file

export class ProjectCard extends HTMLElement {
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
      <div 
       style="max-height: 275px;"
      >
        <h2>${this.number}</h2>
         <custom-chip label="Click me!" color="#FF5733"></custom-chip>
        <p>${this.name}</p>
        <p>Year: ${this.year}</p>
        <a href="${this.url}">More info</a>
        <p>${this.description}</p>
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

customElements.define("project-card", ProjectCard);
