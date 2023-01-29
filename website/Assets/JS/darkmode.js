document.addEventListener("keyup", e => {
   if (e.key.toLowerCase() == 't') {
      var element = document.body;
      element.classList.toggle("dark-mode");
      

   
   }


});

// 
// if (localStorage.getItem("theme", "null")) {
//    document.body.style.backgroundColor = "Mine Shaft"
// }
// 
// if (localStorage.setItem("theme", "light")) {
//    
//    document.body.style.backgroundColor = "Alto";
// 
// } 
// 
// if (localStorage.getItem("theme", "dark")) {
//    document.body.style.backgroundColor = "Mine Shaft"
// }
// 


