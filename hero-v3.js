function heroV3() {
  const loaderBlock = document.querySelector('[load-el="loader-block"]');
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
      text,
      {
        opacity: 0,
      },
      "<0.4"
    );

  loadAnim.set(loaderBlock, { display: "none" });
}

document.addEventListener("DOMContentLoaded", (event) => {
  heroV3();
});
