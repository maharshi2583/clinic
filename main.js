//! counter
$(document).ready(function () {
  var counters = $(".count");
  var countersQuantity = counters.length;
  var counter = [];

  for (i = 0; i < countersQuantity; i++) {
    counter[i] = parseInt(counters[i].innerHTML);
  }

  var count = function (start, value, id) {
    var localStart = start;
    setInterval(function () {
      if (localStart < value) {
        localStart = localStart + 10;
        counters[id].innerHTML = localStart;
      }
    }, 0.5);
  };

  for (j = 0; j < countersQuantity; j++) {
    count(0, counter[j], j);
  }
});

//! Owl Carousel main
$(function () {
  var owl = $("#carousel1");
  owl.owlCarousel({
    animateOut: "fadeOut",
    items: 1,
    loop: true,
    nav: true,
  });
});

//! Owl carousel testimonial
$(function () {
  var owl = $("#carousel2");
  owl.owlCarousel({
    items: 1,
    loop: true,
    nav: true,
  });
});
