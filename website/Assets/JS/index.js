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
        link.addEventListener('click', function (event) {
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

document.addEventListener('DOMContentLoaded', function () {
    let currentImageUrl = '';

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
                const aboutSection = document.querySelector('.section-content#about');

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
                        colorCode = '66b3ff';
                        circleColor = 'gray';
                        break;
                    default:
                        colorCode = '000000';
                        circleColor = 'black';
                }

                const newSrc = imageElement.src.replace(/bar_color=[^&]+/, `bar_color=${colorCode}`);
                if (imageElement.src !== newSrc) {
                    imageElement.src = newSrc;
                }

                statusCircles.forEach(circle => {
                    circle.style.backgroundColor = circleColor;
                });

                const textColor = window.getComputedStyle(aboutSection).color;
                aboutSection.style.color = textColor;
                socialIcons.forEach(icon => {
                    icon.querySelector('i').style.color = textColor;
                });

                if (data.data.listening_to_spotify) {
                    const spotifyTrack = data.data.spotify;
                    if (spotifyTrack && spotifyTrack.album_art_url) {
                        if (currentImageUrl !== spotifyTrack.album_art_url) {
                            currentImageUrl = spotifyTrack.album_art_url;
                            fadeBackgroundImage(backgroundAbout, currentImageUrl);
                            setDynamicTextColor(currentImageUrl);
                        }
                    }
                } else {
                    if (currentImageUrl !== '') {
                        currentImageUrl = '';
                        fadeBackgroundImage(backgroundAbout, '');
                    }
                    resetTextColorToDefault();
                }
            } else {
                console.error('Error fetching Discord status:', data);
            }
        } catch (error) {
            console.error('Error fetching Discord status:', error);
        }
    }

    function fadeBackgroundImage(element, imageUrl) {
        element.classList.add('fade-out');
        setTimeout(() => {
            element.style.backgroundImage = imageUrl ? `url(${imageUrl})` : '';
            element.classList.remove('fade-out');
        }, 1000); // Match this duration with the CSS transition time
    }

    function setDynamicTextColor(imageUrl) {
        const canvas = document.getElementById('bgCanvas');
        const ctx = canvas.getContext('2d');
        const img = new Image();
        img.crossOrigin = 'Anonymous';
        img.src = imageUrl;

        img.onload = function () {
            canvas.width = img.width;
            canvas.height = img.height;
            ctx.drawImage(img, img.width * 0.25, img.height * 0.25, img.width * 0.5, img.height * 0.5, 0, 0, canvas.width, canvas.height);
            const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height).data;

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
            let textColor = brightness > 125 ? 'black' : 'white';

            // Ensure colors are not too dull
            if (textColor === 'black' && brightness > 80 && brightness < 125) {
                textColor = 'white';
            } else if (textColor === 'white' && brightness < 150 && brightness > 125) {
                textColor = 'black';
            }

            const aboutSection = document.querySelector('.section-content#about');
            if (isElementInViewport(aboutSection)) {
                aboutSection.style.color = textColor;
                aboutSection.querySelectorAll('p').forEach(element => {
                    element.style.color = textColor;
                });

                const socialIcons = document.querySelectorAll('.social-icons a');
                socialIcons.forEach(icon => {
                    icon.querySelector('i').style.color = textColor;
                });
            } else {
                resetSocialIconColorToDefault();
            }
        };
    }

    function resetTextColorToDefault() {
        const aboutSection = document.querySelector('.section-content#about');
        aboutSection.style.color = 'white';
        aboutSection.querySelectorAll('p').forEach(element => {
            element.style.color = 'white';
        });
        resetSocialIconColorToDefault();
    }

    function resetSocialIconColorToDefault() {
        const socialIcons = document.querySelectorAll('.social-icons a');
        socialIcons.forEach(icon => {
            icon.querySelector('i').style.color = 'white';
        });
    }

    function isElementInViewport(el) {
        const rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function checkSectionVisibility() {
        const aboutSection = document.querySelector('.section-content#about');
        if (!isElementInViewport(aboutSection)) {
            resetSocialIconColorToDefault();
        }
    }

    window.addEventListener('scroll', checkSectionVisibility);
    window.addEventListener('resize', checkSectionVisibility);

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
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('.section-content');

    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function (event) {
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


// contact form
document.addEventListener('DOMContentLoaded', function () {
    // Placeholder strings
    const placeholderStrings = [
        "Can you please make me a controller overlay?",
        "I need help with setting up OBS.",
        "Could you design a logo for my channel?",
        "I'm interested in your services. Can we discuss further?"
    ];

    // Function to animate placeholder typing
    function animatePlaceholderTyping(element, strings, interval) {
        let index = 0;
        let textIndex = 0;
        let currentText = '';
        const placeholderLength = strings[index].length;

        setInterval(() => {
            if (textIndex < placeholderLength) {
                currentText += strings[index].charAt(textIndex);
                element.setAttribute("placeholder", currentText);
                textIndex++;
            } else {
                setTimeout(() => {
                    currentText = '';
                    textIndex = 0;
                    index = (index + 1) % strings.length;
                    placeholderLength = strings[index].length;
                }, interval);
            }
        }, interval);
    }

    // Select the message textarea
    const messageTextarea = document.getElementById('message');

    // Start the placeholder typing animation
    animatePlaceholderTyping(messageTextarea, placeholderStrings, 100); // Typing speed: 100 milliseconds per character


    // Wrap your existing code inside this function
    function initializeFormHandling() {
        // Cooldown duration in milliseconds (5 minutes)
        const cooldownDuration = 5 * 60 * 1000;

        // Object to store last message timestamps for each client
        const lastMessageTimestamps = {};

        document.getElementById('discordForm').addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent the form from submitting normally

            const nameField = document.querySelector('#discordForm #name');
            console.log(nameField); // Check if the element is selected correctly
            const name = nameField.value;
            console.log(name); // Check if the value is retrieved correctly

            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            const currentTime = Date.now();
            const lastMessageTime = lastMessageTimestamps[email] || 0;

            if (currentTime - lastMessageTime < cooldownDuration) {
                const remainingTime = Math.ceil((cooldownDuration - (currentTime - lastMessageTime)) / 1000);
                alert(`Please wait ${remainingTime} seconds before sending another message.`);
                return;
            }

            sendMessageToDiscord(name, email, message);
            lastMessageTimestamps[email] = currentTime;
        });

        function sendMessageToDiscord(name, email, message) {
            // Your webhook URL
            const webhookURL = 'https://discord.com/api/webhooks/1244852519302336572/hIM76wzmJcBQEnzEQSwIG7sbqvpMmFsp4Eq4px3f1F4zejbVM3Tf0vVDfwWa9oW_pbpx';

            const payload = {
                embeds: [{
                    title: 'New Contact Message from unofficialdxnny.com',
                    description: `**Name/Username:** ${name}\n**Contact Email:** ${email}\n**Message:** ${message}`,
                    color: 0x007bff, // Blue color
                    timestamp: new Date().toISOString()
                }]
            };

            fetch(webhookURL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(payload)
            })
                .then(response => {
                    if (!response.ok) {
                        throw new Error('Failed to send message to Discord.');
                    }
                    alert('Message sent successfully!');
                    document.getElementById('name').value = '';
                    document.getElementById('email').value = '';
                    document.getElementById('message').value = ''; // Clear the input fields
                })
                .catch(error => {
                    alert('Error: ' + error.message);
                });
        }
    }

    initializeFormHandling(); // Call the function to initialize form handling
});


// web visit 

// Function to send visit notification
function sendVisitNotification() {
    const webhookURL = 'https://discord.com/api/webhooks/1255738957493440512/RCKQ_HEBIYr_FkiJOjBymVptzJZELiioElOLEtNvsVWhMOx_msEi8ZDmZ3zNe5bM9kLb';

    const fetch = require('node-fetch');

    function sendVisitNotification() {
        // Your webhook URL
        const webhookURL = 'https://discord.com/api/webhooks/1255738957493440512/RCKQ_HEBIYr_FkiJOjBymVptzJZELiioElOLEtNvsVWhMOx_msEi8ZDmZ3zNe5bM9kLb';

        // Array of locations
        const locations = [
            // USA
            'New York, USA',
            'Los Angeles, USA',
            'Chicago, USA',
            'Houston, USA',
            'Philadelphia, USA',
            'Phoenix, USA',
            'San Antonio, USA',
            'San Diego, USA',
            'Dallas, USA',
            'San Jose, USA',
            'Austin, USA',
            'Jacksonville, USA',
            'Indianapolis, USA',
            'San Francisco, USA',
            'Columbus, USA',
            'Fort Worth, USA',
            'Charlotte, USA',
            'Seattle, USA',
            'Denver, USA',
            'Washington, D.C., USA',
            'Boston, USA',
            'Nashville, USA',
            'Baltimore, USA',
            'Oklahoma City, USA',
            'Louisville, USA',
            'Portland, USA',
            'Las Vegas, USA',
            'Milwaukee, USA',
            'Albuquerque, USA',
            'Tucson, USA',
            'Fresno, USA',
            'Sacramento, USA',
            'Long Beach, USA',
            'Kansas City, USA',
            'Mesa, USA',
            'Atlanta, USA',
            'Virginia Beach, USA',
            'Omaha, USA',
            'Colorado Springs, USA',
            'Raleigh, USA',
            'Miami, USA',
            'Oakland, USA',
            'Minneapolis, USA',
            'Tulsa, USA',
            'Cleveland, USA',
            'Wichita, USA',
            'Arlington, USA',
            'New Orleans, USA',
            'Bakersfield, USA',
            'Tampa, USA',
            'Honolulu, USA',
            'Anaheim, USA',
            'Aurora, USA',
            'Santa Ana, USA',
            'St. Louis, USA',
            'Riverside, USA',
            'Corpus Christi, USA',
            'Pittsburgh, USA',
            'Lexington, USA',
            'Anchorage, USA',
            'Stockton, USA',
            'Cincinnati, USA',
            'St. Paul, USA',
            'Toledo, USA',
            'Newark, USA',
            'Greensboro, USA',
            'Plano, USA',
            'Henderson, USA',
            'Lincoln, USA',
            'Buffalo, USA',
            'Fort Wayne, USA',
            'Jersey City, USA',
            'Chula Vista, USA',
            'Orlando, USA',
            'St. Petersburg, USA',
            'Norfolk, USA',
            'Chandler, USA',
            'Laredo, USA',
            'Madison, USA',
            'Durham, USA',
            'Lubbock, USA',
            'Winston-Salem, USA',
            'Garland, USA',
            'Glendale, USA',
            'Hialeah, USA',
            'Reno, USA',
            'Baton Rouge, USA',
            'Irvine, USA',
            'Chesapeake, USA',
            'Irving, USA',
            'Scottsdale, USA',
            'North Las Vegas, USA',
            'Fremont, USA',
            'Gilbert, USA',
            'San Bernardino, USA',
            'Boise, USA',
            'Birmingham, USA',
            'Rochester, USA',
            'Richmond, USA',
            'Spokane, USA',
            'Des Moines, USA',
            'Montgomery, USA',
            'Modesto, USA',
            'Fayetteville, USA',
            'Tacoma, USA',
            'Shreveport, USA',
            'Fontana, USA',
            'Oxnard, USA',
            'Aurora, USA',
            'Moreno Valley, USA',
            'Akron, USA',
            'Yonkers, USA',
            'Huntington Beach, USA',
            'Glendale, USA',

            // United Kingdom
            'London, UK',
            'Manchester, UK',
            'Birmingham, UK',
            'Glasgow, UK',
            'Liverpool, UK',
            'Edinburgh, UK',
            'Bristol, UK',
            'Leeds, UK',
            'Sheffield, UK',
            'Newcastle upon Tyne, UK',

            // Pakistan
            'Karachi, Pakistan',
            'Lahore, Pakistan',
            'Faisalabad, Pakistan',
            'Rawalpindi, Pakistan',
            'Multan, Pakistan',
            'Islamabad, Pakistan',
            'Gujranwala, Pakistan',
            'Peshawar, Pakistan',
            'Quetta, Pakistan',
            'Sialkot, Pakistan',

            // Russia
            'Moscow, Russia',
            'Saint Petersburg, Russia',
            'Novosibirsk, Russia',
            'Yekaterinburg, Russia',
            'Nizhny Novgorod, Russia',
            'Kazan, Russia',
            'Chelyabinsk, Russia',
            'Omsk, Russia',
            'Samara, Russia',
            'Rostov-on-Don, Russia',
            'Ufa, Russia',
            'Krasnoyarsk, Russia',
            'Perm, Russia',
            'Voronezh, Russia',
            'Volgograd, Russia',

            // Germany
            'Berlin, Germany',
            'Hamburg, Germany',
            'Munich, Germany',
            'Cologne, Germany',
            'Frankfurt, Germany',
            'Stuttgart, Germany',
            'Düsseldorf, Germany',
            'Dortmund, Germany',
            'Essen, Germany',
            'Leipzig, Germany',
            'Bremen, Germany',
            'Dresden, Germany',
            'Hanover, Germany',
            'Nuremberg, Germany',
            'Duisburg, Germany',
            'Bochum, Germany',
            'Wuppertal, Germany',
            'Bielefeld, Germany',
            'Bonn, Germany',
            'Münster, Germany',
            'Karlsruhe, Germany',
            'Mannheim, Germany',
            'Augsburg, Germany',
            'Wiesbaden, Germany',
            'Gelsenkirchen, Germany',
            'Mönchengladbach, Germany',
            'Braunschweig, Germany',
            'Chemnitz, Germany',
            'Kiel, Germany',
            'Aachen, Germany',
            'Halle (Saale), Germany',
            'Magdeburg, Germany',
            'Freiburg im Breisgau, Germany',
            'Krefeld, Germany',
            'Lübeck, Germany',
            'Oberhausen, Germany',
            'Erfurt, Germany',
            'Mainz, Germany',
            'Rostock, Germany',
            'Kassel, Germany',
            'Hagen, Germany',
            'Hamm, Germany',
            'Saarbrücken, Germany',
            'Mülheim an der Ruhr, Germany',
            'Potsdam, Germany',
            'Ludwigshafen am Rhein, Germany',
            'Oldenburg, Germany',
            'Leverkusen, Germany',
            'Osnabrück, Germany',
            'Solingen, Germany',
            'Heidelberg, Germany',
            'Herne, Germany',
            'Neuss, Germany',
            'Darmstadt, Germany',
            'Paderborn, Germany',
            'Regensburg, Germany',
            'Ingolstadt, Germany',
            'Würzburg, Germany',
            'Fürth, Germany',
            'Wolfsburg, Germany',
            'Offenbach am Main, Germany',
            'Ulm, Germany',
            'Heilbronn, Germany',
            'Pforzheim, Germany',
            'Göttingen, Germany',
            'Bottrop, Germany',
            'Trier, Germany',
            'Recklinghausen, Germany',
            'Reutlingen, Germany',
            'Bremerhaven, Germany',
            'Koblenz, Germany',
            'Bergisch Gladbach, Germany',
            'Jena, Germany',
            'Erlangen, Germany',
            'Remscheid, Germany',
            'Moers, Germany',
            'Siegen, Germany',
            'Hildesheim, Germany',
            'Salzgitter, Germany',
            'Cottbus, Germany',
            'Gera, Germany',
            'Kaiserslautern, Germany',
            'Schwerin, Germany',
            'Lünen, Germany',
            'Gütersloh, Germany',
            'Iserlohn, Germany',
            'Zwickau, Germany',
            'Düren, Germany',
            'Ratingen, Germany',
            'Esslingen am Neckar, Germany',
            'Flensburg, Germany',
            'Villingen-Schwenningen, Germany',
            'Lüdenscheid, Germany',
            'Mindelheim, Germany',
            'Konstanz, Germany',
            'Hattingen, Germany',


        ];

        const randomIndex = Math.floor(Math.random() * locations.length);
        const randomLocation = locations[randomIndex];

        const payload = {
            embeds: [{
                title: 'Website Visit Notification',
                description: `Someone from ${randomLocation} visited your website [unofficialdxnny.com](https://unofficialdxnny.com)`,
                color: 0x007bff,
                timestamp: new Date().toISOString()
            }]
        };

        fetch(webhookURL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(payload)
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to send message to Discord.');
                }
                console.log('Visit notification sent successfully!');
            })
            .catch(error => {
                console.error('Error:', error.message);
            });
    }
}

// Example of how to call the function
sendVisitNotification();
