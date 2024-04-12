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




  // Navbar

  document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.hamburger');
    const navbar = document.querySelector('.navbar');

    hamburger.addEventListener('click', function () {
      navbar.classList.toggle('active');
    });
  });



  async function updateDiscordStatus() {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/898937224895270972');
      const data = await response.json();
  
      if (response.ok) {
        const status = data.data.discord_status;
        const activity = data.data.activities.find(act => act.type === 0); // Find 'playing' activity
        const h1Element = document.getElementById('discord-status');
        const mainElement = document.querySelector('.main');
  
        // Change color based on status
        switch (status) {
          case 'online':
            h1Element.style.color = 'green';
            mainElement.style.backgroundColor = 'green';
            break;
          case 'idle':
            h1Element.style.color = 'yellow';
            mainElement.style.backgroundColor = 'yellow';
            break;
          case 'dnd':
            h1Element.style.color = 'red';
            mainElement.style.backgroundColor = 'red';
            break;
          case 'offline':
            h1Element.style.color = 'gray';
            mainElement.style.backgroundColor = 'gray';
            break;
          default:
            h1Element.style.color = 'black';
            mainElement.style.backgroundColor = 'white';
        }

        if (activity) {
          const activityName = activity.name.toLowerCase();
          const backgroundImageMap = {
            'visual studio code': 'https://unofficialdxnny.com/beta/Assets/Images/vsc.png',
            'counter-strike 2': 'https://upload.wikimedia.org/wikipedia/commons/9/9c/Counter_Strike_2_Logo.png'

          }

          const newBackgroundImage = backgroundImageMap[activityName];
          if (newBackgroundImage) {
            mainElement.style.backgroundImage = `url(${newBackgroundImage})`;
          }
        }
      } else {
        console.error('Error fetching Discord status:', data);
      }
    } catch (error) {
      console.error('Error fetching Discord status:', error);
    }
  }
  
  updateDiscordStatus();
  setInterval(updateDiscordStatus, 1000); // Update frequently
  