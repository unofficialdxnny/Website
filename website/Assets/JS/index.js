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

document.addEventListener('DOMContentLoaded', function() {
    async function updateDiscordStatus() {
        try {
            const response = await fetch('https://api.lanyard.rest/v1/users/898937224895270972');
            const data = await response.json();

            if (response.ok) {
                const status = data.data.discord_status;
                const imageElement = document.getElementById('Spotify-now-playing');
                const statusCircles = document.querySelectorAll('.status-circle');
                const socialIcons = document.querySelectorAll('.social-icons a');
                const backgroundAbout = document.querySelector('.background-about');

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

                statusCircles.forEach(circle => {
                    circle.style.backgroundColor = circleColor;
                });

                socialIcons.forEach(icon => {
                    icon.style.setProperty('--after-background-color', colorCode);
                });

                socialIcons.forEach(icon => {
                    icon.className = '';
                    icon.classList.add(status);
                });

                if (data.data.listening_to_spotify) {
                    const spotifyTrack = data.data.spotify;
                    if (spotifyTrack && spotifyTrack.album_art_url) {
                        backgroundAbout.style.backgroundImage = `url(${spotifyTrack.album_art_url})`;
                        backgroundAbout.style.backgroundSize = 'cover';
                        backgroundAbout.style.backgroundPosition = 'center';
                        setDynamicTextColor(spotifyTrack.album_art_url);
                    }
                } else {
                    backgroundAbout.style.backgroundImage = '';
                }
            } else {
                console.error('Error fetching Discord status:', data);
            }
        } catch (error) {
            console.error('Error fetching Discord status:', error);
        }
    }

    function setDynamicTextColor(imageUrl) {
        const canvas = document.getElementById('bgCanvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = imageUrl;

        img.onload = function() {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, 0, 0, img.width, img.height);
            const imageData = ctx.getImageData(0, 0, img.width, img.height).data;

            let r = 0, g = 0, b = 0;
            for (let i = 0; i < imageData.length; i += 4) {
                r += imageData[i];
                g += imageData[i + 1];
                b += imageData[i + 2];
            }

            r = Math.floor(r / (imageData.length / 4));
            g = Math.floor(g / (imageData.length / 4));
            b = Math.floor(b / (imageData.length / 4));

            const brightness = (r * 299 + g * 587 + b * 114) / 1000;
            const textColor = brightness > 125 ? 'black' : 'white';

            const aboutSection = document.querySelector('.section-content#about');
            aboutSection.style.color = textColor;
            aboutSection.querySelectorAll('h1, p').forEach(element => {
                element.style.color = textColor;
            });
        };
    }

    updateDiscordStatus();
    setInterval(updateDiscordStatus, 1000);
});


function nav_click_sound() {
    const audio = new Audio('https://unofficialdxnny.com/Assets/Sounds/click.mp3');
    audio.play().catch((error) => {
        console.error('Error playing audio:', error);
    });
}


// section load
document.addEventListener('DOMContentLoaded', function() {
    const sections = document.querySelectorAll('.section-content');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault();
            const sectionId = this.getAttribute('data-section');
            const currentSection = document.getElementById(sectionId);

            sections.forEach(section => {
                if (section !== currentSection) {
                    section.classList.remove('visible');
                }
            });

            currentSection.classList.add('visible');
        });
    });

    // Initially show the About section
    document.querySelectorAll('.nav-link')[0].click();
});

