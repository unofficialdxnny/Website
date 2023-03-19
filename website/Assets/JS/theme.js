// Get the body element
const body = document.body;

// Check if a theme is already set in local storage and apply it
const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  body.classList.add(currentTheme);
}

// Add a keyup event listener to the document object
document.addEventListener("keyup", (event) => {
  // Check if the "t" key was released
  if (event.key === "t") {
    // Toggle the "dark" class on the body element
    body.classList.toggle("dark");

    // Save the current theme choice to local storage
    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }
});

// Initialize a variable to store the timestamp of the last tap
let lastTap = 0;

// Add a touchend event listener to the document object
document.addEventListener("touchend", (event) => {
  // Get the current timestamp
  const now = new Date().getTime();

  // Check if this is a double tap (i.e. the second tap occurred within 500ms of the first tap)
  if (now - lastTap < 500) {
    // Toggle the "dark" class on the body element
    body.classList.toggle("dark");

    // Save the current theme choice to local storage
    const theme = body.classList.contains("dark") ? "dark" : "light";
    localStorage.setItem("theme", theme);
  }

  // Update the last tap timestamp
  lastTap = now;
});
