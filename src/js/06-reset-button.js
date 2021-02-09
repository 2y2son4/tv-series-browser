/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// reset button for favorite shows
function handleResetBtn() {
  favoriteShows = [];
  paintFavoriteCards();
  paintSearchCards();
}

function listenResetBtn() {
  const favoriteBtnElement = document.querySelector('.js-reset-btn');
  favoriteBtnElement.addEventListener('click', handleResetBtn);
}

function removeListenReset() {
  const favoriteBtnElement = document.querySelector('.js-reset-btn');
  if (favoriteBtnElement !== null) {
    favoriteBtnElement.removeEventListener('click', handleResetBtn);
  }
}
