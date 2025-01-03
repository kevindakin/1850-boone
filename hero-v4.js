function heroV4() {
  const loaderBlock = document.querySelector('[load-el="loader-block"]');
  const backgroundImage = document.querySelector('[load-el="image"]');

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
        scale: 1.4,
        ease: easeInOut,
        duration: 3,
      },
      "<-0.5"
    );

  loadAnim.set(loaderBlock, { display: "none" });
}

document.addEventListener("DOMContentLoaded", (event) => {
  heroV4();
});
