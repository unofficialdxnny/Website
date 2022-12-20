setInterval(function() {
  var myImageElement = document.getElementById('Spotify-now-playing');
  myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view.svg?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=true&background_color=121212&bar_color=f2aa4c&bar_color_cover=false?rand=' + Math.random();
}, 3000);