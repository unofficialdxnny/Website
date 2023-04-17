const egg = document.querySelector('.easter-egg');
egg.addEventListener('click', () => {
  egg.style.animation = 'none';
  egg.offsetHeight;
  egg.style.animation = null;
});
