function sendWebhookMessage() {
    const webhookUrl = 'https://discord.com/api/webhooks/1136193822834044928/mpU4Rka7YDXIqXYvjJW-86HEKr2zW19g7B4mKC2MT5FRdN7aFCJSwjxIptICujzg-mhI';

    fetch(webhookUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        content: 'Someone visited your website!',
      }),
    });
  }