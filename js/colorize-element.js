'use strict';

window.colorizeElement = function(element, colors, property) {
  var currentColor = colors[0];
  element.addEventListener('click', function () {
    window.utils.getRandomElementExcept(colors, currentColor);
    currentColor = window.utils.getRandomElementExcept();
    console.log(currentColor);
    element.style[property] = currentColor;
  });
}