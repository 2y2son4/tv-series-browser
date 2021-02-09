/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// reset button for favorite shows
function handleResetBtn() {
  console.log('man clicao');
  favoriteSection.classList.add('hidden');
  console.log(favoriteSection);
  console.log(favoriteShows);
  favoriteShows = [];
}

const favoriteBtnElement = document.querySelector('.js-reset-btn');
favoriteBtnElement.addEventListener('click', handleResetBtn);
