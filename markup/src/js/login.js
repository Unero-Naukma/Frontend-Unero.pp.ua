"use strict"

export function login() {
const loginButton = document.querySelector(".wrapper__title-login");
const registerButton = document.querySelector(".wrapper__title-register");
const login = document.querySelector(".login");
const register = document.querySelector(".register");

loginButton.addEventListener("click", openRegistration);
registerButton.addEventListener("click", openLogin);
let flag = false;

function openRegistration() {
    if(flag) {
        login.classList.toggle("login--hidden");
        register.classList.toggle("register--hidden");
        loginButton.classList.toggle("wrapper__title-login--active");
        registerButton.classList.toggle("wrapper__title-register--active");
        flag = false;
    }
}

function openLogin() {
    if(!flag) {
        login.classList.toggle("login--hidden");
        register.classList.toggle("register--hidden");
        loginButton.classList.toggle("wrapper__title-login--active");
        registerButton.classList.toggle("wrapper__title-register--active");
        flag = true;
    }
}
}




