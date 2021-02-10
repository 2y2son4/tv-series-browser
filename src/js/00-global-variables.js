/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const apiUrl = 'http://api.tvmaze.com/search/shows?q=';

let noImageSrc = './assets/images/place-holder-img-medium.png';
let noImageSrcFavorite = './assets/images/place-holder-img-small.png';
const formElement = document.querySelector('.js-form');
const searchInputElement = document.querySelector('.js-search-input');
const searchBtnElement = document.querySelector('.js-search-btn');
const favoriteSection = document.querySelector('.js-favorite-shows');

let shows = [];
let favoriteShows = [];
