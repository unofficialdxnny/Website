// theme-toggle

// cba to change the styes so everyone just gets dark theme
localStorage.setItem("theme", "dark")

document.addEventListener('DOMContentLoaded', function () {
    // Check local storage for theme preference
    const savedTheme = localStorage.getItem('theme');
    
    // Apply the saved theme or default to light mode
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }
});

// function toggleTheme() {
//     const body = document.body;
    
//     // Toggle between light and dark modes
//     if (body.classList.contains('dark-theme')) {
//         enableLightMode();
//     } else {
//         enableDarkMode();
//     }
// }

function enableDarkMode() {
    const body = document.body;

    // Add dark mode class
    body.classList.add('dark-theme');

    // Save theme preference in local storage
    localStorage.setItem('theme', 'dark');
}

// function enableLightMode() {
//     const body = document.body;

//     // Remove dark mode class
//     body.classList.remove('dark-theme');

//     // Save theme preference in local storage
//     localStorage.setItem('theme', 'light');
// }

// // Add event listener for keyup on 'T'
// document.addEventListener('keyup', function (event) {
//     if (event.key === 'T' || event.key === 't') {
//         toggleTheme();
//     }
// });


async function updateDiscordStatus() {
  try {
      const response = await fetch('https://api.lanyard.rest/v1/users/898937224895270972');
      const data = await response.json();

      if (response.ok) {
          const status = data.data.discord_status;
          const imageElement = document.getElementById('Spotify-now-playing');
          const statusCircle = document.getElementById('status-circle');
          const socialIcons = document.querySelectorAll('.social-icons a');

          
          let colorCode;
          let circleColor;
                switch (status) {
                    case 'online':
                        colorCode = '4f8832'; // Green
                        circleColor = 'green';
                        

                        break;
                    case 'idle':
                        colorCode = 'f79c18'; // Yellow
                        circleColor = 'yellow';

                        break;
                    case 'dnd':
                        colorCode = '812e25'; // Red
                        circleColor = 'red';

                        break;
                    case 'offline':
                        colorCode = 'gray'; // Gray
                        circleColor = 'gray';

                        break;
                    default:
                        colorCode = '000000'; // Black as default
                        circleColor = 'black';
                }



          

                  // Update the image URL with the new bar_color
                  const newSrc = imageElement.src.replace(/bar_color=.*?(&|$)/, `bar_color=${colorCode}$1`);
                  if (imageElement.src !== newSrc) {
                      imageElement.src = newSrc;
                  }
  
                  statusCircle.style.backgroundColor = circleColor;

                        // Set background color for the ::after pseudo-element of each social icon
      socialIcons.forEach(icon => {
        icon.style.position = 'relative'; // Ensure parent is relatively positioned
        icon.style.overflow = 'hidden'; // Ensure overflow is hidden to contain ::after pseudo-element
        icon.style.setProperty('--after-background-color', colorCode);
      });

      // Add class to social icons to match circle color
      socialIcons.forEach(icon => {
        icon.className = ''; // Clear existing classes
        icon.classList.add(status); // Add class based on Discord status
      });


      } else {
          console.error('Error fetching Discord status:', data);
      }
  } catch (error) {
      console.error('Error fetching Discord status:', error);
  }
}

updateDiscordStatus();
setInterval(updateDiscordStatus, 1000);
  // navbar click sound
  
  function nav_click_sound() {
    console.log('Button clicked'); // Debugging statement
    const audio = new Audio('https://unofficialdxnny.com/Assets/Sounds/click.mp3'); // Ensure the path is correct
    audio.play().then(() => {
        console.log('Audio playing'); // Debugging statement
    }).catch((error) => {
        console.error('Error playing audio:', error); // Debugging statement
    });
  }
  
  

  