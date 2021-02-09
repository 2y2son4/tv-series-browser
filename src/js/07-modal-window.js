'use strict';

const buttonElement = document.querySelector('.js-modal-btn');
const modalWindow = document.querySelector('.js-modal');

setTimeout(() => {
  modalWindow.classList.remove('hidden');
}, 1500);

buttonElement.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
});
