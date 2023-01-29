

if (localStorage.getItem("theme") == null) {
   
   localStorage.setItem("theme", "light")
   
   document.addEventListener("keyup", e => {
      
      if (e.key.toLowerCase() == 't') {
         
         var element = document.body;
         
         element.classList.toggle("dark-mode"); 

         document.body.style.backgroundColor = "Mine Shaft"
      
      
      } else if (localStorage.getItem("theme") == 'light') {

         if (e.key.toLowerCase() == 't') {
            
            localStorage.setItem("theme", "dark")

            var element = document.body;

            element.classList.toggle("dark-mode");
            

            document.body.style.backgroundColor = "Alto";

      }
   }
   
   
   });


}


