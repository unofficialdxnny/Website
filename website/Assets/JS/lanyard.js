const userId = "898937224895270972"; 
const lanyardUrl = `https://api.lanyard.rest/v1/users/${userId}`;
const profilePicture = document.getElementById("profile-picture");
const username = document.getElementById("username");
const profession = document.getElementById("profession");
const years = document.getElementById("years");
const expertise = document.getElementById("expertise");
const hobbies = document.getElementById("hobbies");
const interests = document.getElementById("interests");

fetch(lanyardUrl)
  .then(response => response.json())
  .then(data => {
    // Set profile picture
    profilePicture.src = data.data.discord_user.avatar_url;
    
    // Set username
    username.textContent = data.data.discord_user.username;
    
    // Set profession (replace with your own information)
    profession.textContent = "Web Developer";
    
    // Set years of experience (replace with your own information)
    years.textContent = "5";
    
    // Set area of expertise (replace with your own information)
    expertise.textContent = "Front-End Development";
    
    // Set hobbies (replace with your own information)
    hobbies.textContent = "Coding, Gaming, Watching Movies";
    
    // Set interests (replace with your own information)
    interests.textContent = "Technology, Science, Space";
  })
  .catch(error => console.error(error));