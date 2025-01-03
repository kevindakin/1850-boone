function videoLightbox() {
    const items = document.querySelectorAll(".cta-row_image");
  
    items.forEach((item) => {
      const image = item.querySelector(".cta-row_video-wrap");
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
  
  function vimeoAutoplay() {
    var iframe = document.querySelector(".cta-row_video iframe");
    if (!iframe) return;
    var backgroundPlayer = new Vimeo.Player(iframe);
  
    var lightboxWrapper = document.querySelector(".lightbox_wrapper");
    var lightboxOverlay = document.querySelector(".lightbox_overlay");
    var lightboxClose = document.querySelector(".lightbox_close");
  
    if (!lightboxWrapper) return;
  
    function isLightboxVisible() {
      return window.getComputedStyle(lightboxWrapper).display !== "none";
    }
  
    function handleVisibilityChange() {
      if (isLightboxVisible()) {
        backgroundPlayer.pause();
      } else {
        backgroundPlayer.play();
      }
    }
  
    if (lightboxOverlay) {
      lightboxOverlay.addEventListener("click", function () {
        backgroundPlayer.play();
      });
    }
  
    if (lightboxClose) {
      lightboxClose.addEventListener("click", function () {
        backgroundPlayer.play();
      });
    }
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    videoLightbox();
    vimeoAutoplay();
  });
  