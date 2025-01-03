//
// FUNCTION DECLARATIONS
//

const durationSlow = 1.2;
const durationBase = 0.8;
const durationFast = 0.6;
const easeInOut = "power4.inOut";
const easeOut = "power4.out";

// Function to set a cookie with an expiration in hours
function setCookie(name, value, hours) {
  const date = new Date();
  date.setTime(date.getTime() + hours * 60 * 60 * 1000);
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}; path=/`;
}

// Function to get a cookie by name
function getCookie(name) {
  const cookieArr = document.cookie.split(";");
  for (let i = 0; i < cookieArr.length; i++) {
    let cookie = cookieArr[i].trim();
    if (cookie.indexOf(name + "=") == 0) {
      return cookie.substring(name.length + 1, cookie.length);
    }
  }
  return null;
}

// Announcement Banner Cookie
function checkAnnouncementBanner() {
  const banner = document.querySelector(".announcement_banner");
  const closeButton = document.querySelector(".announcement_close");

  if (!banner || !closeButton) return;

  if (getCookie("announcementClosed")) {
    banner.style.display = "none";
  } else {
    banner.style.display = "flex";
    closeButton.addEventListener("click", () => {
      banner.style.display = "none";
      setCookie("announcementClosed", "true", 24);
    });
  }
}

// Adjust Menu Height

function adjustNavMenuHeight() {
  const banner = document.querySelector(".announcement_banner");
  const menu = document.querySelector(".nav_menu");
  if (banner && menu) {
    const bannerStyle = window.getComputedStyle(banner);
    if (bannerStyle.display !== "none") {
      const bannerHeight = banner.offsetHeight;
      if (window.scrollY < bannerHeight) {
        menu.style.height = `calc(100dvh - ${bannerHeight}px)`;
        menu.style.top = `${bannerHeight}px`;
      } else {
        menu.style.height = "100dvh";
        menu.style.top = "0px";
      }
    } else {
      menu.style.height = "100dvh";
      menu.style.top = "0px";
    }
  }
}

function handleAnnouncementClose() {
  const menu = document.querySelector(".nav_menu");
  if (menu) {
    menu.style.height = "100dvh";
    menu.style.top = "0px";
  }
}

window.addEventListener("load", adjustNavMenuHeight);
window.addEventListener("resize", adjustNavMenuHeight);
window.addEventListener("scroll", adjustNavMenuHeight);

const announcementCloseButton = document.querySelector(".announcement_close");
if (announcementCloseButton) {
  announcementCloseButton.addEventListener("click", handleAnnouncementClose);
}

// Newsletter Modal

function checkNewsletterModal() {
  const modal = document.querySelector(".newsletter-popup_wrapper");
  const closeButton = modal.querySelector(".newsletter_close");
  const overlay = modal.querySelector(".newsletter-popup_overlay");

  if (!modal || !closeButton) return;

  if (getCookie("newsletterClosed")) {
    modal.style.display = "none";
    return;
  }

  const showModalOnScroll = () => {
    if (window.scrollY >= document.body.scrollHeight / 2) {
      modal.style.display = "flex";
      gsap.to(modal, { opacity: 1, duration: 0.3 });

      if (window.matchMedia("(max-width: 766px)").matches) {
        disableScrolling();
      }

      window.removeEventListener("scroll", showModalOnScroll);
    }
  };

  window.addEventListener("scroll", showModalOnScroll);

  closeButton.addEventListener("click", () => {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        modal.style.display = "none";
        if (window.matchMedia("(max-width: 767px)").matches) {
          enableScrolling();
        }
        setCookie("newsletterClosed", "true", 720); // 30 days
      },
    });
  });

  overlay.addEventListener("click", () => {
    gsap.to(modal, {
      opacity: 0,
      duration: 0.3,
      onComplete: () => {
        modal.style.display = "none";
        if (window.matchMedia("(max-width: 767px)").matches) {
          enableScrolling();
        }
        setCookie("newsletterClosed", "true", 720); // 30 days
      },
    });
  });
}

// Nav Open

let menuOpen = false;
let initialTheme;

function navOpen() {
  const hamburger = document.querySelector('[js-el="nav-button"]');
  const lineTop = hamburger.children[0];
  const lineMiddle = hamburger.children[1];
  const lineBottom = hamburger.children[2];
  const menu = document.querySelector('[js-el="nav-menu"]');
  const links = document.querySelectorAll('[js-el="nav-link"]');
  const overlay = document.querySelector('[js-el="nav-overlay"]');

  let menuAnim = gsap.timeline({
    paused: true,
    defaults: {
      duration: durationSlow,
      ease: easeInOut,
    },
  });

  menuAnim
    .set(menu, {
      display: "flex",
      x: "-100%",
    })
    .set(overlay, { display: "block" }, "<")
    .to(lineTop, { y: 11, rotate: "-45", duration: durationFast }, "<")
    .to(lineMiddle, { x: -10, opacity: 0, duration: durationFast }, "<")
    .to(
      lineBottom,
      { y: -11, rotate: "45", width: "2.25rem", duration: durationFast },
      "<"
    )
    .from(menu, { x: "-100%", duration: durationBase }, "<")
    .to(overlay, { opacity: 1, duration: durationFast }, "<");

  const toggleMenu = () => {
    if (menuAnim.progress() === 0) {
      menuOpen = true;
      // disableScrolling();
      menuAnim.play();
      gsap.to(hamburger, {
        color: "var(--swatch--dark)",
        duration: durationFast,
      });
    } else {
      menuOpen = false;
      // enableScrolling();
      menuAnim.reverse(0.7);
      gsap.to(hamburger, {
        color:
          initialTheme === "dark"
            ? "var(--swatch--light)"
            : "var(--swatch--dark)",
        duration: durationFast,
        delay: 0.2,
      });
    }
  };

  const closeMenu = () => {
    menuOpen = false;
    // enableScrolling();
    menuAnim.reverse(0.7);
    gsap.to(hamburger, {
      color:
        initialTheme === "dark"
          ? "var(--swatch--light)"
          : "var(--swatch--dark)",
      duration: durationFast,
      delay: 0.2,
    });
  };

  hamburger.addEventListener("click", toggleMenu);
  overlay.addEventListener("click", closeMenu);
  Array.from(links).forEach((link) =>
    link.addEventListener("click", closeMenu)
  );
}

// Nav Background Animation

function navBackground() {
  const nav = document.querySelector(".nav_component");
  const background = nav.querySelector(".nav_background");
  const navBorder = nav.querySelector(".nav_border");

  initialTheme = nav.getAttribute("data-theme");

  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: "body",
      start: "top top",
      end: "1px top",
      toggleActions: "play none reverse none",
      scrub: false,
      onUpdate: () => updateHamburgerColorBasedOnScroll(),
    },
    defaults: {
      duration: 0.3,
      ease: "power2.inOut",
    },
  });

  tl.to(nav, {
    onStart: () => {
      if (initialTheme === "dark") {
        nav.setAttribute("data-theme", "light");
      }
    },
    onReverseComplete: () => {
      if (initialTheme === "dark") {
        nav.setAttribute("data-theme", "dark");
      }
    },
  })
    .to(background, { opacity: 1 }, "<")
    .to(navBorder, { backgroundColor: "var(--swatch--transparent)" }, "<");
}

function updateHamburgerColorBasedOnScroll() {
  const hamburger = document.querySelector('[js-el="nav-button"]');
  const scrollPosition = window.scrollY;

  if (!menuOpen) {
    gsap.to(hamburger, {
      color:
        scrollPosition > 100
          ? "var(--swatch--dark)"
          : initialTheme === "dark"
          ? "var(--swatch--light)"
          : "var(--swatch--dark)",
      duration: 0.3,
      ease: "power2.inOut",
    });
  }
}

// Split Text Lines Animation

function splitLines() {
  const headings = document.querySelectorAll('[scroll-anim="split-lines"]');

  headings.forEach((heading) => {
    const headlineSplit = new SplitType(heading, {
      types: "lines, words",
      tagName: "span",
    });

    const splitText = heading.querySelectorAll(".word");

    let splitAnim = gsap.timeline({
      scrollTrigger: {
        trigger: heading,
        start: "top bottom",
        toggleActions: "play none none reverse",
      },
      defaults: {
        duration: 1.6,
        ease: easeInOut,
      },
    });

    splitAnim.from(splitText, {
      y: "110%",
      stagger: 0.05,
    });
  });
}

// Fade Up Animation

function fadeUp() {
  const fadeEls = document.querySelectorAll('[scroll-anim="fade-up"]');

  fadeEls.forEach((el) => {
    let fadeUp = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      defaults: {
        duration: durationBase,
        ease: "power2.inOut",
      },
    });

    fadeUp.from(el, {
      opacity: 0,
      y: "4rem",
    });
  });
}

// Fade Up Animation

function fadeLeft() {
  const fadeEls = document.querySelectorAll('[scroll-anim="fade-left"]');

  fadeEls.forEach((el) => {
    let fadeUp = gsap.timeline({
      scrollTrigger: {
        trigger: el,
        start: "top 92%",
        toggleActions: "play none none none",
      },
      defaults: {
        duration: durationBase,
        ease: "power2.inOut",
      },
    });

    fadeUp.from(el, {
      opacity: 0,
      x: "2rem",
    });
  });
}

// Fade In Animation

function fadeIn() {
  const fadeItems = document.querySelectorAll('[scroll-anim="fade-in"]');

  fadeItems.forEach((fadeItem) => {
    let fadeIn = gsap.timeline({
      scrollTrigger: {
        trigger: fadeItem,
        start: "top 85%",
        toggleActions: "play none none none",
      },
      defaults: {
        duration: durationSlow,
        ease: "power2.inOut",
      },
    });

    fadeIn.from(fadeItem, {
      opacity: 0,
    });
  });
}

// Icon Button Loop

function iconBtnLoop() {
  const outlines = document.querySelectorAll(".icon-btn_outer");

  outlines.forEach((outline) => {
    let tl = gsap.timeline({
      defaults: {
        duration: 1.5,
        ease: "none",
      },
    });

    tl.from(outline, {
      opacity: 1,
      width: "80%",
      height: "80%",
      repeat: -1,
    });
  });
}

// Append View All Suites footer link to CMS list

function appendFooterLink() {
  const staticLink = document.querySelector('[js-el="append-item"]');
  const cmsList = document.querySelector('[js-el="append-list"]');

  cmsList.appendChild(staticLink);
}

// Disable scroll toggle

function disableScrolling() {
  document.body.classList.add("no-scroll");
  lenis.stop();
}

function enableScrolling() {
  document.body.classList.remove("no-scroll");
  lenis.start();
}

function eyebrowSafari() {
  const eyebrows = document.querySelectorAll(".eyebrow_wrapper");

  const isSafari = /^((?!chrome|chromium|android).)*safari/i.test(
    navigator.userAgent
  );

  if (isSafari) {
    eyebrows.forEach((eyebrow) => {
      eyebrow.classList.add("is-safari");
    });
  }
}

//
// FUNCTION INITS
//

document.addEventListener("DOMContentLoaded", (event) => {
  checkAnnouncementBanner();
  checkNewsletterModal();
  navOpen();
  navBackground();
  updateHamburgerColorBasedOnScroll();
  splitLines();
  fadeUp();
  fadeLeft();
  fadeIn();
  iconBtnLoop();
  appendFooterLink();
  eyebrowSafari();
});
