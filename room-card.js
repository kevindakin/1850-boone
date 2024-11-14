function roomCardHover() {
    const cards = document.querySelectorAll(".room-card_component");
  
    cards.forEach((card) => {
      const link = card.querySelector(".g_clickable");
      const line = card.querySelector(".btn_secondary-line");
  
      link.addEventListener("mouseenter", () => {
        line.style.width = "100%";
      });
  
      link.addEventListener("mouseleave", () => {
        line.style.width = "0%";
      });
    });
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    roomCardHover();
  });
  