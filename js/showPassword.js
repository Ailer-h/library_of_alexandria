function showPassword(passwordId, confirmation){

    let sufix = confirmation ? "_conf" : "";

    let password_input = document.getElementById(passwordId + sufix);

    let icon_shown = document.getElementById('shown' + sufix);
    let icon_hidden = document.getElementById('hidden' + sufix);

    if(password_input.disabled){
        return;
    }

    if(password_input.type == "password"){
        password_input.type = "text";
        
        icon_hidden.style.display = 'none';
        icon_shown.style.display = 'block';

        return;
    }

    password_input.type = "password";
    
    icon_hidden.style.display = 'block';
    icon_shown.style.display = 'none';

}