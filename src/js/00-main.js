'use strict';
const apiUrl = 'http://api.tvmaze.com/search/shows?q=';
const noImageUrlText = 'Image not found';
let noImageUrl = `https://via.placeholder.com/210x295/ffffff/666666/?text=${noImageUrlText}`;
let noImageUrlFavorite = `https://via.placeholder.com/125x175/ffffff/666666/?text=${noImageUrlText}`;
const formElement = document.querySelector('.js-form');
const searchInputElement = document.querySelector('.js-search-input');
const searchBtnElement = document.querySelector('.js-search-btn');

let shows = [];
let favoriteShows = [];

// prevent submit form
function handleForm(ev) {
  ev.preventDefault();
}

formElement.addEventListener('submit', handleForm);

// fetch data from API:
function getDataFromApi() {
  const search = searchInputElement.value;
  fetch(apiUrl + search)
    .then((response) => response.json())
    .then((data) => {
      shows = data;
      console.log(shows);
      paintSearchCards();
      paintFavoriteCards();
      setInLocalStorage();
    });
}

searchBtnElement.addEventListener('click', getDataFromApi);

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

// paint card:
function paintSearchCards() {
  let htmlCode = '<ul class="main__list">';
  let favClass;
  for (const show of shows) {
    // find if the show is already in the favoriteShows array
    const isInFav = favoriteShows.find((favShow) => favShow.show.id === show.show.id);
    if (isInFav === undefined) {
      favClass = '';
    } else {
      favClass = ' card--favorite';
    }
    // paint HTML code
    htmlCode += `<li class="js-list-element${favClass}" id="${show.show.id}">`;
    if (show.show.officialSite === null) {
      htmlCode += `<h2 class="page__card--title">${show.show.name}</h2>`;
    } else {
      htmlCode += '<h2 class="page__card--title">';
      htmlCode += `<a href="${show.show.officialSite}" target="_blank" title="${show.show.name} official site">${show.show.name}</a>`;
      htmlCode += '</h2>';
    }

    if (show.show.image === null) {
      htmlCode += `<img class="js-image page__card--img" src="${noImageUrl}" alt="${show.show.name}" />`;
    } else {
      htmlCode += `<img class="js-image page__card--img" src="${show.show.image.medium}" alt="${show.show.name}" />`;
    }
    if (show.show.rating.average === null) {
      htmlCode += '';
    } else {
      htmlCode += `<span class="page__card--rating">${show.show.rating.average}</span>`;
    }
    htmlCode += '</li>';
  }
  htmlCode += '</ul>';
  const listElement = document.querySelector('.js-list');
  listElement.innerHTML = htmlCode;

  // listen to event after painting
  listenShowEvents();
}

// paint Favorite shows cards
function paintFavoriteCards() {
  // paint HTML code
  let htmlCode = '<ul class="main__list js-list-favorites">';
  // add/remove hidden CSS class for unfavorited shows
  let hiddenClass;
  for (const favoriteShow of favoriteShows) {
    const isInFav = favoriteShows.find((favShow) => favShow.show.id === favoriteShow.show.id);
    if (isInFav === undefined) {
      hiddenClass = ' hidden';
    } else {
      hiddenClass = '';
    }
    htmlCode += `<li class="js-list-element-favorite${hiddenClass}" id="${favoriteShow.show.id}">`;
    htmlCode += `<h3 class="page__card--title">${favoriteShow.show.name}<img src="./assets/images/icon-close.png" alt="Close" class="icon--close"></h3>`;
    // htmlCode += '';
    if (favoriteShow.show.image === null) {
      htmlCode += `<img class="js-image page__card--img" src="${noImageUrlFavorite}" alt="${favoriteShow.show.name}" />`;
    } else {
      htmlCode += `<img class="js-image page__card--img" src="${favoriteShow.show.image.medium}" alt="${favoriteShow.show.name}" />`;
    }
    htmlCode += '</li>';
  }
  htmlCode += '</ul>';

  const listFavoriteElement = document.querySelector('.js-favorite-shows');
  listFavoriteElement.innerHTML = htmlCode;
  // listen to event after painting
  listenFavoriteShowEvents();
  setInLocalStorage();
}

function listenShowEvents() {
  const cardElements = document.querySelectorAll('.js-list-element');
  for (const cardElement of cardElements) {
    cardElement.addEventListener('click', handleShow);
  }
}

function handleShow(ev) {
  const clickedShowId = Number(ev.currentTarget.id);
  console.log(clickedShowId);
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
  // console.log(favoriteCLickedShow);

  // console.log(favoriteShows);
  paintSearchCards();
  paintFavoriteCards();
}

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
}
