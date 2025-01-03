function catAppend() {
    const chip = document.querySelector('[js-el="category"]');
    const cards = document.querySelectorAll(".blog_item");
  
    if (!chip) {
      return;
    }
  
    chip.style.display = "flex";
  
    cards.forEach((card) => {
      const clonedChip = chip.cloneNode(true);
      card.appendChild(clonedChip);
    });
  
    chip.remove();
  }
  
  document.addEventListener("DOMContentLoaded", (event) => {
    catAppend();
  });
  