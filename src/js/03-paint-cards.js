/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// paint search card:
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
      htmlCode += `<a class="page__card--link" href="${show.show.officialSite}" target="_blank" title="${show.show.name} official site">${show.show.name}</a>`;
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
  const listElement = document.querySelector('.js-search-shows');
  listElement.innerHTML = htmlCode;

  // listen to event after painting
  listenShowEvents();
  listenResetBtn();
}

// paint Favorite shows cards
function paintFavoriteCards() {
  // paint HTML code
  let htmlCode = '<button class="js-reset-btn">Clean favorites</button>';
  htmlCode += '<ul class="main__list js-list-favorites">';
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
  listenResetBtn();
  setInLocalStorage();
}
