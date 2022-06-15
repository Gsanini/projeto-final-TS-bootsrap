"use strict";
let signUpButton = document.querySelector('#signIn');
let signInButton = document.querySelector('#signUp');
let container = document.querySelector('#container');
signUpButton.addEventListener('click', () => {
    container.classList.add("right-panel-active");
});
signInButton.addEventListener('click', () => {
    container.classList.remove("right-panel-active");
});
