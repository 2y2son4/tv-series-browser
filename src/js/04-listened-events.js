/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// listen to show events
function listenShowEvents() {
  const cardElements = document.querySelectorAll('.js-list-element');
  for (const cardElement of cardElements) {
    cardElement.addEventListener('click', handleShow);
  }
}

function handleShow(ev) {
  if (favoriteShows !== undefined) {
    favoriteSection.classList.remove('hidden');
  } else {
    favoriteSection.classList.add('hidden');
  }
  const clickedShowId = Number(ev.currentTarget.id);

  // find if the clicked show is already in the favoriteShows array
  const favoriteCLickedShow = favoriteShows.find((favShow) => favShow.show.id === clickedShowId);
  if (favoriteCLickedShow === undefined) {
    // add to favoriteShows[] the shows with the clicked ID.
    const clickedShow = shows.find((tvShow) => clickedShowId === tvShow.show.id);
    favoriteShows.push(clickedShow);
    //console.log('No está, lo añado');
  } else {
    const filteredFavorites = favoriteShows.filter((favShow) => favShow.show.id !== clickedShowId);
    favoriteShows = filteredFavorites;
    //console.log('Si está, lo quito');
  }

  paintSearchCards();
  paintFavoriteCards();
  listenResetBtn();
}

// listen to favorite show events
function listenFavoriteShowEvents() {
  const favoriteElements = document.querySelectorAll('.js-list-element-favorite');
  for (const favoriteElement of favoriteElements) {
    favoriteElement.addEventListener('click', handleFavoriteShow);
  }
}

function handleFavoriteShow(ev) {
  const clickedShowId = Number(ev.currentTarget.id);

  // find if the clicked show is already in the favoriteShows array
  const favoriteCLickedShow = favoriteShows.find((favShow) => favShow.show.id === clickedShowId);
  if (favoriteCLickedShow === undefined) {
    // add to favoriteShows[] the shows with the clicked ID.
    const clickedShow = shows.find((tvShow) => clickedShowId === tvShow.show.id);
    favoriteShows.push(clickedShow);
  } else {
    const filteredFavorites = favoriteShows.filter((favShow) => favShow.show.id !== clickedShowId);
    favoriteShows = filteredFavorites;
  }
  paintSearchCards();
  paintFavoriteCards();
  listenResetBtn();
}
