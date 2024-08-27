"use strict";
var container = document.querySelectorAll(".container");
var loginBtn = document.querySelectorAll("#login");
var registerBtn = document.querySelectorAll("#register");
registerBtn.forEach((regisBtn) => {
    regisBtn.addEventListener('click', () => {
        container.forEach((container) => {
            container.classList.add('active');
        });
    });
});
loginBtn.forEach((loginBtn) => {
    loginBtn.addEventListener('click', () => {
        container.forEach((login) => {
            login.classList.remove('active');
        });
    });
});
