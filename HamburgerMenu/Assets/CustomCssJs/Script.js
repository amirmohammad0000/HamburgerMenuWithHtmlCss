"use strict";

let ImageBreadTop = document.querySelector(".image_bread_top");
let ImageTomato = document.querySelector(".image_tomato");
let ImageVegetables = document.querySelector(".image_vegetables");
let ImageCheese = document.querySelector(".image_cheese");
let ImageMeat = document.querySelector(".image_meat");
let ImageBreadBottom = document.querySelector(".image_bread_bottom");
let StatusHamburgerMenu = true;

ImageBreadTop.addEventListener("click", () => {
  if (StatusHamburgerMenu) {
    ImageTomato.style.top = "70px";
    ImageVegetables.style.top = "130px";
    ImageCheese.style.top = "190px";
    ImageMeat.style.top = "240px";
    ImageBreadBottom.style.top = "300px";
    StatusHamburgerMenu = false;
  } else {
    ImageTomato.style.top = "25px";
    ImageVegetables.style.top = "45px";
    ImageCheese.style.top = "60px";
    ImageMeat.style.top = "75px";
    ImageBreadBottom.style.top = "90px";
    StatusHamburgerMenu = true;
  }
});
