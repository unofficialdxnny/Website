document.addEventListener('DOMContentLoaded', () => {
    const modeIcon = document.getElementById('mode-icon');

    // Function to toggle between light and dark mode
    function toggleMode() {
        document.body.classList.toggle('dark-mode');
        document.body.classList.toggle('light-mode');

        // Update the icon based on the current mode
        if (document.body.classList.contains('dark-mode')) {
            modeIcon.textContent = 'dark_mode';
        } else {
            modeIcon.textContent = 'light_mode';
        }
    }

    // Set the initial mode based on the time of day or user preference
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        document.body.classList.add('dark-mode');
        modeIcon.textContent = 'dark_mode';
    } else {
        document.body.classList.add('light-mode');
        modeIcon.textContent = 'light_mode';
    }

    // Add event listener to the icon to toggle the mode
    modeIcon.addEventListener('click', toggleMode);
});
