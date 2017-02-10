'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var setupSubmit = setup.querySelector('.setup-submit');
var wizardCoat = document.getElementById('wizard-coat');
var wizardEyes = document.getElementById('wizard-eyes');
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');

var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var fireballWrapColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

function activateSetup(evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
}
function setupKeydownHandler(evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
    changeAriaAttribute(false);
  }
}
function changeAriaAttribute(isOpen) {
  setupOpenIcon.setAttribute('aria-pressed', isOpen);
  wizardCoat.setAttribute('aria-pressed', isOpen);
  wizardEyes.setAttribute('aria-pressed', isOpen);
  setupFireballWrap.setAttribute('aria-pressed', isOpen);
  setupClose.setAttribute('aria-pressed', !isOpen);
}
function showSetupElement(evt) {
  setup.classList.remove('invisible');
  document.addEventListener('keydown', setupKeydownHandler);
  changeAriaAttribute(true);
}
function hideSetupElement(evt) {
  setup.classList.add('invisible');
  document.removeEventListener('keydown', setupKeydownHandler);
  changeAriaAttribute(false);
}

setupOpen.addEventListener('click', function () {
  showSetupElement();
});
setupOpen.addEventListener('keydown', function (evt) {
  if (activateSetup(evt)) {
    showSetupElement();
  }
});
setupClose.addEventListener('click', function () {
  hideSetupElement();
});
setupClose.addEventListener('keydown', function (evt) {
  if (activateSetup(evt)) {
    hideSetupElement();
  }
});
setupSubmit.addEventListener('click', function (evt) {
  evt.preventDefault();
  hideSetupElement();
});
setupSubmit.addEventListener('keydown', function (evt) {
  if (activateSetup(evt)) {
    evt.preventDefault();
    hideSetupElement();
  }
});

window.colorizeElement(setupFireballWrap, fireballWrapColors, 'backgroundColor');
window.colorizeElement(wizardCoat, coatColors, 'fill');
window.colorizeElement(wizardEyes, eyesColors, 'fill');
