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
var gradePosition = ['45deg', '90deg', '-45deg', '-90deg'];

setupOpen.addEventListener('click', function () {
  setup.classList.remove('invisible');
});
setupClose.addEventListener('click', function () {
  setup.classList.add('invisible');
});
wizardCoat.addEventListener('click', function () {
  var coatColor = Math.floor(Math.random() * coatColors.length);
  wizardCoat.style.fill = coatColors[coatColor];
});
wizardEyes.addEventListener('click', function () {
  var eyesColor = Math.floor(Math.random() * eyesColors.length);
  wizardEyes.style.fill = eyesColors[eyesColor];
});
setupFireballWrap.addEventListener('click', function () {
  var fireballWrapColor1 = Math.floor(Math.random() * fireballWrapColors.length);
  var fireballWrapColor2 = Math.floor(Math.random() * 3);
  var position = Math.floor(Math.random() * gradePosition.length);
  var grade = 'linear-gradient(' + gradePosition[position] + ', ' + fireballWrapColors[fireballWrapColor1] + ', ' + fireballWrapColors[fireballWrapColor2] + ')';
  setupFireballWrap.style.background = grade;
});
