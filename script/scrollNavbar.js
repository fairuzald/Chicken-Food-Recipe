// ! MAIN SECTION
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");
if (window.innerWidth >= 900) {
  navMenu.classList.add("nav-menu");
}
hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburgeractive");
  if (navMenu.className == "nav-menu") {
    navMenu.classList.remove("nav-menu");
    navMenu.classList.add("hidden");
  } else {
    navMenu.classList.remove("hidden");
    navMenu.classList.add("nav-menu");
  }
});

// ! PAGE MENU SECTION
window.onscroll = function () {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;
  if (window.pageYOffset > fixedNav) {
    header.classList.add("");
  }
};
