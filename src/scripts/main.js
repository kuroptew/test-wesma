const menu = ['Воронка', 'Было-стало', 'О компании', 'Что сделали']

const mySwiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  autoHeight:true,
  spaceBetween:10,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    renderBullet: function (index, className) {
      return '<button class="' + className + '">' + (menu[index]) + '</button>';
    },
  },

  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
})
