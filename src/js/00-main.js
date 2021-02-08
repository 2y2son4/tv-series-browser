'use strict';
const apiUrl = 'http://api.tvmaze.com/search/shows?q=';
const noImageUrlText = 'Image not found';
const noImageUrl = `https://via.placeholder.com/210x295/ffffff/666666/?text=${noImageUrlText}`;
// const noImageUrlFavorite = `https://via.placeholder.com/125x175/ffffff/666666/?text=${noImageUrlText}`;
const formElement = document.querySelector('.js-form');
const searchInputElement = document.querySelector('.js-search-input');
const searchBtnElement = document.querySelector('.js-search-btn');
const listElement = document.querySelector('.js-list');

let series = [];
// let favorites = [];

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
      series = data;
      paintCards();
    });
}

searchBtnElement.addEventListener('click', getDataFromApi);

// paint card:
function paintCards() {
  let htmlCode;

  for (const serie of series) {
    htmlCode += `<li class="js-list-element id="${serie.show.id}>`;
    htmlCode += `<h2 class="page__card--title">${serie.show.name}</h2>`;
    if (serie.show.image === null) {
      htmlCode += `<img class="js-image page__card--img" src="${noImageUrl}" alt="${serie.show.name}" />`;
    } else {
      htmlCode += `<img class="js-image page__card--img" src="${serie.show.image.medium}" alt="${serie.show.name}" />`;
    }
    htmlCode += '</li>';
  }
  listElement.innerHTML = htmlCode;
  // listen to event after painting
  listenShowEvents();
}

function listenShowEvents() {
  const cardElements = document.querySelectorAll('.js-list-element');
  for (const cardElement of cardElements) {
    cardElement.addEventListener('click', handleShow);
  }
}

function handleShow(ev) {
  console.log(ev.currentTarget);
}

// const cardElements = document.querySelectorAll('.js-list-element');
// console.log(cardElements);

// function handleSelectedCard() {
//   for (cardElement of cardElements) {
//     cardElement.classList.toggle('card--favorite');
//   }
// }

// listElement.addEventListener('click', handleSelectedCard);

getDataFromApi();
