const links = document.querySelectorAll(".fade-out-link");
const overlay = document.querySelector(".fade-overlay");

links.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    overlay.classList.add("active");
    setTimeout(() => {
      window.location.href = link.href;
    }, 500); // Wait for the transition to complete before navigating
  });
});
