/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// local storage
function setInLocalStorage() {
  localStorage.setItem('favoriteShows', JSON.stringify(favoriteShows));
}

function getFromLocalStorage() {
  const arrayFavoriteShows = JSON.parse(localStorage.getItem('favoriteShows'));
  // find if favoriteShows = [].
  if (arrayFavoriteShows !== null) {
    favoriteShows = arrayFavoriteShows;
  }
}

// get data from LS when the page start
getFromLocalStorage();

// paint cards so when the page is refresh they appear in favorites
paintFavoriteCards();
