const projectsData = [
    {
        image: 'https://unofficialdxnny.com/Assets/Images/Snapify.png',
        title: 'Snapify',
        description: 'Got No Friends??? Just boost your snapscore for free!!!',
        githubLink: 'https://github.com/unofficialdxnny/Snapify',
    },
    {
        image: 'https://cdn.discordapp.com/attachments/1073929980343496815/1186328819439775805/vLkBOK4.png?ex=6592d9cf&is=658064cf&hm=208241097069cbb778787aa8d4f3ab0ed038956f478f265efafa14ceed7ac347&',
        title: 'Monkey Typer',
        description: 'Get Maximum score saved to your account. You can increase the typing speed but after the default timer is exceeded it will detect the bot.',
        githubLink: 'https://github.com/unofficialdxnny/monkeyTyper',
    },
    {
        image: 'https://unofficialdxnny.com/Assets/Images/coffeemax.png',
        title: 'The Coffeemax',
        description: 'Website for Coffeemax cafe which is located in Farnham, UK',
        githubLink: 'https://thecoffeemax.com',
    }
    // Add more projects as needed
];

// Function to dynamically load cards
function loadCards() {
    const projectsContainer = document.getElementById('projects');

    projectsData.forEach(project => {
        const card = document.createElement('div');
        card.classList.add('card');

        const image = document.createElement('img');
        image.src = project.image;

        const title = document.createElement('div');
        title.classList.add('card-title');
        title.textContent = project.title;

        const description = document.createElement('div');
        description.classList.add('card-description');
        description.textContent = project.description;

        const githubIcon = document.createElement('i');
        githubIcon.classList.add('fab', 'fa-github', 'github-icon');

        const githubLink = document.createElement('a');
        githubLink.href = project.githubLink;
        githubLink.appendChild(githubIcon);

        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(image);
        card.appendChild(title);
        card.appendChild(description);
        card.appendChild(githubLink);

        projectsContainer.appendChild(card);
    });
}

// Load cards when the page is fully loaded
document.addEventListener('DOMContentLoaded', loadCards);