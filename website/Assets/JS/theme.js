// Get the theme toggle button and body element
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Check if a theme is already set in local storage and apply it
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
}

// Add a click event listener to the theme toggle button
themeToggle.addEventListener("click", () => {
  // Toggle the "dark" class on the body element
  body.classList.toggle("dark");
  
  // Save the current theme choice to local storage
  const theme = body.classList.contains("dark") ? "dark" : "light";
  localStorage.setItem("theme", theme);
});
