function showAbout() {
  hideAllContent();
  document.getElementById("aboutContent").classList.add("show");
}

function showgpv() {
  hideAllContent();
  document.getElementById("GamepadContent").classList.add("show");
  showCategory("all");
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
    url: "https://unofficialdxnny.com/gamepad/galactic",
    category: "ds3",
  },
  {
    imageUrl: "./Assets/Images/st.png",
    name: "Stranger Things",
    date: "01/03/2021",
    url: "https://unofficialdxnny.com/gamepad/strangerthings",
    category: "ds4",
  },
  {
    imageUrl: "./Assets/Images/camo.png",
    name: "Camo",
    date: "22/07/23",
    url: "https://unofficialdxnny.com/gamepad/camo",
    category: "ds4",
  },
  {
    imageUrl: "./Assets/Images/ds4whitee.png",
    name: "DS4 White",
    date: "24/07/23",
    url: "https://unofficialdxnny.com/gamepad/ds4white",
    category: "ds4",
  },
  {
    imageUrl: "./Assets/Images/mmd.png",
    name: "Miles Morales Dark",
    date: "22/07/2023",
    url: "https://unofficialdxnny.com/gamepad/milesmoralesd",
    category: "ds5",
  },
  {
    imageUrl: "./Assets/Images/mmw.png",
    name: "Miles Morales Light",
    date: "22/07/2023",
    url: "https://unofficialdxnny.com/gamepad/milesmoralesl",
    category: "ds5",
  },
  {
    imageUrl: "./Assets/Images/fxb1.png",
    name: "Feather",
    date: "20/07/2023",
    url: "https://unofficialdxnny.com/gamepad/feather",
    category: "xb1",
  },
  {
    imageUrl: "./Assets/Images/destiny.png",
    name: "Destiny 2",
    date: "07/08/2023",
    url: "https://unofficialdxnny.com/gamepad/destiny",
    category: "ds5",
  },
  {
    imageUrl: "./Assets/Images/banksyxb1.png",
    name: "Banksy",
    date: "08/08/2023",
    url: "https://unofficialdxnny.com/gamepad/banksy",
    category: "xb1",
  },
  {
    imageUrl: "./Assets/Images/isla.png",
    name: "Custom Controller For Isla",
    date: "07/08/2023",
    url: "https://unofficialdxnny.com/gamepad/isla",
    category: "ds4",
  },
  {
    imageUrl: "https://cdn.discordapp.com/attachments/1140408481871036526/1140424529206853633/image.png",
    name: "Custom navyblue controller for M...",
    date: "14/08/2023",
    url: "https://unofficialdxnny.com/gamepad/navyblue",
    category: "ds4",
  },
  {
    imageUrl: "https://media.discordapp.net/attachments/1142287652272492585/1142511470689648700/image.png?width=644&height=363",
    name: "Hamiko Toga",
    date: "19/08/2023",
    url: "https://unofficialdxnny.com/gamepad/HamikoToga",
    category: "ds5",
  },
  {
    imageUrl: "https://unofficialdxnny.com/Assets/Images/LJames.png",
    name: "Lebron James",
    date: "27/08/2023",
    url: "https://unofficialdxnny.com/gamepad/LJames",
    category: "ds5",
  },
  {
    imageUrl: "https://unofficialdxnny.com/Assets/Images/Camie.png",
    name: "Camie ",
    date: "21/08/2023",
    url: "https://unofficialdxnny.com/gamepad/camie",
    category: "ds5",
  },

];

// Function to dynamically generate the content for Gamepad items
function showCategory(category) {
  const gamepadGallery = document.getElementById("gamepadGallery");

  // Clear the existing content
  gamepadGallery.innerHTML = "";

  // Loop through the gamepadItems array and filter items based on the category
  gamepadItems.forEach((item) => {
    if (category === "all" || item.category === category) {
      const itemHtml = `
        <div class="image">
          <a target="_blank" href="${item.url}">
            <img src="${item.imageUrl}" />
          </a>
          <p style="text-align: center; font-size: 10px;">${item.name} (${item.date})</p>
        </div>
      `;

      // Append the itemHtml to the gallery container
      gamepadGallery.innerHTML += itemHtml;
    }
  });
}


function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

shuffleArray(gamepadItems)
showCategory("all");


setInterval(function () {
  var myImageElement = document.getElementById("Spotify-now-playing");
  myImageElement.src =
    "https://spotify-github-profile.vercel.app/api/view?uid=ahmeddanial&cover_image=true&theme=novatorem&show_offline=false&background_color=121212&interchange=false&bar_color=53b14f&bar_color_cover=false" +
    Math.random();
}, 3000);