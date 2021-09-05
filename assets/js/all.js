"use strict";

$('.course').slick({
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  prevArrow: false,
  nextArrow: false,
  slidesToShow: 4,
  responsive: [{
    breakpoint: 769,
    settings: {
      slidesToShow: 3
    }
  }, {
    breakpoint: 469,
    settings: {
      slidesToShow: 1
    }
  }]
});
//# sourceMappingURL=all.js.map
