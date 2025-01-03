function experienceTabs() {
    const tabLinks = document.querySelectorAll(
      ".experiences_tab-menu .experiences_tab-item"
    );
    const tabContents = document.querySelectorAll(
      ".experiences_tab-component .experiences_tab-content"
    );
  
    if (tabLinks.length !== tabContents.length) {
      return;
    }
  
    let currentTab = 0;
    let autoSwitch;
  
    function showTab(index) {
      if (!tabContents[index] || !tabLinks[index]) {
        return;
      }
  
      tabContents.forEach((content, i) => {
        if (content) {
          content.style.display = "none";
          content.style.opacity = "0";
        }
        if (tabLinks[i]) tabLinks[i].classList.remove("active");
      });
  
      tabContents[index].style.display = "block";
      gsap.to(tabContents[index], {
        opacity: 1,
        duration: 0.3,
        ease: "power2.inOut",
      });
  
      tabLinks[index].classList.add("active");
      currentTab = index;
    }
  
    function startAutoSwitch() {
      autoSwitch = setInterval(() => {
        const nextTab = (currentTab + 1) % tabLinks.length;
        showTab(nextTab);
      }, 7000);
    }
  
    tabLinks.forEach((link, index) => {
      link.addEventListener("click", () => {
        clearInterval(autoSwitch);
        showTab(index);
        startAutoSwitch();
      });
    });
  
    showTab(0);
    startAutoSwitch();
  }
  
  experienceTabs();  