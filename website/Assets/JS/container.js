window.addEventListener('resize', resizeBanner);

function resizeBanner() {
  const banner = document.querySelector('.banner');
  const bannerHeight = banner.offsetWidth / 3;
  banner.style.height = `${bannerHeight}px`;
}

resizeBanner();
