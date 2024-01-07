const swiper = new Swiper('.swiper', {
  direction: 'horizontal',
  loop: true,
  slidesPerView: 4,


  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  breakpoints: {
    992: {
      slidesPerView: 4,
    },

    768: {
      slidesPerView: 2,
    },

    0: {
      slidesPerView: 1,
    },
  },
});

const feedbacker = new Swiper('.feedbacker',{
  direction: 'horizontal',
  loop: true,
  slidesPerView: 1,

  navigation: {
    nextEl: '.feedback-button-next',
    prevEl: '.feedback-button-prev',
  },
});

const fotorama = new Swiper('.fotorama',{
  dslideClass: 'photo-slider_item',
    direction: 'horizontal',
    loop: true,
    slidesPerView: 1,
    spaceBetween: 20,
    pagination: {
    el: '.swiper-carousel__pagination',
    type: 'bullets',
  },
    autoplay: {
        delay: 2000,
    },
});