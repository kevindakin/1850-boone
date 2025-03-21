function heroJobs() {
  const loaderBlock = document.querySelector('[load-el="loader-block"]');
  const nav = document.querySelector(".nav_component");
  const heading = document.querySelector('[load-el="split"]');
  const fadeEls = document.querySelectorAll('[load-el="fade-in"]');

  let splitText = [];
  if (heading) {
    const headlineSplit = new SplitType(heading, {
      types: "lines, words",
      tagName: "span",
    });
    splitText = heading.querySelectorAll(".word");
  }

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
      nav,
      {
        y: "-3rem",
        opacity: 0,
      },
      "<0.5"
    )

    .from(
      splitText,
      {
        y: "110%",
        stagger: 0.05,
      },
      "<0.5"
    )

    .to(
      fadeEls,
      {
        opacity: 1,
        stagger: 0.3,
      },
      "<1"
    );

  loadAnim.set(loaderBlock, { display: "none" });
}

document.addEventListener("DOMContentLoaded", (event) => {
  heroJobs();
});