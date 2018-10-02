'use strict';

export default class BFace extends HTMLElement {
  connectedCallback() {
    this.classList.add('upgraded');
  }
}

customElements.define('b-face', BFace);
