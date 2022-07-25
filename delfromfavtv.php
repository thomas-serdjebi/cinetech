<?php
session_start();
require('processing/class_users.php');

$login = $_SESSION['login'] ;

$user = new Users();
$array = $user->signIn($login);

$fav_series = (string) $array[0]['fav_series'];

$fav_array = explode(',', $fav_series);

$serie= (string) htmlentities($_GET['tv']);

var_dump($fav_array);


if(in_array($serie, $fav_array, true)){  
    $new_fav_array = array_diff($fav_array, array($serie));
    $series = (string) implode(',', $new_fav_array); 
    $del_fav_serie = new Users();
    $del_fav_serie->favSeries($login, $series);
    header('Location: seriedetails?element='.$serie.'');
} else {
    header('Location: seriedetails?element='.$serie.'');
}