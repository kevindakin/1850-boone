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
        slidesPerView: 1.1,
      },
      992: {
        slidesPerView: 1,
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

function sliderParallax() {
  const slider = document.querySelector(".suite-carousel_wrap");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: slider,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });

  tl.from(slider, {
    x: "1rem",
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  suiteCarousel();
  arrowPosition();
  window.addEventListener("resize", arrowPosition);
  sliderParallax();
});
