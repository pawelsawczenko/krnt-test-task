const hamMenuBtn = document.querySelector(".header__hamburger-btn");
const menu = document.querySelector(".header__menu-wrapper");

const toggleMenu = () => {
  menu.classList.toggle("header__menu-wrapper_hidden");
  menu.classList.toggle("header__menu-wrapper_visible");
};
// open nav
hamMenuBtn.addEventListener("click", toggleMenu);
// close nav
menu.addEventListener("click", (e) => {
  if (e.target.closest(".header__navigation-link")) {
    toggleMenu();
  }
  if (e.target.closest(".header__close-btn")) {
    toggleMenu();
  }
  if (!e.target.closest(".header__menu")) {
    toggleMenu();
  }
});
