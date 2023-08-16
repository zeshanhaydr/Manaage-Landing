const primaryheader = document.querySelector(".primary-header");
const navtoggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");

navtoggle.addEventListener("click", () => {
  primaryNav.hasAttribute("data-visible")
    ? navtoggle.setAttribute("aria-expanded", false)
    : navtoggle.setAttribute("aria-expanded", true);
  primaryNav.toggleAttribute("data-visible");
  primaryheader.toggleAttribute("data-overlay");
});

// Slider
const slider = new A11YSlider(document.querySelector(".slider"), {
  adaptiveHeight: false,
  dots: true,
  centreMode: true,
  arrows: false,
  responsive: {
    480: {
      dots: false, // dots enabled 1280px and up
    },
  },
});
