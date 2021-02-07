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
  
  var mixer = mixitup('.products__list', {
    selectors: {
      control: '.products__btn'
    }
  });


  var mixer = mixitup('.design__list', {
    selectors: {
      control: '.design__btn'
    }
  });
});