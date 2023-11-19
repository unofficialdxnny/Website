// Theme Toggle Button
document.addEventListener('keyup', function (event) {
    if (event.key === 'T' || event.key === 't') {
        // Add fade class to trigger fade in and out
        document.body.classList.add('fade-theme');
        
        // Toggle between light and dark modes after a delay
        setTimeout(toggleTheme, 500); // Adjust the delay as needed
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

    // Add fade class to trigger fade in and out
    body.classList.add('fade-theme');
    
    // Remove the fade class after the animation duration (1000ms in this example)
    setTimeout(() => {
        body.classList.remove('fade-theme');
    }, 1000);
}

function enableLightMode() {
    const body = document.body;

    // Remove dark mode class
    body.classList.remove('dark-theme');

    // Save theme preference in local storage
    localStorage.setItem('theme', 'light');

    // Add fade class to trigger fade in and out
    body.classList.add('fade-theme');
    
    // Remove the fade class after the animation duration (1000ms in this example)
    setTimeout(() => {
        body.classList.remove('fade-theme');
    }, 1000);
}
