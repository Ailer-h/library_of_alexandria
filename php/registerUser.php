<?php

    $username = $_POST['username'];
    $email = $_POST['email'];
    $hashed_password = password_hash($_POST['password'], PASSWORD_DEFAULT);

    include "mysql_connect.php";

    if(empty(mysqli_fetch_array(mysqli_query($connection, "select user_id from users where user_email = '$email'")))){
        
        //Inserts user onto the database
        mysqli_query($connection, "insert into users(username, user_email, user_password)
        values ('$username', '$email', '$hashed_password')");

        
        //Retrieves remaining user data from database
        $userdata = mysqli_fetch_assoc(mysqli_query($connection, "select user_id from users where user_email = '$email' limit 1;"));
        
        //Adds userdata to the session
        session_start();
        
        $_SESSION['username'] = $username;
        $_SESSION['user_id'] = $userdata['user_id'];
        $_SESSION['user_email'] = $email;
        
        $_SESSION['user_theme'] = "light";
        $_SESSION['user_permissions'] = "user";
    
        // echo "SUCCESS";

    }else{

        // echo "ERROR";

    }

    mysqli_close($connection);

?>