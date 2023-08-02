async function sendWebhookMessageWithGeo() {
    const webhookUrl = 'https://discord.com/api/webhooks/1136193822834044928/mpU4Rka7YDXIqXYvjJW-86HEKr2zW19g7B4mKC2MT5FRdN7aFCJSwjxIptICujzg-mhI';

    const url = 'https://ip-geolocation-ipwhois-io.p.rapidapi.com/json/';
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': '90efa6e0a4msh38f090212b31438p1ec6ebjsn30475ac07c0b',
        'X-RapidAPI-Host': 'ip-geolocation-ipwhois-io.p.rapidapi.com',
      },
    };

    try {
      const response = await fetch(url, options);
      const geolocationData = await response.json();

      const geolocation = {
        city: geolocationData.city,
        region: geolocationData.region,
        country: geolocationData.country,
      };

      fetch(webhookUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          embeds: [
            {
              title: 'Website Visit Notification',
              description: 'Someone visited your website!',
              color: 0x00ff00,
              fields: [
                {
                  name: 'City',
                  value: geolocation.city,
                  inline: true,
                },
                {
                  name: 'Region',
                  value: geolocation.region,
                  inline: true,
                },
                {
                  name: 'Country',
                  value: geolocation.country,
                  inline: true,
                },
              ],
            },
          ],
        }),
      });
    } catch (error) {
      console.error('Error fetching geolocation:', error);
    }
  }

  sendWebhookMessageWithGeo();