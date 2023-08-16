const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const btn = document.querySelector(".contact-btn");


menuBtn.addEventListener("click", toggleMenu);
btn.addEventListener("click", () => {
    alert(123)
});

function toggleMenu() {
  navList.classList.toggle("active");
  header.classList.toggle("open");
  nav.style.borderRadius = '0'

  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.remove("active");
    });
  });
}
