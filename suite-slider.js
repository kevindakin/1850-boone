function suiteCarousel() {
    const suiteSwiper = new Swiper(".suite-carousel_component.swiper", {
      slidesPerView: 1.1,
      spaceBetween: 12,
      loop: false,
      speed: 600,
      watchOverflow: true,
      centeredSlides: true,
      navigation: {
        nextEl: ".icon-btn_wrap.is-carousel.swiper-next",
        prevEl: ".icon-btn_wrap.is-carousel.swiper-prev",
      },
      breakpoints: {
        768: {
          slidesPerView: 1.2,
          spaceBetween: 24,
          centeredSlides: false,
        },
      },
    });
  }
  
  function arrowPosition() {
    const imageWrap = document.querySelector(".room-card_image-wrapper");
  
    if (imageWrap) {
      const height = imageWrap.offsetHeight;
      const topPosition = height / 2;
      const arrows = document.querySelectorAll(".icon-btn_wrap.is-carousel");
  
      arrows.forEach((arrow) => {
        arrow.style.top = `${topPosition}px`;
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    suiteCarousel();
    arrowPosition();
    window.addEventListener("resize", arrowPosition);
  });
  