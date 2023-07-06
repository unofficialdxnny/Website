setInterval(function() {
    var myImageElement = document.getElementById('Spotify-now-playing');
    myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false' + Math.random();
  }, 3000);


  // disable dragging
  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  

      // Check if the theme is stored in local storage
      const theme = localStorage.getItem('theme');
      if (theme) {
        document.body.classList.add(theme); // Apply the stored theme
      }
  
      // Function to toggle the theme
      function toggleTheme() {
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
  
        // Toggle the theme class
        document.body.classList.toggle('light');
        document.body.classList.toggle('dark');
  
        // Update the moon icon
        const moonIcon = document.getElementById('moonIcon');
        if (currentTheme === 'dark') {
          moonIcon.classList.remove('fa-sun');
          moonIcon.classList.add('fa-moon');
        } else {
          moonIcon.classList.remove('fa-moon');
          moonIcon.classList.add('fa-sun');
        }
  
        // Store the theme in local storage
        localStorage.setItem('theme', currentTheme);
      }
  
      // Add click event listener to the moonContainer element
      const moonContainer = document.getElementById('moonContainer');
      moonContainer.addEventListener('click', toggleTheme);


      function handleKeyUp(event) {
        const key = event.key.toUpperCase();
        if (key === 'T') {
          toggleTheme();
          changeFavicon();
        }
      }
  
      // Function to change the favicon
      function changeFavicon() {
        const link = document.querySelector('link[rel="icon"]');
        const currentTheme = document.body.classList.contains('dark') ? 'dark' : 'light';
        const faviconUrl = currentTheme === 'dark' ? 'dark-favicon.png' : 'light-favicon.png';
        link.href = faviconUrl;
      }
  
      // Add keyup event listener to the document
      document.addEventListener('keyup', handleKeyUp);