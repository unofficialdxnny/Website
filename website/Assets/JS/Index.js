setInterval(function() {
    var myImageElement = document.getElementById('Spotify-now-playing');
    myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false' + Math.random();
  }, 3000);


  // disable dragging
  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  

  // Check if the user's preferred theme is stored in local storage
const userTheme = localStorage.getItem('theme');

// Check if the background color is light
function isLightColor(color) {
  // You can define your own logic to determine if a color is light or dark
  // Here, we're using a simple check based on brightness
  const [r, g, b] = color.match(/\d+/g);
  const brightness = (r * 299 + g * 587 + b * 114) / 1000;
  return brightness > 125;
}

// Function to toggle between light and dark themes
function toggleTheme() {
  const body = document.querySelector('body');
  const isLight = isLightColor(window.getComputedStyle(body).backgroundColor);

  // Toggle theme based on background color and user preference
  if (isLight) {
    body.classList.remove('light');
    body.classList.add('dark');
    localStorage.setItem('theme', 'dark');
  } else {
    body.classList.remove('dark');
    body.classList.add('light');
    localStorage.setItem('theme', 'light');
  }
}

// Function to load the theme on page load
function loadTheme() {
  const body = document.querySelector('body');

  // If user preference is stored, load the theme accordingly
  if (userTheme === 'dark') {
    body.classList.add('dark');
  } else {
    body.classList.add('light');
  }
}

// Event listener to detect if the 't' key is pressed
document.addEventListener('keyup', function(event) {
  if (event.key === 't') {
    toggleTheme();
  }
});

// Call the loadTheme function on page load
loadTheme();
