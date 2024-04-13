function extractCssFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.getAll('css');
}

function applyCss(styles) {
    const styleTag = document.getElementById('custom-css');
    styleTag.textContent = styles.join(' ');
}
            // Function to extract Discord user ID from URL
            function getDiscordUserIdFromUrl() {
                const urlParams = new URLSearchParams(window.location.search);
                const userId = urlParams.get('discord_user_id');
                return userId;
            }

            // Function to redirect to home page
            function redirectToHome() {
                window.location.href = "index.html";
            }

            // Function to make API call to Lanyard API
            function fetchLanyardData(userId) {
                const apiUrl = `https://api.lanyard.rest/v1/users/${userId}`;

                fetch(apiUrl)
                    .then(response => {
                        if (!response.ok) {
                            throw new Error('Network response was not ok');
                        }
                        return response.json();
                    })
                    .then(data => {
                        // Handle the data received from the API
                        if (data.success && data.data && data.data.activities) {
                            const spotifyActivity = data.data.activities.find(activity => activity.name === "Spotify");
                            if (spotifyActivity) {
                                const { album, artist, song } = spotifyActivity.state;
                                document.querySelector('.album').innerText = album;
                                document.querySelector('.artist').innerText = artist;
                                document.querySelector('.song').innerText = song;

                                const albumArtUrl = data.data.spotify.album_art_url;
                                const albumArtist = data.data.spotify.artist;
                                const songName = data.data.spotify.song;
                                document.querySelector('.album').src = albumArtUrl;
                                document.querySelector('.artist').textContent = albumArtist;
                                document.querySelector('.song').textContent = songName;
                            } else {
                                console.log("No Spotify activity found");
                            }
                        } else {
                            console.error("Error in Lanyard API response:", data);
                        }
                    })
                    .catch(error => {
                        console.error('There was a problem with the fetch operation:', error);
                    });
            }

            // Example usage
            function fetchLanyardDataEverySecond() {
                const discordUserId = getDiscordUserIdFromUrl();
                if (discordUserId) {
                    fetchLanyardData(discordUserId);
                    // console.clear();
                } else {
                    console.error("Discord user ID not found in the URL");
                    redirectToHome();
                }
            }

            setInterval(fetchLanyardDataEverySecond, 1000);

            // Apply CSS styles from URL
            const cssStyles = extractCssFromUrl();
            if (cssStyles) {
                applyCss(cssStyles);
            }