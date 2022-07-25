<?php
session_start();
require('processing/class_users.php');

$serie = (string) htmlentities($_GET['tv']);

if(isset($_SESSION['login'])) {

    $login = $_SESSION['login'] ;

    $user = new Users();
    $array = $user->signIn($login);

    $fav_series = (string) $array[0]['fav_series'];

    $fav_array = explode(',', $fav_series);

 

    if(!in_array($serie, $fav_array, true)){ 
        $series = (string) $fav_series.$serie.',' ;
        $add_fav_serie = new Users();
        $add_fav_serie->favSeries($login, $series);
        header('Location: seriedetails?element='.$serie.'');
    } else {
        header('Location: seriedetails?element='.$serie.'');

    }

} else {
    header('Location: userportal.php?tv='.$serie.'');
}


