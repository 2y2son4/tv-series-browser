"use strict";const apiUrl="//api.tvmaze.com/search/shows?q=";let noImageSrc="./assets/images/place-holder-img-medium.png",noImageSrcFavorite="./assets/images/place-holder-img-small.png";const formElement=document.querySelector(".js-form"),searchInputElement=document.querySelector(".js-search-input"),searchBtnElement=document.querySelector(".js-search-btn"),warningElement=document.querySelector(".js-warning"),favoriteSection=document.querySelector(".js-favorite-shows"),buttonElement=document.querySelector(".js-modal-btn"),modalWindow=document.querySelector(".js-modal");let shows=[],favoriteShows=[];function handleForm(e){e.preventDefault()}function getDataFromApi(){const e=searchInputElement.value;fetch(apiUrl+e).then(e=>e.json()).then(e=>{0===e.length?(warningElement.classList.remove("hidden"),warningElement.innerHTML="No results. Try again!",shows=[]):(warningElement.innerHTML="",warningElement.classList.add("hidden"),shows=e),paintSearchCards(),paintFavoriteCards(),setInLocalStorage()})}function paintSearchCards(){let e,t='<ul class="main__list">';for(const n of shows){e=void 0===favoriteShows.find(e=>e.show.id===n.show.id)?"":" card--favorite",t+=`<li class="main__list--element js-list-element${e}" id="${n.show.id}">`,null===n.show.officialSite?t+=`<h2 class="main__card--title">${n.show.name}</h2>`:(t+='<h2 class="main__card--title">',t+=`<a class="main__card--link" href="${n.show.officialSite}" target="_blank" title="${n.show.name} official site">${n.show.name}</a>`,t+="</h2>"),null===n.show.image?t+=`<img class="main__card--img" src="${noImageSrc}" alt="${n.show.name}" />`:t+=`<img class="main__card--img" src="${n.show.image.medium}" alt="${n.show.name}" />`,null===n.show.rating.average?t+='<span class="main__card--rating">-- / 10</span>':t+=`<span class="main__card--rating">${n.show.rating.average} / 10</span>`,t+="</li>"}t+="</ul>",removeListenShowEvents();document.querySelector(".js-search-shows").innerHTML=t,listenShowEvents()}function paintFavoriteCards(){let e;e=0===favoriteShows.length?" hidden":"";let t=`<div class="main__favorite${e}">`;t+='<button class="fav__btn js-reset-btn">Clean favorites</button>',t+='<ul class="fav__list js-list-favorites">';for(const e of favoriteShows)t+=`<li class="fav__list--li js-list-element-favorite" id="${e.show.id}">`,t+=`<h3 class="fav__card--title">${e.show.name}</h3>`,null===e.show.image?t+=`<img class="fav__card--img" src="${noImageSrcFavorite}" alt="${e.show.name}" />`:t+=`<img class="fav__card--img" src="${e.show.image.medium}" alt="${e.show.name}" />`,t+='<button class="fav__card--btn" type="reset">Remove</button>',t+="</li>";t+="</ul>",t+="</div>",removeListenReset(),removeListenFavoriteShowEvents();document.querySelector(".js-favorite-shows").innerHTML=t,listenFavoriteShowEvents(),listenResetBtn(),setInLocalStorage()}function handleShow(e){const t=Number(e.currentTarget.id);if(void 0===favoriteShows.find(e=>e.show.id===t)){const e=shows.find(e=>t===e.show.id);favoriteShows.push(e)}else{const e=favoriteShows.filter(e=>e.show.id!==t);favoriteShows=e}paintSearchCards(),paintFavoriteCards()}function listenShowEvents(){const e=document.querySelectorAll(".js-list-element");for(const t of e)t.addEventListener("click",handleShow)}function removeListenShowEvents(){const e=document.querySelectorAll(".js-list-element");for(const t of e)t.removeEventListener("click",handleShow)}function handleFavoriteShow(e){const t=Number(e.currentTarget.id);if(void 0===favoriteShows.find(e=>e.show.id===t)){const e=shows.find(e=>t===e.show.id);favoriteShows.push(e)}else{const e=favoriteShows.filter(e=>e.show.id!==t);favoriteShows=e}paintSearchCards(),paintFavoriteCards()}function listenFavoriteShowEvents(){const e=document.querySelectorAll(".js-list-element-favorite");for(const t of e)t.addEventListener("click",handleFavoriteShow)}function removeListenFavoriteShowEvents(){const e=document.querySelectorAll(".js-list-element-favorite");for(const t of e)t.removeEventListener("click",handleFavoriteShow)}function setInLocalStorage(){localStorage.setItem("favoriteShows",JSON.stringify(favoriteShows))}function getFromLocalStorage(){const e=JSON.parse(localStorage.getItem("favoriteShows"));null!==e&&(favoriteShows=e)}function handleResetBtn(){favoriteShows=[],paintFavoriteCards(),paintSearchCards()}function listenResetBtn(){document.querySelector(".js-reset-btn").addEventListener("click",handleResetBtn)}function removeListenReset(){const e=document.querySelector(".js-reset-btn");null!==e&&e.removeEventListener("click",handleResetBtn)}formElement.addEventListener("submit",handleForm),searchBtnElement.addEventListener("click",getDataFromApi),getFromLocalStorage(),paintFavoriteCards(),setTimeout(()=>{modalWindow.classList.remove("hidden")},2e3),buttonElement.addEventListener("click",()=>{modalWindow.classList.add("hidden")});