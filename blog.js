// PUSHED TO GITHUB

function appendNewsletterCTA() {
  const posts = document.querySelectorAll(".blog_item.w-dyn-item");
  const newsletter = document.querySelector(".newsletter-card_component");

  if (posts.length >= 5) {
    posts[4].after(newsletter);
  }
}

function featuredHover() {
  const item = document.querySelector(".hero-v2_layout");
  const link = item.querySelector(".g_clickable");
  const btn = item.querySelector(".btn_primary");
  const btnRight = btn.querySelector(".btn_primary-right");
  const img = item.querySelector(".hero-v2_image > .u-cover-absolute");

  const hoverAnim = gsap.timeline({
    defaults: {
      duration: 0.3,
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
    btnRight.style.borderColor = "var(--button--border-secondary-hover)";
    hoverAnim.play();
  });

  link.addEventListener("mouseleave", () => {
    btn.style.borderColor = "var(--button--border)";
    btn.style.backgroundColor = "var(--button--background)";
    btn.style.color = "var(--button--text)";
    btnRight.style.borderColor = "var(--button--border-secondary)";
    hoverAnim.reverse();
  });
}

// Wrap the function in a delay to account for any filtering effects
document.addEventListener("DOMContentLoaded", () => {
  featuredHover();
  setTimeout(appendNewsletterCTA, 100); // Adjust the delay as needed
});