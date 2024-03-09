import "./Chip.js"; // Path to your Chip component file

export class ProjectCard extends HTMLElement {
  constructor() {
    super(); // Always call super() first in the constructor.
    this.attachShadow({ mode: "open" }); // Attach a shadow root to the element.
    this.render();
  }

  async connectedCallback() {
    const res = await fetch("./styles/project.css");
    const text = await res.text();
    const style = document.createElement("style");
    style.textContent = text;
    this.shadowRoot.appendChild(style);
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
      <div class="flex-item">
         <div class="slot">
           <h3 class="card-number">${this.number}</h3>
         </div>
         <div class="slot">
          <custom-chip label="Fullstack" color="#FF5733"></custom-chip>
         </div>
          <div class="slot">
           <p>${this.name}</p>
         </div>
         <div class="slot">
           <p>${this.year}</p>
         </div>
         <div class="slot">
           <p>${this.url}</p>
         </div>
          <div class="slot">
           <p>${this.description}</p>
         </div>

        </div>
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
