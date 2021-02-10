/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
'use strict';

// prevent submit form
function handleForm(ev) {
  ev.preventDefault();
}

// handler function to prevent submit form
formElement.addEventListener('submit', handleForm);
