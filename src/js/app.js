import Swiper from 'swiper/bundle';

if (document.documentElement.clientWidth < 1365) {
  new Swiper('.presentation__swiper', {

    pagination: {
      el: '.swiper-pagination',
      clickable: true
    },

    navigation: {
      nextEl: '.navigation__btn--next',
      prevEl: '.navigation__btn--prev',
    },
  });

  const presentationList = document.querySelectorAll('.presentation__item');
  Array.from(presentationList).map((item, i) => {
    const text = item.querySelectorAll('.presentation__text');
    if (text.length == 1) {
      text[0].style.height = '300px';
    }
    if (text.length == 2) {
      if (text[0].offsetHeight + text[1].offsetHeight < 300) {
        text[1].style.height = 300 - text[0].offsetHeight + 'px';
        text[1].style.paddingBottom = 0;
      }
    }
  });
}

new Swiper('.compound__swiper', {
  autoplay: {
    delay: 4000,
  },
  loop: true,

  pagination: {
    el: '.compound .swiper-pagination',
    type: 'fraction'
  },

  navigation: {
    nextEl: '.compound .navigation__btn--next',
    prevEl: '.compound .navigation__btn--prev',
  },

  breakpoints: {
    1365: {
      slidesPerView: 3,
      spaceBetween: 20
    },
  }
});

const promo = document.querySelector('.promo')
const btnPromo = document.querySelector('.header__btn--promo');
btnPromo.addEventListener('click', (evt) => {

  evt.preventDefault();
  promo.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});

const compound = document.querySelector('.compound');
const btnCompound = document.querySelector('.header__btn--white');
btnCompound.addEventListener('click', (evt) => {
  evt.preventDefault();
  compound.scrollIntoView({
    behavior: "smooth",
    block: "start"
  });
});
