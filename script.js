const menuBtn = document.querySelector(".menu-toggle");
const closeBtn = document.querySelector(".menu-close");
const navList = document.querySelector(".nav-list");
const navLink = document.querySelectorAll(".nav-link");
const header = document.querySelector(".header");
const nav = document.querySelector(".nav");
const btn = document.querySelector(".contact-btn");

menuBtn.addEventListener("click", toggleMenu);

function toggleMenu() {
  navList.classList.toggle("active");
  header.classList.toggle("open");
  nav.style.borderRadius = "0";

  navLink.forEach((item) => {
    item.addEventListener("click", () => {
      navList.classList.remove("active");
      header.classList.remove("open");
    });
  });
}

$(window).on('load resize', function() {
  if ($(window).width() < 576) {
    $('.clients-items:not(.slick-initialized)').slick({
      arrows: false,
      dots: true,
      speed: 300,
      slidesToShow: 1,
    });
  } else {
    $(".clients-items.slick-initialized").slick("unslick");
  }
});