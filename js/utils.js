'use strict';

window.utils = {
  getRandomElement: function(array) {
    var randomElement = Math.floor(Math.random() * array.length);
    return array[randomElement];
  },
  getRandomElementExcept: function(array, arrayElement) {
    var newElement = arrayElement;
    while (newElement === arrayElement) {
      newElement = utils.getRandomElement(array);
      return array[newElement];
    }
  }
};