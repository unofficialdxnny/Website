// dark theme
function toggleTheme() {
    const body = document.body;
    body.classList.toggle("dark-theme");
}

// theme-toggle.js

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

function toggleTheme() {
    const body = document.body;
    
    // Toggle between light and dark modes
    if (body.classList.contains('dark-theme')) {
        enableLightMode();
    } else {
        enableDarkMode();
    }
}

function enableDarkMode() {
    const body = document.body;

    // Add dark mode class
    body.classList.add('dark-theme');

    // Save theme preference in local storage
    localStorage.setItem('theme', 'dark');
}

function enableLightMode() {
    const body = document.body;

    // Remove dark mode class
    body.classList.remove('dark-theme');

    // Save theme preference in local storage
    localStorage.setItem('theme', 'light');
}
