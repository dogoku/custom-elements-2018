'use strict';

var AFaceProto = Object.create(HTMLElement.prototype);

AFaceProto.createdCallback = function() {
  this.innerHTML = 'v0'
};

AFaceProto.attachedCallback = function () {
  this.classList.add('upgraded');
}

module.exports = document.registerElement('a-face', { prototype: AFaceProto});
