function appendModal() {
    const items = document.querySelectorAll(".gallery_item");
  
    items.forEach((item) => {
      const image = item.querySelector(".gallery_image");
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
  
appendModal();  