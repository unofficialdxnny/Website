// Optional - Change image on hover
const cards = document.querySelectorAll('.card');

cards.forEach((card) => {
  const img = card.querySelector('img');
  const imgUrl = img.src;

  card.addEventListener('mouseenter', () => {
    img.src = 'https://picsum.photos/id/240/200/300';
  });

  card.addEventListener('mouseleave', () => {
    img.src = imgUrl;
  });
});
