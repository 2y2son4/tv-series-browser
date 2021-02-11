/* eslint-disable no-undef */
'use strict';

// listener and fuction for close btn in modal window
modelBtnElement.addEventListener('click', () => {
  modalWindow.classList.add('hidden');
});

// function to prevent modal window to appear after first time in the page
function modalOff() {
  getFromLocalStorage();
  if (favoriteShows.length !== 0) {
    modalWindow.classList.add('hidden');
  } else {
    // function to delay modal window
    setTimeout(() => {
      modalWindow.classList.remove('hidden');
    }, 2000);
  }
}

modalOff();
