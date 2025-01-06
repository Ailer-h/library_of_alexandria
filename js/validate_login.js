const form = document.querySelectorAll('#login input');

const email_input = document.getElementById('email');
const password_input = document.getElementById('password');

const btn_submit = document.getElementById('submit');

function validate_login(){

    btn_submit.disabled = true;

    //Checks if user typed email
    if(!is_valid_email(email_input.value)){
        return;
    }

    //Checks if password has minimum length
    if(!has_minimum_length(password_input.value, 8)){
        return;
    }

    btn_submit.disabled = false;

}

//Adds validations to all inputs on the login form
form.forEach(input =>{
    input.addEventListener('input', validate_login);
})

//Checks form submission and stops it to handle it via Javascript
document.getElementById('login').addEventListener('submit', function(event){
    event.preventDefault();

    $.ajax({
        url: "../php/validate_login.php",
        method: "post",
        data: {
            email: email_input.value,
            password: password_input.value

        }
    })
    .done(function(data){

        if(data == 'SUCCESS'){
            window.location.href = "main.html";
        
        }

        btn_submit.disabled = true;

        if(data == '100'){

            set_toast_content("error_toast", "Inexistent account.",
                "This email is not registered. Please, use a different one."
            )
            show_toast("error_toast", 3000)

            $("#email").val("");
            $("#email").focus();
        
        }else if(data == '101'){

            set_toast_content("error_toast", "Inactive account.",
                "This email is not active anymore. Please, use a different one."
            )
            show_toast("error_toast", 3000)

            $("#email").val("");
            $("#email").focus();

        }else if(data == '200'){

            set_toast_content("error_toast", "Wrong password.",
                "You used the wrong password, please try again."
            )
            show_toast("error_toast", 3000)

            $("#password").addClass("wrong");
            $("#password").val("");
            $("#password").focus();

        }

    })

});