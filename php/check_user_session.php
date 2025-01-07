<?php

    session_start();

    if(isset($_SESSION['username'])){
        $userdata = [
            'username' => $_SESSION['username'],
            'user_id' => $_SESSION['user_id'],
            'email' => $_SESSION['user_email'],
            'theme' => $_SESSION['user_theme'],
            'permissions' => $_SESSION['user_permissions']
        ];

        echo json_encode($userdata);
    
    }else{
        echo "inactive";

    }

?>