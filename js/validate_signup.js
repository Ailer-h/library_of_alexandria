const form = document.querySelectorAll('#signup input')

const name_input = document.getElementById('name');
const email_input = document.getElementById('email');
const password_input = document.getElementById('password');
const confirmation_input = document.getElementById('password_conf');

const btn_submit = document.getElementById('submit');

//Checks if the given email is valid (format: adress@client.com)
function is_valid_email(email){
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
}

//Checks if a value hes the minimum length desired
function has_minimum_length(value, min_length){
    return value.length >= min_length;
}

//Check if the password and the confirmation match
function password_matches(){
    return confirmation_input.value == password_input.value;
}

//Validates the password
//Responsible to handle changing the state from wrong to right on the confirmation
function validate_password(){

    confirmation_input.disabled = false;
    
    if(!has_minimum_length(password_input.value, 8)){
        confirmation_input.disabled = true;
        return;
    }

    if(confirmation_input.value == ""){
        confirmation_input.classList.remove("wrong");
        confirmation_input.classList.remove("right");
        return;
    }

    if(!password_matches()){
        confirmation_input.classList.remove("right");
        confirmation_input.classList.add("wrong");
        return;
    }

    confirmation_input.classList.remove("wrong");
    confirmation_input.classList.add("right");

}

//Validates the whole form. Let's you sign up if everything is correct
function validate_form(){
    
    btn_submit.disabled = true;

    //Check if user inserted username (Value is already treated with a mask)
    if(!has_minimum_length(name_input.value, 1)){
        return;
    }

    //Check if the email typed is valid
    if(!is_valid_email(email_input.value)){
        return;
    }

    //Check if the password and the confirmation match
    if(!password_matches()){
        return;
    }

    btn_submit.disabled = false;

}

//Adds the validation to the inputs
form.forEach(input =>{ 
    input.addEventListener('input', validate_form);
});

//Adds the password validation to the inputs
password_input.addEventListener('input', validate_password);
confirmation_input.addEventListener('input', validate_password);