/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

const apiUrl = 'http://api.tvmaze.com/search/shows?q=';
const noImageUrlText = 'Image not found';
let noImageUrl = `https://via.placeholder.com/210x295/ffffff/666666/?text=${noImageUrlText}`;
let noImageUrlFavorite = `https://via.placeholder.com/125x175/ffffff/666666/?text=${noImageUrlText}`;
const formElement = document.querySelector('.js-form');
const searchInputElement = document.querySelector('.js-search-input');
const searchBtnElement = document.querySelector('.js-search-btn');
const favoriteSection = document.querySelector('.js-favorite-shows');

let shows = [];
let favoriteShows = [];
