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
