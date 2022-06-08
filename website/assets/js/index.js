function colorate(message, color) {

  color = color || "black";

  switch (color) {
      case "success":  
           color = "Green"; 
           break;
      case "info":     
              color = "DodgerBlue";  
           break;
      case "error":   
           color = "Red";     
           break;
      case "warning":  
           color = "Orange";   
           break;
      default: 
           color = color;
  }

  console.log("%c" + message, "color:" + color);
}

colorate('unofficialdxnny Website - Remaking since 07/06/2022 04:00', "info")
// updates / changelog for my site :)
fetch('/assets/update.txt')
  .then(response => response.text())
  .then(data => {
  	
  	colorate(data, "info")
  });

const custom = {
     command() {
        console.log("This is my custom command.");
    },
}; 