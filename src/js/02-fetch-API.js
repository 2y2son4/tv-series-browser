/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// fetch data from API:
function getDataFromApi() {
  const search = searchInputElement.value;
  fetch(apiUrl + search)
    .then((response) => response.json())
    .then((data) => {
      shows = data;

      paintSearchCards();
      paintFavoriteCards();
      setInLocalStorage();
    });
}

searchBtnElement.addEventListener('click', getDataFromApi);
