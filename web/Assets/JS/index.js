document.addEventListener("DOMContentLoaded", function() {
    const sloganElement = document.getElementById("slogan");
    const sloganText = "Graphics | Video | Programming";
    let index = 0;
    let isDeleting = false;
  
    function typeSlogan() {
      const currentText = sloganText.substring(0, index);
      sloganElement.textContent = currentText;
  
      if (isDeleting) {
        index--;
      } else {
        index++;
      }
  
      if (index === sloganText.length + 1) {
        isDeleting = true;
      }
  
      if (index === 0) {
        isDeleting = false;
      }
  
      const typingSpeed = isDeleting ? 100 : 200; // Adjust typing and deleting speed
      setTimeout(typeSlogan, typingSpeed);
    }
  
    // Call the typing function after a delay or on page load
    setTimeout(typeSlogan, 1000);
  });
  

// snp
      // Function to refresh the image source
      function refreshImage() {
        // Get the image element
        var image = document.getElementById("Spotify-now-playing");
    
        // Get the current source
        var currentSource = image.src;
    
        // Add a timestamp parameter to the URL to force a refresh
        var newSource = currentSource + "?timestamp=" + new Date().getTime();
    
        // Set the new source
        image.src = newSource;
      }
    
      // Refresh the image every 3 seconds
      setInterval(refreshImage, 3000);


// progress cards

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelector('.projects');
  const cardContainer = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.card');

  // Clone the cards to create a loop
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    cardContainer.appendChild(clone);
  });

  let scrollPosition = 0;

  // Listen for scroll events on the projects container
  projects.addEventListener('scroll', function () {
    const cardWidth = cards[0].offsetWidth;
    const totalWidth = cards.length * cardWidth;

    // Update the scroll position
    scrollPosition = projects.scrollLeft;

    // Check if the user has scrolled beyond the last card
    if (scrollPosition >= totalWidth - projects.offsetWidth) {
      // Reset the scroll position to the beginning
      projects.scrollLeft = 0;
    }
  });
});

// social media icons

