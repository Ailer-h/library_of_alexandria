<?php

    if(isset($_POST['attr']) && isset($_POST['value'])){
        
        $attr = $_POST['attr'];
        $value = $_POST['value'];
        
        if(isset($_SESSION[$attr])){
            $_SESSION[$attr] = $value;
        }
    }

?>