<?php

    $email = $_POST['email'];
    $user_password = $_POST['password'];

    include "mysql_connect.php";

    if(empty(mysqli_fetch_array(mysqli_query($connection, "select user_id from users where user_email = '$email'")))){
       echo "100"; //Inexistent account

    }else{
        //Gets userdata and makes all the necessary checks
        $userdata = mysqli_fetch_assoc(mysqli_query($connection, "select user_id, username, user_password, user_permissions, user_theme, account_state from users where user_email = '$email' limit 1;"));

        //Checks if account is inactive
        if($userdata['account_state'] != 'active'){
            echo "101"; //Inactive account
        
        //Checks if user got the password wrong
        }else if(!password_verify($user_password, $userdata['user_password'])){
            echo "200"; //Wrong password
        
        //Succeded with login
        }else{

            //Adds userdata to session;
            session_start();
        
            $_SESSION['username'] = $userdata['username'];
            $_SESSION['user_id'] = $userdata['user_id'];
            $_SESSION['user_email'] = $email;
            
            $_SESSION['user_theme'] = $userdata['user_theme'];
            $_SESSION['user_permissions'] = $userdata['user_permissions'];
        
            echo "SUCCESS";

        }

    }

    mysqli_close($connection);

?>