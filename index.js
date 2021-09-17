$(".customer-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 0,
  nav: true,
  navText: [
    "<i class='bi bi-chevron-left '></i>",
    "<i class='bi bi-chevron-right'></i>",
  ],

  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 2,
    },
    1000: {
      items: 3,
    },
  },
});
$(".cat-carousel").owlCarousel({
  loop: true,
  autoplay: true,
  margin: 10,

  nav: true,
  navText: [
    "<i class='bi bi-chevron-left '></i>",
    "<i class='bi bi-chevron-right'></i>",
  ],

  responsiveClass: true,
  responsive: {
    0: {
      items: 1,
    },
    400: {
      items: 1,
    },
    600: {
      items: 2,
    },
    900: {
      items: 3,
    },
    1000: {
      items: 4,
    },
  },
});
