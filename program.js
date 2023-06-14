function check() {
    let pass = document.getElementById("password").value;
    if (pass !== "12345678") {
       console.log("ALERT: PASSWORD INCORRECT");
    } else {
       document.querySelector("h1").textContent = "Changed";
    }
 }