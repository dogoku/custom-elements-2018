'use strict';

// base class to extend, same trick as before
class HTMLCustomElement extends HTMLElement {
  constructor(...$) { const _ = super(...$); _.createdCallback(); return _; }
  createdCallback() { /* override as you like */ }
}

export default class BFace extends HTMLElement {
  constructor(...args) {
    var self = super(...args);
    self.innerHTML = 'v1';
  }
  connectedCallback() {
    this.classList.add('upgraded');
  }
}

customElements.define('b-face', BFace);
