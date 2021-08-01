"use strict";

const swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 6,
  freeMode: true,
  watchSlidesVisibility: true,
  watchSlidesProgress: true,
});
const swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  thumbs: {
    swiper: swiper,
  },
});

const menuBtn = document.querySelector(".menu-button");
const menu = document.querySelector(".navbar-panel");
const menuClose = document.querySelector(".menu-close");

menuBtn.addEventListener("click", () => {
  menu.classList.toggle('is-open');
});
menuClose.addEventListener("click", () => {
  menu.classList.toggle('is-open');
});


