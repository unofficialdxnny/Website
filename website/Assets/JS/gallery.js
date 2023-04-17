const columns = document.querySelectorAll('.column');

function resizeColumns() {
  columns.forEach(column => {
    const tallestImage = Array.from(column.children).reduce((acc, image) => {
      return image.offsetHeight > acc.offsetHeight ? image : acc;
    });
    column.style.height = tallestImage.offsetHeight + 'px';
  });
}

resizeColumns();
window.addEventListener('resize', resizeColumns);
