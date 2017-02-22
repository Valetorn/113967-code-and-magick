'use strict';

window.colorizeElement = (function () {
  return function (element, colors, callback) {
    var currentColor = colors[0];
    function changeColor() {
      currentColor = window.utils.getRandomElementExcept(colors, currentColor);
      callback(element, currentColor);
    }
    element.addEventListener('click', function () {
      changeColor();
      setTimeout(window.loadWizards, 5000);
    });
    element.addEventListener('keydown', function (evt) {
      if (window.utils.isActivationEvent(evt)) {
        changeColor();
        setTimeout(window.loadWizards, 5000);
      }
    });
  };
})();

