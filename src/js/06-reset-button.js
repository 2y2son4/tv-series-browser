/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// reset button for favorite shows
function handleResetBtn() {
  // empty favoriteShows array
  favoriteShows = [];

  // repaint cards
  paintFavoriteCards();
  paintSearchCards();
}

// function to listen to delete btn events
function listenResetBtn() {
  const favoriteBtnElement = document.querySelector('.js-reset-btn');
  favoriteBtnElement.addEventListener('click', handleResetBtn);
}

// function to stop listening to delete btn
function removeListenReset() {
  const favoriteBtnElement = document.querySelector('.js-reset-btn');
  if (favoriteBtnElement !== null) {
    favoriteBtnElement.removeEventListener('click', handleResetBtn);
  }
}
