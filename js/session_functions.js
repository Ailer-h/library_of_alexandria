//Validates user session on login
document.addEventListener('DOMContentLoaded', function(){
    
    $.ajax({
        url: "../php/check_user_session.php"
    })
    .done(function(data){
        if(data == 'inactive'){
            window.location.href = 'index.html';
        }

        let userdata = JSON.parse(data);
        
        $("#username_box").text("Hello " + userdata['username'] + "!")

    })
})

function logout(){

    $.ajax({
        url: "../php/logout.php"
    })
    .done(function(){
        window.location.href = 'index.html';
    })

}