function roomCardHover() {
  const cards = document.querySelectorAll(".room-card_component");

  cards.forEach((card) => {
    const link = card.querySelector(".g_clickable");
    const img = card.querySelector(".u-cover-absolute");
    const btn = card.querySelector(".btn_primary");

    const hoverAnim = gsap.timeline({
      defaults: {
        duration: 0.5,
        ease: "power2.inOut",
      },
      paused: true,
    });

    hoverAnim.to(img, {
      scale: 1.02,
    });

    link.addEventListener("mouseenter", () => {
      btn.style.borderColor = "var(--button--border-hover)";
      btn.style.backgroundColor = "var(--button--background-hover)";
      btn.style.color = "var(--button--text-hover)";
      hoverAnim.play();
    });

    link.addEventListener("mouseleave", () => {
      btn.style.borderColor = "var(--button--border)";
      btn.style.backgroundColor = "var(--button--background)";
      btn.style.color = "var(--button--text)";
      hoverAnim.reverse();
    });
  });
}

document.addEventListener("DOMContentLoaded", (event) => {
  roomCardHover();
});
