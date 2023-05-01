setInterval(function() {
    var myImageElement = document.getElementById('Spotify-now-playing');
    myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false' + Math.random();
  }, 3000);


// Wait for the image to load and then show the content
const image = document.querySelector('.splash img');
image.addEventListener('load', function() {
  setTimeout(() => {
    document.querySelector('.splash').classList.add('hide');
    document.querySelector('.content').classList.add('show');
  }, 2000); // Change the delay as needed
});
