/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// API
const apiUrl = '//api.tvmaze.com/search/shows?q=';

// paint cards
const formElement = document.querySelector('.js-form');
const searchBtnElement = document.querySelector('.js-search-btn');

// modal window
const modelBtnElement = document.querySelector('.js-modal-btn');
const modalWindow = document.querySelector('.js-modal');

//empty arrays for shows and favorites
let shows = [];
let favoriteShows = [];
