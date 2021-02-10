/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// function to delay modal window
setTimeout(() => {
  modalWindow.classList.remove('hidden');
}, 2000);

// listener and fuction for close btn in modal window
buttonElement.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
});
