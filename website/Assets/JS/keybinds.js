document.addEventListener("keydown", e => {
    if (e.key.toLowerCase() == 't') {
        localStorage.setItem("theme", "dark")
        var element = document.body;
       element.classList.toggle("dark-mode");
       

    
    }


});

