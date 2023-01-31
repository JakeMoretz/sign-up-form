function checkPassword(form) {
    password1 = form.password.value;
    password2 = form.confirm-password.value;

    if (password == '')
        alert ("Please enter Password");
    else if (confirm-password == '')
        alert ("please enter confirm password");
    else if (password != confirm-password) {
        alert ("Password did not match: Please try again..")
        return false;
    }
    else {
        alert("Password Match: Welcome!")
    }
    
}

