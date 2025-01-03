function imageSlider() {
    const imageSlider = new Swiper(".image-slider_component.swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 1000,
      watchOverflow: true,
      autoplay: true,
      autoplay: {
        delay: 4000,
      },
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".image-slider_arrow.swiper-next",
        prevEl: ".image-slider_arrow.swiper-prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
        renderFraction: function (currentClass, totalClass) {
          return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
        },
        formatFractionCurrent: function (number) {
          return number < 10 ? "0" + number : number;
        },
        formatFractionTotal: function (number) {
          return number < 10 ? "0" + number : number;
        },
      },
    });
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    imageSlider();
  });
  