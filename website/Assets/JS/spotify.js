setInterval(function() {
    var myImageElement = document.getElementById('Spotify-now-playing');
    myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=false&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=c3cbd4&bar_color_cover=fals' + Math.random();
  }, 3000);