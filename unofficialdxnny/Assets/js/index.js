// theme

const themeToggle = document.getElementById('toggle-button');

themeToggle.addEventListener('click', function () {
    const body = document.body;
    body.classList.toggle('dark');
    const sunIcon = document.querySelector('.sun-icon');
    const moonIcon = document.querySelector('.moon-icon');

    if (body.classList.contains('dark')) {
        sunIcon.style.display = 'none';
        moonIcon.style.display = 'inline-block';
    } else {
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
    }
});
// Function to fetch Discord status
async function fetchDiscordStatus() {
    try {
        const response = await fetch('https://api.lanyard.rest/v1/users/898937224895270972');

        // Check if response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse response to JSON
        const data = await response.json();

        // Log the entire data object to the console for inspection
        console.log('API Response:', data);

        // Ensure discord_status is present in the data object
        const discordStatus = data.data.discord_status;
        console.log('Discord Status:', discordStatus);

        // Get the element to display the status
        const discordStatusElement = document.getElementById('discord-status');

        // Display appropriate message based on discord status
        switch (discordStatus) {
            case 'online':
                discordStatusElement.textContent = "Hey, I'm currently online.";
                break;
            case 'dnd':
                discordStatusElement.textContent = "Hey, I'm currently in 'Do Not Disturb' mode.";
                break;
            case 'idle':
                discordStatusElement.textContent = "Hey, I'm currently idle.";
                break;
            case 'afk':
                discordStatusElement.textContent = "Hey, I'm currently AFK.";
                break;
            default:
                discordStatusElement.textContent = "Hey, I'm currently offline.";
        }
    } catch (error) {
        // Log any errors to console
        console.error('Error fetching Discord status:', error);

        // Display error message on the webpage
        const discordStatusElement = document.getElementById('discord-status');
        discordStatusElement.textContent = "Failed to fetch Discord status";
    }
}

// Call the function to fetch Discord status when the page loads
fetchDiscordStatus();
