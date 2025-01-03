function slider1() {
    let expSwiper;
    const wrap = document.querySelector('[data-exp-slider="wrap-1"]');
    const slider = wrap.querySelector(".exp-slider_component.swiper");
    const arrowNext = wrap.querySelector(".exp-slider_arrow.swiper-next");
    const arrowPrev = wrap.querySelector(".exp-slider_arrow.swiper-prev");
    const filters = wrap.querySelectorAll(".filter-chip_text.is-experience");
  
    function initExpSlider() {
      expSwiper = new Swiper(slider, {
        slidesPerView: "auto",
        speed: 300,
        loop: true,
  
        navigation: {
          nextEl: arrowNext,
          prevEl: arrowPrev,
        },
      });
    }
  
    initExpSlider();
  
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        if (expSwiper) {
          setTimeout(() => {
            expSwiper.slideTo(0);
            expSwiper.update();
          }, 400);
        }
      });
    });
  }
  
  function slider2() {
    let expSwiper;
    const wrap = document.querySelector('[data-exp-slider="wrap-2"]');
    const slider = wrap.querySelector(".exp-slider_component.swiper");
    const arrowNext = wrap.querySelector(".exp-slider_arrow.swiper-next");
    const arrowPrev = wrap.querySelector(".exp-slider_arrow.swiper-prev");
    const filters = wrap.querySelectorAll(".filter-chip_text.is-experience");
  
    function initExpSlider() {
      expSwiper = new Swiper(slider, {
        slidesPerView: "auto",
        speed: 300,
        loop: true,
  
        navigation: {
          nextEl: arrowNext,
          prevEl: arrowPrev,
        },
      });
    }
  
    initExpSlider();
  
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        if (expSwiper) {
          setTimeout(() => {
            expSwiper.slideTo(0);
            expSwiper.update();
          }, 400);
        }
      });
    });
  }
  
  function slider3() {
    let expSwiper;
    const wrap = document.querySelector('[data-exp-slider="wrap-3"]');
    const slider = wrap.querySelector(".exp-slider_component.swiper");
    const arrowNext = wrap.querySelector(".exp-slider_arrow.swiper-next");
    const arrowPrev = wrap.querySelector(".exp-slider_arrow.swiper-prev");
    const filters = wrap.querySelectorAll(".filter-chip_text.is-experience");
  
    function initExpSlider() {
      expSwiper = new Swiper(slider, {
        slidesPerView: "auto",
        speed: 300,
        loop: true,
  
        navigation: {
          nextEl: arrowNext,
          prevEl: arrowPrev,
        },
      });
    }
  
    initExpSlider();
  
    filters.forEach((filter) => {
      filter.addEventListener("click", () => {
        if (expSwiper) {
          setTimeout(() => {
            expSwiper.slideTo(0);
            expSwiper.update();
          }, 400);
        }
      });
    });
  }
  
  function appendModal() {
    const items = document.querySelectorAll(".exp-card_component");
  
    items.forEach((item) => {
      const image = item.querySelector(".g_clickable");
      const modal = item.querySelector(".lightbox_wrapper");
  
      if (image && modal) {
        image.addEventListener("click", () => {
          document.body.appendChild(modal);
          modal.style.display = "flex";
          modal.style.opacity = "1";
        });
  
        const overlay = modal.querySelector(".lightbox_overlay");
        const closeButton = modal.querySelector(".lightbox_close");
  
        overlay?.addEventListener("click", closeModal);
        closeButton?.addEventListener("click", closeModal);
  
        function closeModal() {
          modal.style.opacity = "0";
          setTimeout(() => {
            modal.style.display = "none";
            item.appendChild(modal);
          }, 400);
        }
      }
    });
  }
  
  // Reinitialize modal functionality after CMS Filter completes
  function initModalOnFilterComplete() {
    if (typeof window.fsCmsfilter !== "undefined") {
      fsCmsfilter.on("filterComplete", () => {
        appendModal();
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    slider1();
    slider2();
    slider3();
    appendModal();
    initModalOnFilterComplete();
  });
  