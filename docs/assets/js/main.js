"use strict";const apiUrl="http://api.tvmaze.com/search/shows?q=",noImageUrlText="Image not found";let noImageUrl="https://via.placeholder.com/210x295/ffffff/666666/?text=Image not found",noImageUrlFavorite="https://via.placeholder.com/125x175/ffffff/666666/?text=Image not found";const formElement=document.querySelector(".js-form"),searchInputElement=document.querySelector(".js-search-input"),searchBtnElement=document.querySelector(".js-search-btn");let shows=[],favoriteShows=[];function handleForm(e){e.preventDefault()}function getDataFromApi(){const e=searchInputElement.value;fetch(apiUrl+e).then(e=>e.json()).then(e=>{shows=e,paintSearchCards(),paintFavoriteCards()})}function paintSearchCards(){let e,t="";for(const o of shows){e=void 0===favoriteShows.find(e=>e.show.id===o.show.id)?"":" card--favorite",t+=`<li class="js-list-element${e}" id="${o.show.id}">`,t+=`<h2 class="page__card--title">${o.show.name}</h2>`,null===o.show.image?t+=`<img class="js-image page__card--img" src="${noImageUrl}" alt="${o.show.name}" />`:t+=`<img class="js-image page__card--img" src="${o.show.image.medium}" alt="${o.show.name}" />`,t+="</li>"}document.querySelector(".js-list").innerHTML=t,listenShowEvents()}function paintFavoriteCards(){let e,t='<ul class="main__list js-list-favorites">';for(const o of favoriteShows){e=void 0===favoriteShows.find(e=>e.show.id===o.show.id)?" hidden":"",t+=`<li class="js-list-element-favorite${e}" id="${o.show.id}">`,t+=`<h2 class="page__card--title">${o.show.name}<img src="./assets/images/icon-close.png" alt="Close" class="icon--close"></h2>`,null===o.show.image?t+=`<img class="js-image page__card--img" src="${noImageUrlFavorite}" alt="${o.show.name}" />`:t+=`<img class="js-image page__card--img" src="${o.show.image.medium}" alt="${o.show.name}" />`,t+="</li>"}t+="</ul>";document.querySelector(".js-favorite-shows").innerHTML=t,listenFavoriteShowEvents()}function listenShowEvents(){const e=document.querySelectorAll(".js-list-element");for(const t of e)t.addEventListener("click",handleShow)}function handleShow(e){const t=Number(e.currentTarget.id);console.log(t);if(void 0===favoriteShows.find(e=>e.show.id===t)){const e=shows.find(e=>t===e.show.id);favoriteShows.push(e)}else{const e=favoriteShows.filter(e=>e.show.id!==t);favoriteShows=e}paintSearchCards(),paintFavoriteCards()}function listenFavoriteShowEvents(){const e=document.querySelectorAll(".js-list-element-favorite");for(const t of e)t.addEventListener("click",handleFavoriteShow)}function handleFavoriteShow(e){const t=Number(e.currentTarget.id);if(void 0===favoriteShows.find(e=>e.show.id===t)){const e=shows.find(e=>t===e.show.id);favoriteShows.push(e)}else{const e=favoriteShows.filter(e=>e.show.id!==t);favoriteShows=e}paintSearchCards(),paintFavoriteCards()}formElement.addEventListener("submit",handleForm),searchBtnElement.addEventListener("click",getDataFromApi),getDataFromApi();