'use strict';
const apiUrl = 'http://api.tvmaze.com/search/shows?q=';
const searchInputElement = document.querySelector('.js-search-input');
// const searchBtnElement = document.querySelector('.js-search-btn');
// const titleElement = document.querySelector('.js-title');
const listElement = document.querySelector('.js-list');

let series = [];

// let favorites = [];

function getDataFromApi() {
  const search = searchInputElement.value;
  fetch(apiUrl + search)
    .then((response) => response.json())
    .then((data) => {
      series = data;
      paintCards();
    });
}

function paintCards() {
  let htmlCode;
  for (const serie of series) {
    htmlCode += '    <li class="js-list-element">';
    htmlCode += '<article class="page__card">';
    htmlCode += `<h2 class="js-title page__card--title">${serie.show.name}</h2>`;
    htmlCode += `<img class="js-image page__card--img" src="${serie.show.image.medium}" alt="${serie.show.name}" />`;
    htmlCode += '</li>';
    htmlCode += '</article>';
  }
  console.log(listElement);
  listElement.innerHTML = htmlCode;
}

getDataFromApi();
