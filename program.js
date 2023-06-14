//This codec hecks the following things:
//  checks that the password is 12345678
//  if the password is incorrect, send an alert message
//  Your page should also include an <h1> tag. 
//  If the information in the form is correct, have Javascript change the text in the <h1> .HTML page.

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
 