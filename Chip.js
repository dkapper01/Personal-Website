export class Chip extends HTMLElement {
  static get observedAttributes() {
    return ["color", "href"]; // Observe the color attribute for changes
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "color") {
      this.render(); // Re-render the component when the color attribute changes
    }
  }

  render() {
    this.shadowRoot.innerHTML = `
      <style>
          :host {
              --custom-chip-background-color: ${this.color}; /* Use a CSS variable for the background color */
          }
                  a {
              text-decoration: none; /* Remove default anchor styling */
              color: inherit; /* Inherit the color from the parent */
          }
          .custom-chip {
              padding: 5px 10px;
              background-color: var(--custom-chip-background-color);
              border-radius: 40px;
              display: inline-flex;
              align-items: center;
              gap: 8px;
              cursor: pointer;
              font-size: 14px;
          }
          .custom-chip:hover {
              background-color: #434343;
              color: white;
          }
      </style>
      <a href="${this.href}" 
      target="_blank"
      class="custom-chip">
          ${this.label}
      </a>
    `;
  }

  get color() {
    return this.getAttribute("color");
  }

  set color(newValue) {
    this.setAttribute("color", newValue);
  }

  get label() {
    return this.getAttribute("label");
  }
}

customElements.define("custom-chip", Chip);
