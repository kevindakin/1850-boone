function reviewSlider() {
    const reviewSwiper = new Swiper(".review-slider_container.swiper", {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 800,
      watchOverflow: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: ".review-slider_arrow.swiper-next",
        prevEl: ".review-slider_arrow.swiper-prev",
      },
    });
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    reviewSlider();
  });
  