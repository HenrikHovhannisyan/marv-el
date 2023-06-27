$(function() {
    // Owl Carousel
    var owl = $(".owl-carousel");
    owl.owlCarousel({
      items: 1,
      margin: 10,
      loop: true,
      nav: true,
      dots: true,
      autoplay:true,
      autoplayTimeout:5000,
      autoplayHoverPause:true
    });
  });
  