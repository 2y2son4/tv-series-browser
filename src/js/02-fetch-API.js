/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// handler function to fetch data from API:
function getDataFromApi() {
  const searchInputElement = document.querySelector('.js-search-input');
  const search = searchInputElement.value;

  fetch(apiUrl + search)
    .then((response) => response.json())
    .then((data) => {
      const warningElement = document.querySelector('.js-warning');
      if (data.length === 0) {
        warningElement.classList.remove('hidden');
        warningElement.innerHTML = 'No results. Try again!';
        shows = [];
      } else {
        warningElement.classList.add('hidden');
        shows = data;
      }

      paintSearchCards();
      paintFavoriteCards();
      setInLocalStorage();
    })

    .catch(
      (error) => (
        document.querySelector('.js-warning').classList.remove('hidden'),
        (document.querySelector('.js-warning').innerHTML = `An error has occurred: ${error}`)
      )
    );
}

// handler function to listen to search
searchBtnElement.addEventListener('click', getDataFromApi);
