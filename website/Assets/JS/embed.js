   function sendEmbed() {
        const title = document.getElementById("title").value;
        const content = document.getElementById("content").value;
        const image = document.getElementById("image").value;
        const webhook = document.getElementById("webhook").value;

        const embed = {
          "title": title,
          "description": content,
          "image": {"url": image}
        };
        const payload = {"embeds": [embed]};

        fetch(webhook, {
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(payload)
        })
        .then(response => response.json())
        .then(data => {
          const result = document.getElementById("result-content");
          result.textContent = JSON.stringify(data, null, 2);
        })
        .catch(error => {
          const result = document.getElementById("result-content");
          result.textContent = "Error: " + error.message;
        });
      }