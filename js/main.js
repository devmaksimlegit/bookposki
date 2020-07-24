const body = document.querySelector('body');
const burger = document.querySelector('.burger');
const menu = document.querySelector('.menu');

$(document).ready(function() {
  $('.catalog-slider__track').slick({
    slidesToShow: 5,
    prevArrow: $('.catalog-slider__arrow--prev'),
    nextArrow: $('.catalog-slider__arrow--next'),
    responsive: [
      {
        breakpoint: 1280,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 530,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
  $('.new-slider__track').slick({
    slidesToShow: 2,
    prevArrow: $('.new-slider__arrow--prev'),
    nextArrow: $('.new-slider__arrow--next'),
    responsive: [
      {
        breakpoint: 1040,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });
});

burger.addEventListener('click', () => {
  burger.classList.toggle('burger--active');
  menu.classList.toggle('menu--active');
  body.classList.toggle('_lock');
});