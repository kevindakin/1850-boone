function suiteImageSlider() {
  const sliders = document.querySelectorAll(".suite_image");

  sliders.forEach((slider) => {
    const sliderWrap = slider.querySelector(".suite_slider.swiper");
    const nextArrow = slider.querySelector(".suite_slider-arrow.swiper-next");
    const prevArrow = slider.querySelector(".suite_slider-arrow.swiper-prev");

    const imageSlider = new Swiper(sliderWrap, {
      slidesPerView: 1,
      spaceBetween: 0,
      loop: true,
      speed: 1000,
      watchOverflow: true,
      effect: "fade",
      fadeEffect: {
        crossFade: true,
      },
      navigation: {
        nextEl: nextArrow,
        prevEl: prevArrow,
      },
    });
  });
}

function suiteHover() {
  const items = document.querySelectorAll(".suite_component");

  items.forEach((item) => {
    const link = item.querySelector(".g_clickable");
    const btn = item.querySelector(".btn_primary");

    link.addEventListener("mouseenter", () => {
      btn.style.backgroundColor = "var(--button--background-hover)";
      btn.style.borderColor = "var(--button--border-hover)";
      btn.style.color = "var(--button--text-hover)";
    });

    link.addEventListener("mouseleave", () => {
      btn.style.backgroundColor = "var(--button--background)";
      btn.style.borderColor = "var(--button--border)";
      btn.style.color = "var(--button--text)";
    });
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  suiteImageSlider();
  suiteHover();
});
