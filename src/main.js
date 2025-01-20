import "normalize.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/700.css";
import "./style.css";

const hamMenuBtn = document.querySelector(".header__hamburger-btn");
const menu = document.querySelector(".header__menu-wrapper");
const closeMenuBtn = document.querySelector(".header__close-btn");

const toggleMenu = () => {
  menu.classList.toggle("header__menu-wrapper_hidden");
  menu.classList.toggle("header__menu-wrapper_visible");
};

hamMenuBtn.addEventListener("click", toggleMenu);

closeMenuBtn.addEventListener("click", toggleMenu);
