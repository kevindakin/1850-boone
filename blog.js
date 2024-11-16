function appendNewsletterCTA() {
    const posts = document.querySelectorAll(".blog_item.w-dyn-item");
    const newsletter = document.querySelector(".newsletter-card_component");
  
    if (posts.length >= 5) {
      posts[4].after(newsletter);
    }
  }
  
setTimeout(appendNewsletterCTA, 100);