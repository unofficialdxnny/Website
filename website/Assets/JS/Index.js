setInterval(function() {
    var myImageElement = document.getElementById('Spotify-now-playing');
    myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false' + Math.random();
  }, 3000);


  // disable dragging
  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  

  const button = document.getElementById("strangerthings");

// Add a click event listener to the button
button.addEventListener("click", function() {
  // Text to be copied to the clipboard
  const textToCopy = "https://gamepadviewer.com/?p=1&s=8&editcss=https%3A%2F%2Funofficialdxnny.netlify.app%2FAssets%2FCSS%2Fstrangerthings.css";

  // Create a temporary textarea element
  const textarea = document.createElement("textarea");
  textarea.value = textToCopy;
  document.body.appendChild(textarea);

  // Select the text within the textarea
  textarea.select();
  textarea.setSelectionRange(0, textarea.value.length);

  // Copy the selected text to the clipboard
  document.execCommand("copy");

  // Remove the temporary textarea
  document.body.removeChild(textarea);

  // Optionally, provide visual feedback to the user
  button.textContent = "Copied!";
  setTimeout(function() {
    button.textContent = "Click to Copy";
  }, 2000);
});