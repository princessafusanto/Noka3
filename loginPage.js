function showError(msg){
    let error = document.getElementById("error")
    error.innerHTML = msg
    return false
}

function validate(){
    let email = document.getElementById("txt-email").value
    let password = document.getElementById("txt-pass").value

    if(email == ""){
        return showError("email must be filled")
    }
    else if(!email.endsWith(".com")){
        return showError("email must ends with .com")
    }
    else if(email.indexOf('@') == -1){
        return showError("email must contain '@'")
    }
    else if(password.length < 5){
        return showError("password must be more than 5 characters")
    }
    else if(password[0] != password[0].toUpperCase()){
        return showError("password must starts with an uppercase letter")
    }
}