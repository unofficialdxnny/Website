setInterval(function() {
    var myImageElement = document.getElementById('Spotify-now-playing');
    myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false' + Math.random();
  }, 3000);


/* Change the width of the progress bar based on the user's scroll position */
window.addEventListener('scroll', function() {
  var scrollPosition = window.scrollY;
  var windowHeight = window.innerHeight;
  var bodyHeight = document.body.offsetHeight;
  var progress = (scrollPosition / (bodyHeight - windowHeight)) * 100;
  document.querySelector('.progress-bar').style.width = progress + '%';
});