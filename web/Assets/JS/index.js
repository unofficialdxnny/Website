document.addEventListener("DOMContentLoaded", function() {
    const sloganElement = document.getElementById("slogan");
    const sloganText = "Graphics | Video | Programming";
    let index = 0;
    let isDeleting = false;
  
    function typeSlogan() {
      const currentText = sloganText.substring(0, index);
      sloganElement.textContent = currentText;
  
      if (isDeleting) {
        index--;
      } else {
        index++;
      }
  
      if (index === sloganText.length + 1) {
        isDeleting = true;
      }
  
      if (index === 0) {
        isDeleting = false;
      }
  
      const typingSpeed = isDeleting ? 100 : 200; // Adjust typing and deleting speed
      setTimeout(typeSlogan, typingSpeed);
    }
  
    // Call the typing function after a delay or on page load
    setTimeout(typeSlogan, 1000);
  });
  

// snp
      // Function to refresh the image source
      function refreshImage() {
        // Get the image element
        var image = document.getElementById("Spotify-now-playing");
    
        // Get the current source
        var currentSource = image.src;
    
        // Add a timestamp parameter to the URL to force a refresh
        var newSource = currentSource + "?timestamp=" + new Date().getTime();
    
        // Set the new source
        image.src = newSource;
      }
    
      // Refresh the image every 3 seconds
      setInterval(refreshImage, 3000);


// progress cards

document.addEventListener("DOMContentLoaded", function () {
  const projects = document.querySelector('.projects');
  const cardContainer = document.querySelector('.card-container');
  const cards = document.querySelectorAll('.card');

  // Clone the cards to create a loop
  cards.forEach((card) => {
    const clone = card.cloneNode(true);
    cardContainer.appendChild(clone);
  });

  let scrollPosition = 0;

  // Listen for scroll events on the projects container
  projects.addEventListener('scroll', function () {
    const cardWidth = cards[0].offsetWidth;
    const totalWidth = cards.length * cardWidth;

    // Update the scroll position
    scrollPosition = projects.scrollLeft;

    // Check if the user has scrolled beyond the last card
    if (scrollPosition >= totalWidth - projects.offsetWidth) {
      // Reset the scroll position to the beginning
      projects.scrollLeft = 0;
    }
  });
});

// social media icons

    // Function to create buttons with SVGs
    function createButton(svgContent) {
      const button = document.createElement('button');
      button.classList.add('button');
      button.innerHTML = svgContent;
      return button;
    }

    // Function to generate buttons dynamically
    function generateButtons(amount) {
      const buttonsContainer = document.getElementById('buttonsContainer');

      // SVG content for each button
      const svgContents = [
        ` <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512">
        <path fill="#5865F2" d="M105 0h302c57.928.155 104.845 47.072 105 104.996V407c-.155 57.926-47.072 104.844-104.996 104.998L105 512C47.074 511.844.156 464.926.002 407.003L0 105C.156 47.072 47.074.155 104.997 0H105z"></path>
        <g data-name="å¾å± 2">
          <g data-name="Discord Logos">
            <path fill="#fff" fill-rule="nonzero" d="M368.896 153.381a269.506 269.506 0 00-67.118-20.637 186.88 186.88 0 00-8.57 17.475 250.337 250.337 0 00-37.247-2.8c-12.447 0-24.955.946-37.25 2.776-2.511-5.927-5.427-11.804-8.592-17.454a271.73 271.73 0 00-67.133 20.681c-42.479 62.841-53.991 124.112-48.235 184.513a270.622 270.622 0 0082.308 41.312c6.637-8.959 12.582-18.497 17.63-28.423a173.808 173.808 0 01-27.772-13.253c2.328-1.688 4.605-3.427 6.805-5.117 25.726 12.083 53.836 18.385 82.277 18.385 28.442 0 56.551-6.302 82.279-18.387 2.226 1.817 4.503 3.557 6.805 5.117a175.002 175.002 0 01-27.823 13.289 197.847 197.847 0 0017.631 28.4 269.513 269.513 0 0082.363-41.305l-.007.007c6.754-70.045-11.538-130.753-48.351-184.579zM201.968 300.789c-16.04 0-29.292-14.557-29.292-32.465s12.791-32.592 29.241-32.592 29.599 14.684 29.318 32.592c-.282 17.908-12.919 32.465-29.267 32.465zm108.062 0c-16.066 0-29.267-14.557-29.267-32.465s12.791-32.592 29.267-32.592c16.475 0 29.522 14.684 29.241 32.592-.281 17.908-12.894 32.465-29.241 32.465z" data-name="Discord Logo - Large - White"></path>
          </g>
        </g>
      </svg>`,
      `<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 132.004 132">
      <defs>
        <linearGradient id="b">
          <stop offset="0" stop-color="#3771c8"></stop>
          <stop stop-color="#3771c8" offset=".128"></stop>
          <stop offset="1" stop-color="#60f" stop-opacity="0"></stop>
        </linearGradient>
        <linearGradient id="a">
          <stop offset="0" stop-color="#fd5"></stop>
          <stop offset=".1" stop-color="#fd5"></stop>
          <stop offset=".5" stop-color="#ff543e"></stop>
          <stop offset="1" stop-color="#c837ab"></stop>
        </linearGradient>
        <radialGradient id="c" cx="158.429" cy="578.088" r="65" xlink:href="#a" gradientUnits="userSpaceOnUse" gradientTransform="matrix(0 -1.98198 1.8439 0 -1031.402 454.004)" fx="158.429" fy="578.088"></radialGradient>
        <radialGradient id="d" cx="147.694" cy="473.455" r="65" xlink:href="#b" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.17394 .86872 -3.5818 .71718 1648.348 -458.493)" fx="147.694" fy="473.455"></radialGradient>
      </defs>
      <path fill="url(#c)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"></path>
      <path fill="url(#d)" d="M65.03 0C37.888 0 29.95.028 28.407.156c-5.57.463-9.036 1.34-12.812 3.22-2.91 1.445-5.205 3.12-7.47 5.468C4 13.126 1.5 18.394.595 24.656c-.44 3.04-.568 3.66-.594 19.188-.01 5.176 0 11.988 0 21.125 0 27.12.03 35.05.16 36.59.45 5.42 1.3 8.83 3.1 12.56 3.44 7.14 10.01 12.5 17.75 14.5 2.68.69 5.64 1.07 9.44 1.25 1.61.07 18.02.12 34.44.12 16.42 0 32.84-.02 34.41-.1 4.4-.207 6.955-.55 9.78-1.28 7.79-2.01 14.24-7.29 17.75-14.53 1.765-3.64 2.66-7.18 3.065-12.317.088-1.12.125-18.977.125-36.81 0-17.836-.04-35.66-.128-36.78-.41-5.22-1.305-8.73-3.127-12.44-1.495-3.037-3.155-5.305-5.565-7.624C116.9 4 111.64 1.5 105.372.596 102.335.157 101.73.027 86.19 0H65.03z" transform="translate(1.004 1)"></path>
      <path fill="#fff" d="M66.004 18c-13.036 0-14.672.057-19.792.29-5.11.234-8.598 1.043-11.65 2.23-3.157 1.226-5.835 2.866-8.503 5.535-2.67 2.668-4.31 5.346-5.54 8.502-1.19 3.053-2 6.542-2.23 11.65C18.06 51.327 18 52.964 18 66s.058 14.667.29 19.787c.235 5.11 1.044 8.598 2.23 11.65 1.227 3.157 2.867 5.835 5.536 8.503 2.667 2.67 5.345 4.314 8.5 5.54 3.054 1.187 6.543 1.996 11.652 2.23 5.12.233 6.755.29 19.79.29 13.037 0 14.668-.057 19.788-.29 5.11-.234 8.602-1.043 11.656-2.23 3.156-1.226 5.83-2.87 8.497-5.54 2.67-2.668 4.31-5.346 5.54-8.502 1.18-3.053 1.99-6.542 2.23-11.65.23-5.12.29-6.752.29-19.788 0-13.036-.06-14.672-.29-19.792-.24-5.11-1.05-8.598-2.23-11.65-1.23-3.157-2.87-5.835-5.54-8.503-2.67-2.67-5.34-4.31-8.5-5.535-3.06-1.187-6.55-1.996-11.66-2.23-5.12-.233-6.75-.29-19.79-.29zm-4.306 8.65c1.278-.002 2.704 0 4.306 0 12.816 0 14.335.046 19.396.276 4.68.214 7.22.996 8.912 1.653 2.24.87 3.837 1.91 5.516 3.59 1.68 1.68 2.72 3.28 3.592 5.52.657 1.69 1.44 4.23 1.653 8.91.23 5.06.28 6.58.28 19.39s-.05 14.33-.28 19.39c-.214 4.68-.996 7.22-1.653 8.91-.87 2.24-1.912 3.835-3.592 5.514-1.68 1.68-3.275 2.72-5.516 3.59-1.69.66-4.232 1.44-8.912 1.654-5.06.23-6.58.28-19.396.28-12.817 0-14.336-.05-19.396-.28-4.68-.216-7.22-.998-8.913-1.655-2.24-.87-3.84-1.91-5.52-3.59-1.68-1.68-2.72-3.276-3.592-5.517-.657-1.69-1.44-4.23-1.653-8.91-.23-5.06-.276-6.58-.276-19.398s.046-14.33.276-19.39c.214-4.68.996-7.22 1.653-8.912.87-2.24 1.912-3.84 3.592-5.52 1.68-1.68 3.28-2.72 5.52-3.592 1.692-.66 4.233-1.44 8.913-1.655 4.428-.2 6.144-.26 15.09-.27zm29.928 7.97c-3.18 0-5.76 2.577-5.76 5.758 0 3.18 2.58 5.76 5.76 5.76 3.18 0 5.76-2.58 5.76-5.76 0-3.18-2.58-5.76-5.76-5.76zm-25.622 6.73c-13.613 0-24.65 11.037-24.65 24.65 0 13.613 11.037 24.645 24.65 24.645C79.617 90.645 90.65 79.613 90.65 66S79.616 41.35 66.003 41.35zm0 8.65c8.836 0 16 7.163 16 16 0 8.836-7.164 16-16 16-8.837 0-16-7.164-16-16 0-8.837 7.163-16 16-16z"></path>
    </svg>`,
    `<svg xmlns="http://www.w3.org/2000/svg" id="Layer_1" data-name="Layer 1" viewBox="0 0 122.88 122.88">
    <path class="cls-15" d="M25.2,0H97.68a25.27,25.27,0,0,1,25.2,25.2V97.68a25.27,25.27,0,0,1-25.2,25.2H25.2A25.27,25.27,0,0,1,0,97.68V25.2A25.27,25.27,0,0,1,25.2,0Z"></path>
    <path class="cls-16" d="M75.25,74.38a8.23,8.23,0,0,0,9.49.54,5.26,5.26,0,0,0,2.17-2.62h7.15c-1.15,3.56-2.89,6.09-5.27,7.62a15.42,15.42,0,0,1-8.56,2.31,17.09,17.09,0,0,1-6.31-1.12,13.36,13.36,0,0,1-4.77-3.18,14.64,14.64,0,0,1-3-4.92,18.24,18.24,0,0,1-1.06-6.31,17.34,17.34,0,0,1,1.09-6.18,14.43,14.43,0,0,1,3.1-5,14.76,14.76,0,0,1,4.8-3.29,15.37,15.37,0,0,1,6.17-1.21,13.9,13.9,0,0,1,6.57,1.47,13.3,13.3,0,0,1,4.62,3.91A15.9,15.9,0,0,1,94,62.07a21.12,21.12,0,0,1,.57,6.59H73.24a8.22,8.22,0,0,0,2,5.71ZM47.49,40.64a25,25,0,0,1,5.33.52,11.45,11.45,0,0,1,4.12,1.69A8,8,0,0,1,59.62,46a11,11,0,0,1,.93,4.79,9,9,0,0,1-1.4,5.15A10.29,10.29,0,0,1,55,59.28a9.78,9.78,0,0,1,5.62,3.8A12.62,12.62,0,0,1,61.25,75,10.43,10.43,0,0,1,58,78.69a14.27,14.27,0,0,1-4.64,2.11,21.08,21.08,0,0,1-5.34.69H28.24V40.65H47.49Zm-.67,33.88a11.3,11.3,0,0,0,2.51-.26,5.8,5.8,0,0,0,2.11-.87,4.3,4.3,0,0,0,1.47-1.63,5.69,5.69,0,0,0,.53-2.64c0-2.1-.6-3.61-1.78-4.52A7.52,7.52,0,0,0,47,63.27H37.22V74.51h9.6v0Zm-.5-17.39a6.47,6.47,0,0,0,4-1.14,4.28,4.28,0,0,0,1.53-3.71,4.87,4.87,0,0,0-.51-2.35,3.72,3.72,0,0,0-1.39-1.42,5.42,5.42,0,0,0-2-.72,12.49,12.49,0,0,0-2.31-.2h-8.4v9.54h9.1ZM71.57,43.94H88.13v4H71.57v-4Zm13,14.91A6.11,6.11,0,0,0,80,57.2a7,7,0,0,0-3.23.66,6.39,6.39,0,0,0-2.06,1.64,5.68,5.68,0,0,0-1.08,2.08,9.26,9.26,0,0,0-.38,2H86.46a7.91,7.91,0,0,0-1.88-4.68Z"></path>
  </svg>`,
  `   <svg xmlns="http://www.w3.org/2000/svg" shape-rendering="geometricPrecision" text-rendering="geometricPrecision" image-rendering="optimizeQuality" fill-rule="evenodd" clip-rule="evenodd" viewBox="0 0 512 512">
  <rect fill="#ff4500" width="512" height="512" rx="105" ry="105"></rect>
  <path fill="#fff" fill-rule="nonzero" d="M307.75 303.16c-12.98 0-23.54-10.55-23.54-23.54 0-12.98 10.56-23.53 23.54-23.53 12.97 0 23.53 10.55 23.53 23.53 0 12.99-10.56 23.54-23.53 23.54zm4.14 38.66c-16.06 16.04-46.85 17.29-55.9 17.29-9.06 0-39.84-1.25-55.89-17.3a6.096 6.096 0 010-8.62c2.38-2.39 6.25-2.39 8.64 0 10.12 10.13 31.78 13.71 47.25 13.71 15.47 0 37.13-3.58 47.28-13.71a6.09 6.09 0 018.63.01c2.38 2.38 2.37 6.24-.01 8.62zm-131.25-62.2c0-12.98 10.56-23.53 23.55-23.53 12.97 0 23.53 10.55 23.53 23.53s-10.56 23.53-23.53 23.53c-12.99 0-23.55-10.55-23.55-23.53zm225.93-23.53c0-18.2-14.76-32.96-32.95-32.96-8.88 0-16.93 3.53-22.86 9.25-22.53-16.26-53.56-26.76-88.12-27.97l15.01-70.62 49.04 10.42c.59 12.48 10.81 22.43 23.42 22.43 13.01 0 23.54-10.54 23.54-23.54s-10.53-23.54-23.54-23.54c-9.24 0-17.16 5.38-21.01 13.14l-54.77-11.64a5.758 5.758 0 00-4.42.82 5.876 5.876 0 00-2.55 3.71L250.6 204.4c-35.09.97-66.62 11.48-89.43 27.91-5.92-5.68-13.93-9.18-22.79-9.18-18.19 0-32.95 14.76-32.95 32.96 0 13.38 8 24.88 19.47 30.04-.51 3.28-.79 6.6-.79 9.97 0 50.69 59.02 91.8 131.81 91.8 72.8 0 131.82-41.11 131.82-91.8 0-3.35-.28-6.66-.77-9.91 11.54-5.13 19.6-16.67 19.6-30.1z"></path>
</svg>`,
      ];

      // Generate buttons and append to the container
      for (let i = 0; i < amount; i++) {
        const button = createButton(svgContents[i]);
        buttonsContainer.appendChild(button);
      }
    }

    // Call the function with the desired number of buttons
    generateButtons(4); // You can change the number as needed

    // Navbar

    document.addEventListener('DOMContentLoaded', function () {
      const hamburger = document.querySelector('.hamburger');
      const navbar = document.querySelector('.navbar');

      hamburger.addEventListener('click', function () {
        navbar.classList.toggle('active');
      });
    });