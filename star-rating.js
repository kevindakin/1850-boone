function starRating() {
    const ratingOverlay = document.querySelector(".rating_star-overlay");
    const ratingValue = parseFloat(ratingOverlay.getAttribute("data-rating"));
  
    // Dimensions based on the design, in pixels
    const totalWidth = 109;
    const starWidth = 16.82;
    const gapWidth = 6;
  
    // Calculate the number of full stars and the remaining fraction
    const fullStars = Math.floor(ratingValue);
    const fractionalStar = ratingValue - fullStars;
  
    // Base width calculation for the stars
    let width = fullStars * starWidth + fractionalStar * starWidth;
  
    // Add gaps between the stars, dynamically adjusting based on full stars
    width += Math.min(fullStars, 4) * gapWidth;
  
    // Convert to percentage of total width for responsive scaling
    const widthPercentage = ((totalWidth - width) / totalWidth) * 100;
  
    // Apply the calculated width to the overlay
    gsap.set(ratingOverlay, {
      width: `${widthPercentage}%`,
    });
  }
  
starRating();  