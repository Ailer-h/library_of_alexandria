<?php

    session_start();

    if(isset($_SESSION['username'])){
        echo "active";
    
    }else{
        echo "inactive";

    }

?>