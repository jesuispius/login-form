// Function to set the message for forms check
function setMessage(id, classname, message) {
    var ID = document.getElementById(id);
    ID.classList.add(classname);
    ID.querySelector("small").innerHTML = message;
}

// Function to reset the message for forms check
function resetMessage(id, classname) {
    var ID = document.getElementById(id);
    if (ID.classList.contains(classname)) {
        ID.classList.remove(classname);
        ID.querySelector("small").innerHTML = "";
    }
}

// Function helper to check the characters
// Check the lowercase
// Check the uppercase
// Check the digit
// Check the special case
// All functions return the boolean type
function hasLower(character) {
    return (character >= "a" && character <= "z");
}

function hasUpper(character) {
    return (character >= "A" && character <= "Z");
}

function hasDigit(character) {
    return (character >= "0" && character <= "9");
}

function hasSpecialChar(character) {
    const SPECIALCASE = "!@~#$%^&*+=.";
    return (SPECIALCASE.indexOf(character) >= 0);
}

// Function to check the validity of username
function isValidEmail() {
    var mailformat = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    var value_input = document.getElementById("email-input").value; 
    var isValid = false;

    // Check email format
    if (value_input.match(mailformat)) {
        isValid = true;
    }
    // Check input
    if (value_input == "") {
        resetMessage("email-input-control", "success");
        setMessage("email-input-control", "error", "Must not be empty!");
    }
    if (!isValid) {
        resetMessage("email-input-control", "success");
        setMessage("email-input-control", "error", "Invalid Email Address!");
    } else {
        resetMessage("email-input-control", "error");
        setMessage("email-input-control", "success", "Great!");
    }
}

// Function to check the validity of username
function isValidUsername() {
    var value_input = document.getElementById("username-input").value;
    if (value_input == "") {
        resetMessage("username-input-control", "success");
        setMessage("username-input-control", "error", "Must not be empty!");
    }

    if (value_input.length < 8) {
        resetMessage("username-input-control", "success");
        setMessage("username-input-control", "error", "Must be at least 8 character!");
    } else {
        resetMessage("username-input-control", "error");
        setMessage("username-input-control", "success", "Great!");
    }
}


// Function to check the vadility of password
function isValidPassword() {
    var value_input = document.getElementById("password-input").value;
    var has_upper = false;
    var has_lower = false;
    var has_digit = false;
    var has_required = false;
    
    if (value_input == "") {
        resetMessage("password-input-control", "success");
        setMessage("password-input-control", "error", "Must not be empty!");
    }

    if (value_input.length < 8) {
        resetMessage("password-input-control", "success");
        setMessage("password-input-control", "error", "Password must be at least 8 character!");
        return;
    }
    
    for (var i = 0; i < value_input.length; i++) {
        var character = value_input.charAt(i);
        
        if (hasUpper(character)) {
            has_upper = true;
        } else if (hasLower(character)) {
            has_lower = true;
        } else if (hasDigit(character)) {
            has_digit = true;
        } else if (hasSpecialChar(character)) {
            has_required = true;
        }
    }
    
    if (!has_upper) {
        resetMessage("password-input-control", "success");
        setMessage("password-input-control", "error", "Must have at least one upper-case letter.");
    } else if (!has_lower) {
        resetMessage("password-input-control", "success");
        setMessage("password-input-control", "error", "Must have at least one lower-case letter.");
    } else if (!has_digit) {
        resetMessage("password-input-control", "success");
        setMessage("password-input-control", "error", "Must have at least one digit letter.");
    } else if (!has_required) {
        resetMessage("password-input-control", "success");
        setMessage("password-input-control", "error", "Must have at least one character from '!@~#$%^&*+=.'");
    } else {
        resetMessage("password-input-control", "error");
        setMessage("password-input-control", "success", "Great!");
    }
}

// Function to check the vadility of confirmation password
function isPasswordConfirmed() {
    var password_input = document.getElementById("password-input").value;
    var password_confirmed_input = document.getElementById("Check-password").value;

    if (password_confirmed_input == "") {
        resetMessage("password-confirm-input-control", "success");
        setMessage("password-confirm-input-control", "error", "Must not be empty!");
    }
    if (password_input === password_confirmed_input) {
        resetMessage("password-confirm-input-control", "error");
        setMessage("password-confirm-input-control", "success", "Great!");
    } else {
        resetMessage("password-confirm-input-control", "success");
        setMessage("password-confirm-input-control", "error", "Passwords not be identical!");
    }
}

// Function to check validity input form
function checkInputForm() {
    document.getElementById("email-input").addEventListener("input", isValidEmail);
    document.getElementById("username-input").addEventListener("input", isValidUsername);
    document.getElementById("password-input").addEventListener("input", isValidPassword);
    document.getElementById("Check-password").addEventListener("input", isPasswordConfirmed);
}

// Function to submit form
function submitForm() {
    var email = false, username = false, password = false, password_confirmed = false;

    if (document.getElementById("email-input-control").classList.contains("success")) {email = true;}
    if (document.getElementById("username-input-control").classList.contains("success")) {username = true;}
    if (document.getElementById("password-input-control").classList.contains("success")) {password = true;}
    if (document.getElementById("password-confirm-input-control").classList.contains("success")) {password_confirmed = true;}

    if (email && username && password && password_confirmed) {
        alert("Successful");
    } else {
        alert("Fail!");
    }
}

window.addEventListener("load", checkInputForm);
window.addEventListener("submit", submitForm);