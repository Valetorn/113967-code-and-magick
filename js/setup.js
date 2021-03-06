'use strict';

var setupOpen = document.querySelector('.setup-open');
var setupClose = document.querySelector('.setup-close');
var setupSubmit = document.querySelector('.setup-submit');
var wizardCoat = document.getElementById('wizard-coat');
var wizardEyes = document.getElementById('wizard-eyes');
var setupFireballWrap = document.querySelector('.setup-fireball-wrap');

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballWrapColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

setupOpen.addEventListener('click', function () {
  window.enableSetup.showSetupElement();
});
setupOpen.addEventListener('keydown', function (evt) {
  if (window.utils.isActivationEvent(evt)) {
    window.enableSetup.showSetupElement();
    window.enableSetup.callback = (function () {
      document.querySelector('.setup-open-icon').focus();
    });
  }
});
setupClose.addEventListener('click', function () {
  window.enableSetup.hideSetupElement();
});
setupClose.addEventListener('keydown', function (evt) {
  if (window.utils.isActivationEvent(evt)) {
    window.enableSetup.hideSetupElement();
  }
});
setupSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  window.enableSetup.hideSetupElement();
});
setupSubmit.addEventListener('keydown', function (evt) {
  if (window.utils.isActivationEvent(evt)) {
    evt.preventDefault();
    window.enableSetup.hideSetupElement();
  }
});

window.colorizeElement(setupFireballWrap, fireballWrapColors, window.utils.changeBackground);
window.colorizeElement(wizardCoat, coatColors, window.utils.fillElement);
window.colorizeElement(wizardEyes, eyesColors, window.utils.fillElement);

