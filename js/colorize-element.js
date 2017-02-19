'use strict';

window.colorizeElement = (function () {
  return function (element, colors, callback) {
    var currentColor = colors[0];
    function changeColor() {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      callback(element, currentColor);
    }
    element.addEventListener('click', changeColor);
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivationEvent(evt)) {
        changeColor();
      }
    });
  };
})();

