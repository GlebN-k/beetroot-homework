// swiper1 MAIN SECTION with photoes
const swiper1 = new Swiper(".swiper1", {
  // Optional parameters
  loop: true,
  autoplay: {
    delay: 5000,
  },

  //pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

// swiper2 - NEW ARRIVALS
const swiper2 = new Swiper(".swiper2", {
  // slidesPerView: 1,
  loop: true,

  spaceBetween: 10,

  // Navigation arrows
  navigation: {
    nextEl: ".swiper2-button-next",
    prevEl: ".swiper2-button-prev",
  },

  breakpoints: {
    320: {
      slidesPerView: 1,
      spaceBetween: 10,
    },

    768: {
      slidesPerView: 3,
      spaceBetween: 10,
    },

    950: {
      slidesPerView: 4,
      spaceBetween: 0,
    },

    1200: {
      slidesPerView: 5,
      spaceBetween: 10,
    },
  },
});

// slider for the block "OUR PARTNERS"
const swiper = new Swiper(".swiper3", {
  // Optional parameters
  loop: true,
  breakpoints: {
    320: {
      slidesPerView: 2,
      spaceBetween: 10,
    },

    600: {
      slidesPerView: 4,
      spaceBetween: 10,
    },

    800: {
      slidesPerView: 6,
      spaceBetween: 10,
    },

    1100: {
      slidesPerView: 8,
      spaceBetween: 10,
    },

    1300: {
      slidesPerView: 9,
      spaceBetween: 20,
    },
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper3-button-next",
    prevEl: ".swiper3-button-prev",
  },
  pagination: {
    el: ".swiper3-pagination",
    // type: 'bullets',
    clickable: true,
  },
});

const burgerMenu = document.getElementById("icon");

const openBurgerMenu = (e) => {
  let x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
  e.stopImmediatePropagation();
};

const handleClick = () => {
  let x = document.getElementById("navbar");
  if (x.style.display === "block") {
    x.style.display = "none";
  }
};

burgerMenu.addEventListener("click", openBurgerMenu);

document.addEventListener("click", handleClick);
