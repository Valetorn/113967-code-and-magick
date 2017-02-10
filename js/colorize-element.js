'use strict';

window.colorizeElement = function (element, colors, property) {
  var currentColor = element.style[property];
  function changeColor() {
    currentColor = window.utils.getRandomElementExcept(colors, currentColor);
    element.style[property] = currentColor;
  }
  element.addEventListener('click', changeColor);
  element.addEventListener('keydown', function (evt) {
    if (window.activateSetup(evt)) {
      changeColor();
    }
  });
};
