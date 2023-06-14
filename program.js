document.getElementById("myForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
    let password = document.getElementById("password").value;
    
    // Check if password is correct
    if (password !== "12345678") {
       alert("Incorrect password!");
    } else {
       document.querySelector("h1").innerText = "Welcome!";
    }
 });