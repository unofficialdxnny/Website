const links = document.querySelectorAll('nav a');

for (let i = 0; i < links.length; i++) {
  links[i].addEventListener('click', (event) => {
    event.preventDefault();

    const targetId = links[i].getAttribute('href');
    const targetPosition = document.querySelector(targetId).offsetTop;

    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
}
