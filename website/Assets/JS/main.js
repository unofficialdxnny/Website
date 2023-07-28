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
  