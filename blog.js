function appendNewsletterCTA() {
    const posts = document.querySelectorAll(".blog_item.w-dyn-item");
    const newsletter = document.querySelector(".newsletter-card_component");
  
    if (posts.length >= 5) {
      posts[4].after(newsletter);
    }
  }
  
  // Wrap the function in a delay to account for any filtering effects
  document.addEventListener("DOMContentLoaded", () => {
    setTimeout(appendNewsletterCTA, 100); // Adjust the delay as needed
  });  