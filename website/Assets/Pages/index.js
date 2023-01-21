

if ("username" in localStorage) {
    
     document.getElementById("result").innerHTML = localStorage.getItem("username");
    

 } else {

  alert('Username not found. Type your username in the input field...')
  function submitForm() {
    const username = document.getElementById("usernameTxt").value;

      localStorage.setItem("username", username);

   document.getElementById("result").innerHTML = localStorage.getItem("username");

  }

 }



