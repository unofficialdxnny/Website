// Send a request to the server to get the user count
fetch('/user-count')
  .then(response => response.text())
  .then(count => {
    // Update the user count in the container
    const userCountContainer = document.getElementById('user-count');
    userCountContainer.textContent = `There are ${count} users online right now.`;
  })
  .catch(error => console.error(error));


  app.get('/user-count', (req, res) => {
    // Get the user count from your database or any other source
    const userCount = getUsersCount();
    
    // Return the user count as a plain text response
    res.set('Content-Type', 'text/plain');
    res.send(`${userCount}`);
  });
  