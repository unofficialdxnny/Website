# Lanyard-Spotify-Now-Playing

This project lets users display their current Spotify listening activity on a webpage and customize its appearance using CSS.

----

## Features
- Fetches current Spotify listening status from a Discord user (connected via the Lanyard API).
- Displays the song, artist, and album art.
- Allows for personalized styling through a CSS input field.

## Getting Started
## Prerequisites

- Discord Account
- [Join Lanyard Discord Server](discord.gg/lanyard)
- Your Discord User ID
- NodeJS and Express (For Private and Testing Purposes)

## Setup

- [Download This Repository](https://github.com/unofficialdxnny/Lanyard-Spotify-Now-Playing/archive/refs/heads/main.zip)
- Alternatively Clone This Repository `git clone https://github.com/unofficialdxnny/Lanyard-Spotify-Now-Playing.git`
- `cd Lanyard-Spotify-Now-Playing`
- `node server.js`
- Open `127.0.0.1:3000`

## Usage
- Open `index.html` in your web browser.
- Optionally, customize the appearance by entering your CSS code in the "Enter - Your CSS..." text box.
- Click "Submit" to see your Spotify listening activity, styled with your CSS if provided.

## Advanced Usage

- `discord_user_id:` The user's Discord ID.
- `css:` URL-encoded CSS code to directly apply styles. This skips the input field on the index.html.

## Examples
### 1. Modern

<img src="https://imgur.com/z9zQaGj.png">

```
.spotify{background-color:#181818;color:white;display:flex;flex-direction:column;align-items:flex-start;padding:25px;border-radius:10px;box-shadow:0px 5px 15px rgba(0, 0, 0, 0.4);} .spotify img.album{width:70px;height:70px;margin-bottom:15px;border-radius:5px;box-shadow:0px 2px 5px rgba(0, 0, 0, 0.2);} .spotify .artist{font-weight:bold;font-size:18px;margin-bottom:5px;} .spotify .song{font-size:14px;color:#b3b3b3;} .spotify:hover{background-color:#282828;cursor:pointer;}
```

### 2. Retro Neon Vibe
<img src="https://imgur.com/AHNWVLZ.png">

```
.spotify{background-color:#121212;color:#f0f8ff;padding:30px;border-radius:10px;box-shadow:0 5px 15px rgba(255,0,255,0.4),0 5px 15px rgba(0,255,255,0.4);} .album{border:3px solid #ff00ff;} .artist{font-family:'Courier New',monospace;font-weight:bold;}
```

### 3. Minimalist Elegance

<img src="https://imgur.com/uL4gHxE.png">

```
.spotify{background-color:#f7f7f7;color:#333;padding:25px;border-radius:8px;box-shadow:0 4px 8px rgba(0,0,0,0.1);} .album{max-width:200px;margin:0 auto 15px auto;} .artist,.song{font-family:'Arial',sans-serif;}
```

### 4. Lo-fi / Vaporwave

<img src="https://imgur.com/liUavG6.png">

```
.spotify{background:linear-gradient(45deg,#ff99cc,#99ccff);padding:30px;border-radius:15px;} .album{box-shadow:0 5px 10px rgba(0,0,0,0.5);} .artist,.song{font-family:'Arial Black',sans-serif;color:#fff;text-shadow:2px 2px 5px rgba(0,0,0,0.4);}
```

## Contributing
Contributions are welcome! Feel free to open issues or submit pull requests with improvements.

## License
This project is licensed under the Apache License: [LICENSE](https://github.com/unofficialdxnny/Lanyard-Spotify-Now-Playing/blob/main/LICENSE)

