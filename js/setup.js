'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.getElementById('wizard-coat');
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = document.getElementById('wizard-eyes');
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
var fireballWrapColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var colorIndex = 0;

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});
setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});
wizardCoat.addEventListener('click', function () {
  colorIndex++;
  if (colorIndex > coatColors.length - 1) {
    colorIndex = 0;
  }
  wizardCoat.style.fill = coatColors[colorIndex];
});
wizardEyes.addEventListener('click', function () {
  colorIndex++;
  if (colorIndex > eyesColors.length - 1) {
    colorIndex = 0;
  }
  wizardEyes.style.fill = eyesColors[colorIndex];
});
setupFireballWrap.addEventListener('click', function () {
  var fireballWrapColor = Math.floor(Math.random() * fireballWrapColors.length);
  setupFireballWrap.style.backgroundColor = fireballWrapColors[fireballWrapColor];
});
