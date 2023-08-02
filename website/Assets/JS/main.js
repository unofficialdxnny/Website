function showAbout() {
  hideAllContent();
  document.getElementById("aboutContent").classList.add("show");
}

function showgpv() {
  hideAllContent();
  document.getElementById("GamepadContent").classList.add("show");
  loadGamepadItems(); // Call the function to load Gamepad items dynamically
}

function showBanners() {
  hideAllContent();
  document.getElementById("BannersContent").classList.add("show");
}

function hideAllContent() {
  const contents = document.getElementsByClassName("content");
  for (let i = 0; i < contents.length; i++) {
    contents[i].classList.remove("show");
  }
}

// Initialize the page by showing the 'About' section by default
showAbout();

// Data for dynamic Gamepad items
const gamepadItems = [
  {
    imageUrl: "./Assets/Images/galactic.png",
    name: "Galactic",
    date: "01/08/2023",
  },
  {
    imageUrl: "./Assets/Images/st.png",
    name: "Stranger Things",
    date: "01/03/2021",
  },
  {
    imageUrl: "./Assets/Images/camo.png",
    name: "Camo",
    date: "22/07/23",
  },
  {
    imageUrl: "./Assets/Images/ds4whitee.png",
    name: "DS4 White",
    date: "24/07/23",
  },
  {
    imageUrl: "./Assets/Images/mmd.png",
    name: "Miles Morales Dark",
    date: "22/07/2023",
  },
  {
    imageUrl: "./Assets/Images/mmw.png",
    name: "Miles Morales Light",
    date: "22/07/2023",
  },
  {
    imageUrl: "./Assets/Images/fxb1.png",
    name: "Feather",
    date: "20/07/2023",
  },

];

// Function to dynamically generate the content for Gamepad items
function loadGamepadItems() {
  const gamepadGallery = document.getElementById("gamepadGallery");

  // Clear the existing content
  gamepadGallery.innerHTML = "";

  // Loop through the gamepadItems array and generate HTML for each item
  gamepadItems.forEach((item) => {
    const itemHtml = `
      <div class="image">
        <a target="_blank" href="#">
          <img src="${item.imageUrl}" />
        </a>
        <p style="text-align: center; font-size: 10px;">${item.name} (${item.date})</p>
      </div>
    `;

    // Append the itemHtml to the gallery container
    gamepadGallery.innerHTML += itemHtml;
  });
}

setInterval(function () {
  var myImageElement = document.getElementById("Spotify-now-playing");
  myImageElement.src =
    "https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false" +
    Math.random();
}, 3000);