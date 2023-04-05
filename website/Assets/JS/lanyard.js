async function fetchData() {
    const res = await fetch('https://api.lanyard.rest/v1/users/898937224895270972');
    const data = await res.json();
    return data;
  }
  
  async function renderData() {
    const data = await fetchData();
    const profilePic = document.getElementById('profile-pic');
    const status = document.getElementById('status');
    
    profilePic.src = `https://cdn.discordapp.com/avatars/${data.discord_user.id}/${data.discord_user.avatar}.png`;
    
    if (data.discord_status === 'online') {
      status.style.backgroundColor = '#43b581';
    } else {
      status.style.backgroundColor = '#747f8d';
    }
  }
  
  renderData();
  