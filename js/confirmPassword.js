function has_typed_password(password_id){

    let password_input = document.getElementById(password_id);
    return password_input.value.length > 0;
    
}

function validatePassword(password_id, confirmation_id){

    let password_input = document.getElementById(password_id);
    let confirmation_input = document.getElementById(confirmation_id);

    if(confirmation_input.value == "" || !has_typed_password(password_id)){
        confirmation_input.classList.remove("wrong");
        return;
    }

    if(confirmation_input.value != password_input.value){
        confirmation_input.classList.add("wrong");
        return;
    }

    confirmation_input.classList.remove("wrong");

}