function sendWebhookMessage() {
    const webhookUrl = 'https://discord.com/api/webhooks/1136193822834044928/mpU4Rka7YDXIqXYvjJW-86HEKr2zW19g7B4mKC2MT5FRdN7aFCJSwjxIptICujzg-mhI';

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        embeds: [{
          title: 'Website Visitor Alert',
          description: 'Someone visited your website!',
          color: 0x87ceeb, // You can change the color to a hexadecimal value
        }],
      }),
    });
}

sendWebhookMessage();
