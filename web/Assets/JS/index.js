// online status
async function updateDiscordStatus() {
    try {
      const response = await fetch('https://api.lanyard.rest/v1/users/898937224895270972');
      const data = await response.json();
  
      if (response.ok) {
        const status = data.data.discord_status;
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
      } else {
        console.error('Error fetching Discord status:', data);
      }
    } catch (error) {
      console.error('Error fetching Discord status:', error);
    }
  }
  
  
  updateDiscordStatus();
  setInterval(updateDiscordStatus, 1000);