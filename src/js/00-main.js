'use strict';
const apiUrl = 'http://api.tvmaze.com/search/shows?q=';
const searchInputElement = document.querySelector('.js-search-input');
// const searchBtnElement = document.querySelector('.js-search-btn');
// const titleElement = document.querySelector('.js-title');
const listElement = document.querySelector('.js-list-element');

let series = [];

// let favorites = [];

function getDataFromApi() {
  const search = searchInputElement.value;
  fetch(apiUrl + search)
    .then((response) => response.json())
    .then((data) => {
      let htmlCode;
      series = data;
      for (const serie of series) {
        htmlCode += '<article class="page__card">';
        htmlCode += `<h2 class="js-title page__card--title">${serie.show.name}</h2>`;
        htmlCode += `<img class="js-image page__card--img" src="${serie.show.image.medium}" alt="${serie.show.name}" />`;
        htmlCode += '</article>';
      }
      listElement.innerHTML = htmlCode;
    });
}

// function paintCards() {
// }

getDataFromApi();
