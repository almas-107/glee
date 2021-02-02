$(function name(params) {
  $('.top-slider__inner').slick({
    dots: true,
    arrows: false
  });

  $('.clients__list').slick({
    dots: false,
    arrows: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true
  });
  
  var mixer = mixitup('.products__list');
  var mixer = mixitup('.design__list');
});