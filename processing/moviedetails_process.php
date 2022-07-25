<?php
session_start();
require('processing/class_users.php');

if(isset($_SESSION['login'])) {
    $login = $_SESSION['login'] ;
    $user = new Users();
    $array = $user->signIn($login);

    $fav_movies = (string) $array[0]['fav_movies'];

    $fav_array = explode(',', $fav_movies);


}

$movie= (string) htmlentities($_GET['element']);
  




?>