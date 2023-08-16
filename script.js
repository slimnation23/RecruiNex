const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navList.classList.toggle("active");
  header.classList.toggle("open");
  
  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.remove("active");
    });
  });
}
