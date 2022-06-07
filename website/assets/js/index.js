// updates / changelog for my site :)
fetch('/assets/update.txt')
  .then(response => response.text())
  .then(data => {
  	
  	console.log(data);
  });