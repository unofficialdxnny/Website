//  If localstorage theme key is empty or nonexistent than change theme to light mode
 
if (localStorage.getItem("theme") == null) {
    
   localStorage.setItem("theme", "light")
   document.body.style.backgroundColor = "Mine Shaft"

 } else if (localStorage.getItem("theme") == "dark") {

   document.body.style.backgroundColor = "Alto"
 } else if (localStorage.getItem("theme") == "light") {

   document.body.style.backgroundColor = "Mine Shaft"

 }
 
 
 
 
 if (document.addEventListener("keyup", e => {
   if (e.key.toLowerCase() == 't') {
      
      if (localStorage.getItem("theme") == "light") {
         localStorage.clear()
         localStorage.setItem("theme", "dark")
         var element = document.body;
         element.classList.toggle("dark-mode");

      } else if (localStorage.getItem("theme") == "dark") {
         localStorage.clear()
         localStorage.setItem("theme", "light")
         var element = document.body;
         element.classList.toggle("dark-mode");

      }
      
      
          
          }
         }));

