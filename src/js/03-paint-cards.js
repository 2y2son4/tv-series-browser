/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// paint search card:
function paintSearchCards() {
  let htmlCode = '<ul class="main__list">';

  // paint HTML code
  let favClass;
  for (const show of shows) {
    // find if the show is already in the favoriteShows array
    const isInFav = favoriteShows.find((favShow) => favShow.show.id === show.show.id);
    if (isInFav === undefined) {
      favClass = '';
    } else {
      favClass = ' card--favorite';
    }

    htmlCode += `<li class="main__list--element js-list-element${favClass}" id="${show.show.id}">`;

    // add link to official site if the API has it
    if (show.show.officialSite === null) {
      htmlCode += `<h2 class="main__card--title">${show.show.name}</h2>`;
    } else {
      htmlCode += '<h2 class="main__card--title">';
      htmlCode += `<a class="main__card--link" href="${show.show.officialSite}" target="_blank" title="${show.show.name} official site">${show.show.name}</a>`;
      htmlCode += '</h2>';
    }
    const recommendLang = ['English', 'Spanish', 'Portuguese'];
    // add show's language and show if it it's recommended

    const isRecommen = recommendLang.find((lang) => lang === show.show.language);
    if (isRecommen !== undefined) {
      htmlCode += `<p class="main__card--language">${show.show.language} / Recommend!</p>`;
    } else {
      htmlCode += `<p class="main__card--language">${show.show.language}</p>`;
    }

    // add show's image if the API has it
    if (show.show.image === null) {
      htmlCode += `<img class="main__card--img" src="${noImageSrc}" alt="${show.show.name}" />`;
    } else {
      htmlCode += `<img class="main__card--img" src="${show.show.image.medium}" alt="${show.show.name}" />`;
    }

    // add show's rating
    if (show.show.rating.average === null) {
      htmlCode += '<span class="main__card--rating">-- / 10</span>';
    } else {
      htmlCode += `<span class="main__card--rating">${show.show.rating.average} / 10</span>`;
    }
    htmlCode += '</li>';
  }
  htmlCode += '</ul>';

  // remove listeners before re/painting to prevent memory leaks and slow downs
  removeListenShowEvents();

  // paint card in HTML file
  const listElement = document.querySelector('.js-search-shows');
  listElement.innerHTML = htmlCode;

  // listen to event after painting
  listenShowEvents();
}

// paint Favorite shows cards
function paintFavoriteCards() {
  // paint HTML code
  // add/remove hidden CSS class for un/favorited shows container
  let hiddenClass;
  if (favoriteShows.length === 0) {
    hiddenClass = ' hidden';
  } else {
    hiddenClass = '';
  }

  let htmlCode = `<div class="main__favorite${hiddenClass}">`;
  htmlCode += '<button class="fav__btn js-reset-btn">Clean favorites</button>';
  htmlCode += '<ul class="fav__list js-list-favorites">';

  for (const favoriteShow of favoriteShows) {
    htmlCode += `<li class="fav__list--li js-list-element-favorite" id="${favoriteShow.show.id}">`;
    htmlCode += `<h3 class="fav__card--title">${favoriteShow.show.name}</h3>`;

    // add show's image if the API has it or add placeholder
    if (favoriteShow.show.image === null) {
      htmlCode += `<img class="fav__card--img" src="${noImageSrcFavorite}" alt="${favoriteShow.show.name}" />`;
    } else {
      htmlCode += `<img class="fav__card--img" src="${favoriteShow.show.image.medium}" alt="${favoriteShow.show.name}" />`;
    }

    // add fake remove button
    htmlCode += '<button class="fav__card--btn" type="reset">Remove</button>';
    htmlCode += '</li>';
  }
  htmlCode += '</ul>';
  htmlCode += '</div>';

  // remove listeners before re/painting to prevent memory leaks and slow downs
  removeListenReset();
  removeListenFavoriteShowEvents();

  // paint card in HTML file
  const listFavoriteElement = document.querySelector('.js-favorite-shows');
  listFavoriteElement.innerHTML = htmlCode;

  // listen to event after painting
  listenFavoriteShowEvents();
  listenResetBtn();

  // save in LS after listening to events
  setInLocalStorage();
}
