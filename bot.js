const { Client, Intents } = require('discord.js');

// Replace 'YOUR_BOT_TOKEN' with the actual token of your bot
const client = new Client({ intents: [Intents.FLAGS.GUILDS, Intents.FLAGS.GUILD_MESSAGES] });
const channelId = 'YOUR_CHANNEL_ID'; // Replace with the ID of the channel where you want the messages to be sent

client.once('ready', () => {
  console.log('Bot is online!');
});

// Function to send a message to the specified channel
function sendMessageToChannel(message) {
  const channel = client.channels.cache.get(channelId);
  if (channel && channel.isText()) {
    channel.send(message);
  }
}

// Handle incoming requests from your website
// Assuming you have a simple HTTP server listening on port 3000
const http = require('http');
const server = http.createServer((req, res) => {
  // Process the incoming request and send the message to the Discord channel
  sendMessageToChannel(`Someone visited your website!`);
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('OK');
});

// Start the HTTP server
server.listen(3000, () => {
  console.log('Server is listening on port 3000');
});

// Log in to Discord using your bot token
client.login('YOUR_BOT_TOKEN');
