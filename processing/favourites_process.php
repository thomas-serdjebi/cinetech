<?php

require('class_users.php');

if(!isset($_SESSION['login'])){
    header('Location:userportal.php');
} else {
    $login = htmlentities($_SESSION['login']);
    $favs = new Users();
    $favElements = $favs->getFavElements($login);
    var_dump($favElements);
}


?>