setInterval(function() {
    var myImageElement = document.getElementById('Spotify-now-playing');
    myImageElement.src = 'https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false' + Math.random();
  }, 3000);


  // disable dragging
  document.addEventListener('dragstart', (event) => {
    event.preventDefault();
  });
  


  function copyURLToClipboard(urlToCopy) {
    // Create a temporary textarea element to hold the URL
    const textarea = document.createElement('textarea');
    textarea.value = urlToCopy;
  
    // Make the textarea hidden
    textarea.style.position = 'absolute';
    textarea.style.left = '-9999px';
  
    // Add the textarea to the DOM
    document.body.appendChild(textarea);
  
    // Select and copy the URL from the textarea
    textarea.select();
    document.execCommand('copy');
  
    // Remove the temporary textarea from the DOM
    document.body.removeChild(textarea);
  
    // You can optionally show a message to the user to indicate successful copying
    alert('URL copied to clipboard!');
  }
  
  // // Add an event listener to the overlay element
  // const st = document.querySelector('#strangerthings-link');
  // st.addEventListener('click', function() {
  //   copyURLToClipboard('https://gamepadviewer.com/?p=1&s=8&editcss=https%3A%2F%2Funofficialdxnny.netlify.app%2FAssets%2FCSS%2Fstrangerthings.css');
  // });
  



  

  // help

  let isPopupOpen = false;

document.addEventListener('keyup', function(event) {
  if (event.key === 'h') {
    togglePopup();
  }
});

function togglePopup() {
  const popup = document.getElementById('popupContainer');
  if (isPopupOpen) {
    closePopup(popup);
  } else {
    openPopup(popup);
  }
}

function openPopup(popup) {
  popup.style.display = 'block';
  isPopupOpen = true;
  document.addEventListener('click', clickOutsideHandler);
}

function closePopup(popup) {
  popup.style.display = 'none';
  isPopupOpen = false;
  document.removeEventListener('click', clickOutsideHandler);
}

function clickOutsideHandler(event) {
  const popup = document.getElementById('popupContainer');
  if (!popup.contains(event.target)) {
    closePopup(popup);
  }
}


// // Find the button element by its id
// const strangerThings = document.getElementById("strangerthings");

// // Initialize the click count
// let clickCount = 0;

// // Add a click event listener to the button
// strangerThings.addEventListener("click", function() {
//   // Text to be copied to the clipboard
//   const textToCopy = "https://gamepadviewer.com/?p=1&s=8&editcss=https%3A%2F%2Funofficialdxnny.netlify.app%2FAssets%2FCSS%2Fstrangerthings.css";


//   // Create a temporary textarea element
//   const textarea = document.createElement("textarea");
//   textarea.value = textToCopy;
//   document.body.appendChild(textarea);

//   // Select the text within the textarea
//   textarea.select();
//   textarea.setSelectionRange(0, textarea.value.length);

//   // Copy the selected text to the clipboard
//   document.execCommand("copy");

//   // Remove the temporary textarea
//   document.body.removeChild(textarea);

//   // Increment the click count
//   clickCount++;

//   // Display the click count
//   console.log("Button clicked " + clickCount + " times");

//   // Optionally, provide visual feedback to the user

// });


