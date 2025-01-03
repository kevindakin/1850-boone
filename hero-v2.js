function heroV2() {
  const loaderBlock = document.querySelector('[load-el="loader-block"]');
  const text = document.querySelectorAll('[load-el="text"]');
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
      text,
      {
        opacity: 0,
      },
      "<0.4"
    )

    .from(
      backgroundImage,
      {
        scale: 1.1,
        ease: easeInOut,
        duration: 3,
      },
      "<-0.5"
    );

  loadAnim.set(loaderBlock, { display: "none" });
}

document.addEventListener("DOMContentLoaded", (event) => {
  heroV2();
});