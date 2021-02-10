/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// handler function to fetch data from API:
function getDataFromApi() {
  const search = searchInputElement.value;
  fetch(apiUrl + search)
    .then((response) => response.json())
    .then((data) => {
      if (data.length === 0) {
        warningElement.classList.remove('hidden');
        warningElement.innerHTML = 'No results. Try again!';
        shows = [];
      } else {
        warningElement.innerHTML = '';
        warningElement.classList.add('hidden');
        shows = data;
      }

      paintSearchCards();
      paintFavoriteCards();
      setInLocalStorage();
    });
}

// handler function to listen to search
searchBtnElement.addEventListener('click', getDataFromApi);
