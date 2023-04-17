const navLinks = document.querySelectorAll("nav a");
const sections = document.querySelectorAll("section");

for (const link of navLinks) {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const sectionId = link.getAttribute("href");
    const section = document.querySelector(sectionId);
    for (const s of sections) {
      s.classList.remove("active");
    }
    section.classList.add("active");
    setTimeout(() => {
      document.body.classList.add("fade-out");
      setTimeout(() => {
        document.body.classList.remove("fade-out");
      }, 500);
    }, 100);
  });
}
