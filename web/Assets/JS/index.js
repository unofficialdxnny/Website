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

