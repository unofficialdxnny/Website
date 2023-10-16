setInterval(function () {
    var myImageElement = document.getElementById("Spotify-now-playing");
    myImageElement.src =
      "https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false" +
      Math.random();
  }, 3000);