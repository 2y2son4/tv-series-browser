/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// local storage
function setInLocalStorage() {
  localStorage.setItem('favoriteShows', JSON.stringify(favoriteShows));
}

function getFromLocalStorage() {
  const arrayFavoriteShows = JSON.parse(localStorage.getItem('favoriteShows'));
  // find if it's the first time in the page or if the favorite arrays is empty.
  if (arrayFavoriteShows !== null) {
    favoriteShows = arrayFavoriteShows;
  }
}
getFromLocalStorage();
paintFavoriteCards();
