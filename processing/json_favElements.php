<?php
session_start();
require('class_users.php');

if(isset($_SESSION['login'])){
    $login = htmlentities($_SESSION['login']);
    $favs = new Users();
    $favElements = $favs->getFavElements($login);
    echo json_encode($favElements);
  
}

?>