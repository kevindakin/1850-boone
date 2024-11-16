function filterNav() {
    const nav = document.querySelector(".filter-nav_component");
  
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: nav,
        start: "6.5rem top",
        toggleActions: "play none none reverse",
      },
    });
  
    tl.to(nav, {
      background: "#EFE9E0",
      duration: 0.4,
    });
  }
  
filterNav();  