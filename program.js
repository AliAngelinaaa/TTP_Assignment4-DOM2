function check(password){
    if(password!== 12345678){
        console.log("ALERT: PASSWORD INCORRECT");
    }else{
        document.querySelector(h1).innerText("Changed");
    }

}


/**
 * function check(){
 * let passwordInput = document.getElementById("password").value;
    if(password!== 12345678){
        console.log("ALERT: PASSWORD INCORRECT");
    }else{
        document.querySelector("h1").innerText = "Changed";
    }
}
 */