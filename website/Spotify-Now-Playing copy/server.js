const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; // Use port 3000 by default

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'Spotify-Now-Playing')));

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
