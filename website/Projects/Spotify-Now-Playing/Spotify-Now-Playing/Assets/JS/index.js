// Function to redirect to spotify.html if Discord user ID exists
function redirectToSpotifyPage(userId) {
  if (userId !== null) {
      window.location.href = `spotify.html?discord_user_id=${userId}`; // Redirect to spotify.html
  }
}


// Function to handle form submission
// Function to handle form submission
function submit() {
  const userId = document.getElementById("userID").value;
  const cssInput = document.getElementById("css").value;

  if (userId.trim() !== "") {
      // Construct the URL with user ID and CSS
      const url = `spotify.html?discord_user_id=${userId}&css=${encodeURIComponent(cssInput)}`;

      // Redirect to the constructed URL
      window.location.href = url;
  } else {
      alert("Please Enter Discord UserID");
  }
}
