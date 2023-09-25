
function showError(msg){
    let error = document.getElementById("error")
    error.innerHTML = msg
    return false
}

function validate(){
    let username = document.getElementById("txt-name").value
    let email = document.getElementById("txt-email").value
    let password = document.getElementById("txt-pass").value
    let confirmPassword = document.getElementById("txt-confirm-pass").value
    let gender = document.getElementById("select-gender").value

    let chkBox = document.getElementById("chk-agree").checked

    if(username == ""){
        return showError("name must be filled")
    }
    else if(username.length < 3){
        return showError("name must more than 3 characters")
    }
    else if(!email.endsWith(".com")){
        return showError("email must ends with .com")
    }
    else if(email.indexOf('@') == -1){
        return showError("email must contain '@'")
    }
    else if(password.length < 5){
        return showError("password must more than 5 characters")
    }
    else if(password[0] != password[0].toUpperCase()){
        return showError("password must starts with an uppercase letter")
    }
    else if(password != confirmPassword){
        return showError("password doesn't match")
    }
    else if(confirmPassword == ""){
        return showError("password doesn't match")
    }
    else if(gender == "-1"){
        return showError("gender must be selected")
    }
    else if(chkBox == false){
        return showError("must agree to term and conditions")
    }
}