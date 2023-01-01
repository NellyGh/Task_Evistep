"use strict";

window.addEventListener('DOMContentLoaded', function() {
    const firstForm = document.querySelector(".header_form");
    const secondForm = document.querySelector(".first_form");
    const thirdForm = document.querySelector(".second_form");
    const forthForm = document.querySelector(".third_form");
    const fifthForm = document.querySelector(".forth_form");
    const footerForm = document.querySelector(".footer_form");

    function logSubmit(event) {
        console.log(`Form Submitted! Time stamp: ${event.timeStamp}`);
        event.preventDefault();
    }

    firstForm.addEventListener('submit', logSubmit);
    secondForm.addEventListener('submit', logSubmit);
    thirdForm.addEventListener('submit', logSubmit);
    forthForm.addEventListener('submit', logSubmit);
    fifthForm.addEventListener('submit', logSubmit);
    footerForm.addEventListener('submit', logSubmit);
});


