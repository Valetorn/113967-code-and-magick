'use strict';

window.utils = {
  getRandomElement: function (array) {
    return array[Math.floor(Math.random() * array.length)];
  },
  getRandomElementExcept: function (array, currentArrayElement) {
    var newElement;
    do {
      newElement = this.getRandomElement(array);
    } while (newElement === currentArrayElement);
    return newElement;
  }
};
