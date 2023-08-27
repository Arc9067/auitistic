const navbarToggle = document.querySelector(".navbar-toggle");
const navbarLinks = document.querySelector(".center-menu");

navbarToggle.addEventListener("click", () => {
  navbarToggle.classList.toggle("active");
  navbarLinks.classList.toggle("active");
});

var coll = document.getElementsByClassName("question");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function () {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}

var swiper = new Swiper(".slide-content", {
  slidesPerView: 3,
  spaceBetween: 25,
  loop: true,
  centerSlide: "true",
  fade: "true",
  grabCursor: "true",
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    520: {
      slidesPerView: 2,
    },
    950: {
      slidesPerView: 3,
    },
  },
});

// const navbarToggle1 = document.querySelector(".drop");
// const navbarLinks1 = document.querySelector(".dropdown-content");

// navbarToggle1.addEventListener("mouseover", () => {
//   navbarToggle1.classList.toggle("active");
//   navbarLinks1.classList.toggle("active");
// });

// // JavaScript to enable slider functionality
// const slider = document.querySelector(".cards-slider");
// const cards = document.querySelectorAll(".card");
// const cardWidth = cards[0].clientWidth;
// const cardMargin = parseInt(getComputedStyle(cards[0]).marginRight);
// const totalCards = cards.length;
// const visibleCards = 3;
// let index = 0;

// function updateSliderPosition() {
//   slider.style.transform = `translateX(-${(cardWidth + cardMargin) * index}px)`;
// }

// function slideCards(direction) {
//   index += direction * visibleCards;

//   if (index < 0) {
//     index = (totalCards - 3) - (totalCards - 3) % visibleCards;
//   } else if (index >= totalCards) {
//     index = 0;
//   }

//   updateSliderPosition();
// }
