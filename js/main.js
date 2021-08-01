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


let subdomain = 'etozhenerkv14';
let url = 'https://' + subdomain + '.amocrm.ru/oauth2/access_token';
let body = {
  "client_id": "54339e01-655f-4844-8bdd-b2ae1732e2d7",
  "client_secret": "NtR2FR8ZwQhIgcaXLMVeOmaFJV2WwIfKiSJiQKJ4ubcUkZZI9twUpQdTUakm9PnE",
  "grant_type": "authorization_code",
  "code": "def50200a414c5bf5e8d93c18abef6de7f4a68ac18bddb837a5dd95a470941d7390ac20aac5072923829d48f7b28d9f5c2b661403f383a9fc25a075614a8400d42091003cd944be8bc5091083ad7e68b438b5b7738b9e25679ae92f22ea7eb22807b3295238f88ebfff325eb16da5bf27ad0e1345368e7fb2440a8993b69f3da9a9cc9155ad3cea04239ec31604e0d9ed6a2cd82b023958f74945c73373295d8f4c0a5cb76b1578bb52861197ce46cf91897b3c4a4aac03a7d093d54543b33853bb972ee14f4c1f8fa5b710a119063e411044eb46dfa6688e34bc36ccbe9e217f4e806c5f3e6eaecf75fe52eb5901721207cd47a552373c06d505447ab32d19aa5b331b951676b8ffb06488a2edf8ce1f2922819bcef3698fed5d68a59c60b7b5d983e9254323ae3b9a93838a0bc5e3662ac2ed0f53ff61667dc131d2f5c78fe0e10cab4064d74756563a04b4441b88acac2ce54604864c038904a3cff635310b4e213a20506c2c51f02e8f588b65f53387f36d8104846c17657a4d74a3a8e06a0b129308baf432c283a7dfdefa1ed945b9af55be8ac2f189b9fface40a1af1302e6f8f8a0222c4db6c10541fc04cdfbc8ca4e12775ae9cd02d38b3f",
  "redirect_uri": "https://google.com"
};

const test = async () => {
  let a = await fetch(url, {
    method: "POST",
    header: {
       "Content-type": "application/json",
    },
    body: JSON.stringify(body)
  });
  
  let response  = await a.json();
  console.log(response);
  
};

test();