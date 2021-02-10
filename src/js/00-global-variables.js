/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// API
const apiUrl = '//api.tvmaze.com/search/shows?q=';

// paint cards
let noImageSrc = './assets/images/place-holder-img-medium.png';
let noImageSrcFavorite = './assets/images/place-holder-img-small.png';
const formElement = document.querySelector('.js-form');
const searchInputElement = document.querySelector('.js-search-input');
const searchBtnElement = document.querySelector('.js-search-btn');
const warningElement = document.querySelector('.js-warning');
const favoriteSection = document.querySelector('.js-favorite-shows');

// modal window
const buttonElement = document.querySelector('.js-modal-btn');
const modalWindow = document.querySelector('.js-modal');

//empty arrays for shows and favorites
let shows = [];
let favoriteShows = [];
