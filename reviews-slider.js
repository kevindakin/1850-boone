function reviewsSlider() {
    const reviewsSlider = new Swiper(".reviews-slider_content", {
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
        nextEl: ".reviews-slider_arrow.swiper-next",
        prevEl: ".reviews-slider_arrow.swiper-prev",
      },
    });
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    reviewsSlider();
  });
  