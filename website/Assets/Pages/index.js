

const username_input = document.getElementById("submit");

const input_fiels = document.getElementById("usernameTxt");



if ("username" in sessionStorage) {

   
    
     document.getElementById("result").innerHTML = sessionStorage.getItem("username");
    

 } else {

  alert('Username not found. Type your username in the input field...')
  function submitForm() {
    const username = document.getElementById("usernameTxt").value;

      sessionStorage.setItem("username", username);

   document.getElementById("result").innerHTML = sessionStorage.getItem("username");

   username_input.remove()
   input_fields.remove()
  }

 }



