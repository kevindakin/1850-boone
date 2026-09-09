function homeLoader() {
  const loaderBlock = document.querySelector('[load-el="loader-block"]');
  const loaderLogo = document.querySelector(".loader_logo");
  const backgroundImage = document.querySelector('[load-el="image"]');

  // Default is "on" — only an explicit "off" disables the scale
  const scaleEnabled =
    backgroundImage &&
    backgroundImage.getAttribute("data-loader-scale") !== "off";

  const loadAnim = gsap.timeline({
    defaults: {
      duration: 1.6,
      ease: easeInOut,
    },
  });

  loadAnim
    .to(loaderLogo, {
      scale: 1.3,
      opacity: 1,
      duration: durationSlow,
    })

    .to(
      loaderBlock,
      {
        opacity: 0,
        duration: durationSlow,
      },
      ">"
    );

  if (scaleEnabled) {
    loadAnim.from(
      backgroundImage,
      {
        scale: 1.15,
        ease: easeInOut,
        duration: 3,
      },
      "<-0.5"
    );
  }

  loadAnim.set(loaderBlock, { display: "none" });
}

document.addEventListener("DOMContentLoaded", () => {
  homeLoader();
});