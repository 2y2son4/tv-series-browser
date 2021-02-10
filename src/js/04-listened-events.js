/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// handler function for show events
function handleShow(ev) {
  const clickedShowId = Number(ev.currentTarget.id);

  // find if the clicked show is already in the favoriteShows array
  const favoriteCLickedShow = favoriteShows.find((favShow) => favShow.show.id === clickedShowId);
  if (favoriteCLickedShow === undefined) {
    // add to favoriteShows[] the shows with the clicked ID.
    const clickedShow = shows.find((tvShow) => clickedShowId === tvShow.show.id);
    favoriteShows.push(clickedShow);
  } else {
    // filter the ID if is already in the fav array and obtain the array of the unclicked shows
    const filteredFavorites = favoriteShows.filter((favShow) => favShow.show.id !== clickedShowId);
    favoriteShows = filteredFavorites;
  }

  // re/paint cards with the conditional info
  paintSearchCards();
  paintFavoriteCards();
}

// listen to show events
function listenShowEvents() {
  const cardElements = document.querySelectorAll('.js-list-element');
  for (const cardElement of cardElements) {
    cardElement.addEventListener('click', handleShow);
  }
}

// function to stop listening to show events
function removeListenShowEvents() {
  const cardElements = document.querySelectorAll('.js-list-element');
  for (const cardElement of cardElements) {
    cardElement.removeEventListener('click', handleShow);
  }
}

// handler function for favorite show events
function handleFavoriteShow(ev) {
  const clickedShowId = Number(ev.currentTarget.id);

  // find if the clicked show is already in the favoriteShows array
  const favoriteCLickedShow = favoriteShows.find((favShow) => favShow.show.id === clickedShowId);
  if (favoriteCLickedShow === undefined) {
    // add to favoriteShows[] the shows with the clicked ID if it isn't in the array already.
    const clickedShow = shows.find((tvShow) => clickedShowId === tvShow.show.id);
    favoriteShows.push(clickedShow);
  } else {
    // filter the ID if is already in the fav array and obtain the array of the unclicked fav shows
    const filteredFavorites = favoriteShows.filter((favShow) => favShow.show.id !== clickedShowId);
    favoriteShows = filteredFavorites;
  }

  // re/paint cards with the conditional info
  paintSearchCards();
  paintFavoriteCards();
}

// function to listen to favorite show events
function listenFavoriteShowEvents() {
  const favoriteElements = document.querySelectorAll('.js-list-element-favorite');
  for (const favoriteElement of favoriteElements) {
    favoriteElement.addEventListener('click', handleFavoriteShow);
  }
}

// function to stop listening to favorite show events
function removeListenFavoriteShowEvents() {
  const favoriteElements = document.querySelectorAll('.js-list-element-favorite');
  for (const favoriteElement of favoriteElements) {
    favoriteElement.removeEventListener('click', handleFavoriteShow);
  }
}
