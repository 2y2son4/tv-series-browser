"use strict";const apiUrl="http://api.tvmaze.com/search/shows?q=",noImageUrlText="Image not found",noImageUrl="https://via.placeholder.com/210x295/ffffff/666666/?text=Image not found",noImageUrlFavorite="https://via.placeholder.com/125x175/ffffff/666666/?text=Image not found",formElement=document.querySelector(".js-form"),searchInputElement=document.querySelector(".js-search-input"),searchBtnElement=document.querySelector(".js-search-btn"),listElement=document.querySelector(".js-list");let series=[];function handleForm(e){e.preventDefault()}function getDataFromApi(){const e=searchInputElement.value;fetch(apiUrl+e).then(e=>e.json()).then(e=>{series=e,paintCards()})}function paintCards(){let e;for(const t of series)e+='    <li class="js-list-element">',e+='<article class="page__card">',e+=`<h2 class="js-title page__card--title">${t.show.name}</h2>`,null===t.show.image?e+=`<img class="js-image page__card--img" src="${noImageUrl}" alt="${t.show.name}" />`:e+=`<img class="js-image page__card--img" src="${t.show.image.medium}" alt="${t.show.name}" />`,e+="</li>",e+="</article>";console.log(listElement),listElement.innerHTML=e}formElement.addEventListener("submit",handleForm),searchBtnElement.addEventListener("click",getDataFromApi),getDataFromApi();