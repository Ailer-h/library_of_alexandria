//Validates user session on login
document.addEventListener('DOMContentLoaded', function(){
    
    $.ajax({
        url: "../php/check_user_session.php"
    })
    .done(function(data){
        if(data == 'inactive'){
            window.location.href = 'index.html';
        }

        var userdata = JSON.parse(data);
        
        $("#username_box").text("Hello " + userdata['username'] + "!");

        if(userdata['theme'] == "light"){
            $("#darkmode").hide();
        
        }else{
            $("#lightmode").hide();
            $('body').addClass('dark-mode');
        }

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

function edit_session(attr, value){
    $.ajax({
        url: "../php/change_session_attribute.php",
        data: {
            attr: attr,
            value: value
        }
    })
}

function toggle_theme(){

    $("body").toggleClass('dark-mode');

    if($("body").hasClass('dark-mode')){
        $("#lightmode").hide();
        $("#darkmode").show();
        edit_session('user_theme', 'dark');
        return;
    }

    $("#lightmode").show();
    $("#darkmode").hide();
    edit_session('user_theme', 'light');
}