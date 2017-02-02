'use strict';

var setup = document.querySelector('.setup');
var setupOpen = document.querySelector('.setup-open');
var setupOpenIcon = setupOpen.querySelector('.setup-open-icon');
var setupClose = setup.querySelector('.setup-close');
var wizardCoat = document.getElementById('wizard-coat');
var coatColors = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];
var wizardEyes = document.getElementById('wizard-eyes');
var eyesColors = ['black', 'red', 'blue', 'yellow', 'green'];
var setupFireballWrap = setup.querySelector('.setup-fireball-wrap');
var fireballWrapColors = ['#ee4830', '#30a8ee', '#5ce6c0', '#e848d5', '#e6e848'];
var colorIndex = 0;

var ENTER_KEY_CODE = 13;
var ESCAPE_KEY_CODE = 27;

function activateSetup(evt) {
  return evt.keyCode && evt.keyCode === ENTER_KEY_CODE;
}
function setupKeydownHandler(evt) {
  if (evt.keyCode === ESCAPE_KEY_CODE) {
    setup.classList.add('invisible');
  }
}
function showSetupElement(evt) {
  setup.classList.remove('invisible');
  setupOpenIcon.setAttribute('aria-pressed', 'true');
  setupClose.setAttribute('aria-pressed', 'false');
  document.addEventListener('keydown', setupKeydownHandler);
}
function hideSetupElement(evt) {
  setup.classList.add('invisible');
  setupClose.setAttribute('aria-pressed', 'true');
  setupOpenIcon.setAttribute('aria-pressed', 'false');
  document.removeEventListener('keydown', setupKeydownHandler);
}
function getColor(wizardElement, elementColors) {
  colorIndex++;
  if (colorIndex > elementColors.length - 1) {
    colorIndex = 0;
  }
  wizardElement.style.fill = elementColors[colorIndex];
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
wizardCoat.addEventListener('click', function () {
  getColor(wizardCoat, coatColors);
});
wizardEyes.addEventListener('click', function () {
  getColor(wizardEyes, eyesColors);
});
setupFireballWrap.addEventListener('click', function () {
  var fireballWrapColor = Math.floor(Math.random() * fireballWrapColors.length);
  setupFireballWrap.style.backgroundColor = fireballWrapColors[fireballWrapColor];
});
