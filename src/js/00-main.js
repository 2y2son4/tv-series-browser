'use strict';
const apiUrl = 'http://api.tvmaze.com/search/shows?q=';
const noImageUrlText = 'Image not found';
let noImageUrl = `https://via.placeholder.com/210x295/ffffff/666666/?text=${noImageUrlText}`;
// let noImageUrlFavorite = `https://via.placeholder.com/125x175/ffffff/666666/?text=${noImageUrlText}`;
const formElement = document.querySelector('.js-form');
const searchInputElement = document.querySelector('.js-search-input');
const searchBtnElement = document.querySelector('.js-search-btn');

let shows = [];
// let favoriteShows = [];

// local storage

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
      paintSearchCards();
    });
}

searchBtnElement.addEventListener('click', getDataFromApi);

// paint card:
function paintSearchCards() {
  let htmlCode;
  for (const show of shows) {
    // paint HTML code
    htmlCode += `<li class="js-list-element" id="${show.show.id}">`;
    htmlCode += `<h2 class="page__card--title">${show.show.name}</h2>`;
    if (show.show.image === null) {
      htmlCode += `<img class="js-image page__card--img" src="${noImageUrl}" alt="${show.show.name}" />`;
    } else {
      htmlCode += `<img class="js-image page__card--img" src="${show.show.image.medium}" alt="${show.show.name}" />`;
    }
    htmlCode += '</li>';
  }
  const listElement = document.querySelector('.js-list');
  listElement.innerHTML = htmlCode;
  // listen to event after painting
  listenShowEvents();
}

/*function paintFavoriteCards() {
  let htmlCode;
  htmlCode += '<ul class="main__list js-list-favorites">';
  for (const show of shows) {
    // paint HTML code
    htmlCode += `<li class="js-list-element-favorite" id="${show.show.id}">`;
    htmlCode += `<h2 class="page__card--title">${show.show.name}</h2>`;
    if (show.show.image === null) {
      htmlCode += `<img class="js-image page__card--img" src="${noImageUrlFavorite}" alt="${show.show.name}" />`;
    } else {
      htmlCode += `<img class="js-image page__card--img" src="${show.show.image.medium}" alt="${show.show.name}" />`;
    }
    htmlCode += '</li>';
  }
  htmlCode += '</ul>';

  const listFavoriteElement = document.querySelector('.js-favorite-shows');
  listFavoriteElement.innerHTML = htmlCode;
}*/

function listenShowEvents() {
  const cardElements = document.querySelectorAll('.js-list-element');
  for (const cardElement of cardElements) {
    cardElement.addEventListener('click', handleShow);
  }
}

function handleShow(ev) {
  const clickedShow = ev.currentTarget;
  const clickedShowId = ev.currentTarget.id;
  console.log(clickedShowId);
  // esto no hay que hacerlo al final, pero hay que ir tirando para conservar la cabeza...
  clickedShow.classList.toggle('card--favorite');
}

getDataFromApi();
