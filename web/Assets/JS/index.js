async function updateDiscordStatus() {
  try {
    const response = await fetch('https://api.lanyard.rest/v1/users/898937224895270972');
    const data = await response.json();

    if (response.ok) {
      const status = data.data.discord_status;
      const h1Element = document.getElementById('discord-status');
      const mainElement = document.querySelector('.main');
      const imageElement = document.querySelector('.snp img');
      // const game = data.data.activities.find(activity => activity.type === 0);
      // const gameImageElement = document.getElementById('game-image');

      // Change color based on status
      switch (status) {
        case 'online':
          h1Element.style.color = 'green';
          mainElement.style.backgroundColor = 'green';
          imageElement.src = imageElement.src.replace(/bar_color=.*?&/, 'bar_color=4f8832&');
          break;
        case 'idle':
          h1Element.style.color = 'yellow';
          mainElement.style.backgroundColor = 'yellow';
          imageElement.src = imageElement.src.replace(/bar_color=.*?&/, 'bar_color=f79c18&');
          break;
        case 'dnd':
          h1Element.style.color = 'red';
          mainElement.style.backgroundColor = 'red';
          imageElement.src = imageElement.src.replace(/bar_color=.*?&/, 'bar_color=812e25&');
          break;
        case 'offline':
          h1Element.style.color = 'gray';
          mainElement.style.backgroundColor = 'gray';
          imageElement.src = imageElement.src.replace(/bar_color=.*?&/, 'bar_color=gray&');
          break;
        default:
          h1Element.style.color = 'black';
          mainElement.style.backgroundColor = 'white';
          imageElement.src = imageElement.src.replace(/bar_color=.*?&/, 'bar_color=000000&');
      }
    } else {
      console.error('Error fetching Discord status:', data);
    }
  } catch (error) {
    console.error('Error fetching Discord status:', error);
  }

  // if (game !== null) {
  //   gameImageElement.src = 'online_game_image_url';

  // }
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
