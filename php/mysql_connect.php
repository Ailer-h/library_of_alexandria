<?php

    //Conecta ao database

    $server = "127.0.0.1";
    $user = "root";
    $password = "";
    $database = "library";

    $connection = mysqli_connect($server,$user,$password,$database) or die ("Couldn't connect to the database!")

?>