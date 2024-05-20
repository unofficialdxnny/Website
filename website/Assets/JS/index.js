// Enable dark theme by default
localStorage.setItem("theme", "dark");

document.addEventListener('DOMContentLoaded', function () {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        enableDarkMode();
    } else {
        enableLightMode();
    }

    // Add click event listeners to navbar links
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            document.querySelectorAll('.section-content').forEach(section => {
                section.style.display = 'none';
            });
            document.getElementById(sectionId).style.display = 'block';
        });
    });

    // Initially show the Home section
    document.querySelector('.nav-link[data-section="home"]').click();
});

function enableDarkMode() {
    document.body.classList.add('dark-theme');
    localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
    document.body.classList.remove('dark-theme');
    localStorage.setItem('theme', 'light');
}

// Function to refresh the image source
function refreshImage() {
    var image = document.getElementById("Spotify-now-playing");
    var currentSource = image.src;
    var newSource = currentSource + "?timestamp=" + new Date().getTime();
    image.src = newSource;
}

setInterval(refreshImage, 3000);

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
                    colorCode = '4f8832';
                    circleColor = 'green';
                    break;
                case 'idle':
                    colorCode = 'f79c18';
                    circleColor = 'yellow';
                    break;
                case 'dnd':
                    colorCode = '812e25';
                    circleColor = 'red';
                    break;
                case 'offline':
                    colorCode = 'gray';
                    circleColor = 'gray';
                    break;
                default:
                    colorCode = '000000';
                    circleColor = 'black';
            }

            const newSrc = imageElement.src.replace(/bar_color=.*?(&|$)/, `bar_color=${colorCode}$1`);
            if (imageElement.src !== newSrc) {
                imageElement.src = newSrc;
            }
            statusCircle.style.backgroundColor = circleColor;

    
        } else {
            console.error('Error fetching Discord status:', data);
        }
    } catch (error) {
        console.error('Error fetching Discord status:', error);
    }
}

updateDiscordStatus();
setInterval(updateDiscordStatus, 1000);

function nav_click_sound() {
    const audio = new Audio('https://unofficialdxnny.com/Assets/Sounds/MoansGroansSexyFem PE134701.mp3');
    audio.play().catch((error) => {
        console.error('Error playing audio:', error);
    });
}
