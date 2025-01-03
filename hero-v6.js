function heroV6() {
  const loaderBlock = document.querySelector('[load-el="loader-block"]');
  const backgroundImage = document.querySelector('[load-el="image"]');
  const text = document.querySelectorAll('[load-el="text"]');

  const loadAnim = gsap.timeline({
    defaults: {
      duration: 1.6,
      ease: easeInOut,
    },
  });

  loadAnim
    .to(
      loaderBlock,
      {
        opacity: "0",
        duration: durationSlow,
      },
      ">"
    )

    .from(
      backgroundImage,
      {
        scale: 1.1,
        ease: easeInOut,
        duration: 3,
      },
      "<-0.5"
    )

    .from(
      text,
      {
        opacity: 0,
      },
      "<0.4"
    );

  loadAnim.set(loaderBlock, { display: "none" });
}

document.addEventListener("DOMContentLoaded", (event) => {
  heroV6();
});
