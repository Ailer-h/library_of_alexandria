document.addEventListener('DOMContentLoaded', function(){
    
    if(!user_logged()){
        window.location.href = "index.html";
    }

})

function user_logged(){

    $.ajax({
        url: "../php/check_user_session.php"
    })
    .done(function(data){
        return data == "active";
    })

}