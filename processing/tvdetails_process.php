<?php
session_start();
require('processing/class_users.php');

if(isset($_SESSION['login'])) {
    $login = $_SESSION['login'] ;
    $user = new Users();
    $array = $user->signIn($login);

    $fav_series = (string) $array[0]['fav_series'];

    $fav_array = explode(',', $fav_series);


}

$serie =  (string) htmlentities($_GET['element']);
  




?>