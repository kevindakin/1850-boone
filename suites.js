function tabsTitle() {
    const title = document.querySelector('[data-matterport="title"]');
    const layout = document.querySelector('[data-matterport="layout"]');
  
    if (!title || !layout) return;
  
    layout.prepend(title);
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    tabsTitle();
  });  