function heroBlog() {
  const loaderBlock = document.querySelector('[load-el="loader-block"]');
  const text = document.querySelectorAll('[load-el="text"]');
  const backgroundImage = document.querySelector('[load-el="image"]');

  const loadAnim = gsap.timeline({
    defaults: {
      duration: durationSlow,
      ease: easeInOut,
    },
  });

  loadAnim
    .to(
      loaderBlock,
      {
        opacity: "0",
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
        scale: 1.07,
        ease: easeInOut,
        duration: 2,
      },
      "<-0.8"
    );

  loadAnim.set(loaderBlock, { display: "none" });
}

document.addEventListener("DOMContentLoaded", (event) => {
  heroBlog();
});