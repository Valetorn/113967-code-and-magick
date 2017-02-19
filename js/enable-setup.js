'use strict';

window.enableSetup = (function () {
  var setup = document.querySelector('.setup');
  var setupOpenIcon = document.querySelector('.setup-open-icon');
  
  var setupKeydownHandler = function (evt) {
    if (window.utils.isDeactivationEvent(evt)) {
      setup.classList.add('invisible');
      changeAriaAttribute(false);
    }
  };
  var changeAriaAttribute = function (isOpen) {
    setupOpenIcon.setAttribute('aria-pressed', isOpen);
    wizardCoat.setAttribute('aria-pressed', isOpen);
    wizardEyes.setAttribute('aria-pressed', isOpen);
    setupFireballWrap.setAttribute('aria-pressed', isOpen);
    setup.querySelector('.setup-close').setAttribute('aria-pressed', !isOpen);
  };
  return {
    showSetupElement: function (evt) {
      setup.classList.remove('invisible');
      document.addEventListener('keydown', setupKeydownHandler);
      changeAriaAttribute(true);
    },
    hideSetupElement: function (evt) {
      setup.classList.add('invisible');
      document.removeEventListener('keydown', setupKeydownHandler);
      changeAriaAttribute(false);
      
      if (typeof this.callback === 'function') {
        this.callback();
      }
    },
    callback: null
  };  
})();