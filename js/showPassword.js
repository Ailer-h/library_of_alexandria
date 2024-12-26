function showPassword(passwordId){

    let password_input = document.getElementById(passwordId);

    let icon_shown = document.getElementById('shown');
    let icon_hidden = document.getElementById('hidden');

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