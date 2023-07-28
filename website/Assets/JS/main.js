function showAbout() {
    hideAllContent();
    document.getElementById("aboutContent").classList.add("show");
  }
  
  function showEducation() {
    hideAllContent();
    document.getElementById("educationContent").classList.add("show");
  }
  
  function showProjects() {
    hideAllContent();
    document.getElementById("projectsContent").classList.add("show");
  }
  
  function hideAllContent() {
    const contents = document.getElementsByClassName("content");
    for (let i = 0; i < contents.length; i++) {
      contents[i].classList.remove("show");
    }
  }
  
  // Initialize the page by showing the 'About' section by default
  showAbout();

  setInterval(function() {
    var myImageElement = document.getElementById('Spotify-now-playing');
    myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false' + Math.random();
  }, 3000);

