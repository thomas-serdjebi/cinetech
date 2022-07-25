<?php
session_start();
require('processing/class_users.php');

$login = $_SESSION['login'] ;

$user = new Users();
$array = $user->signIn($login);

$fav_movies = (string) $array[0]['fav_movies'];

$fav_array = explode(',', $fav_movies);

$movie= (string) htmlentities($_GET['movie']);

var_dump($fav_array);


if(in_array($movie, $fav_array, true)){  
    $new_fav_array = array_diff($fav_array, array($movie));
    $movies = (string) implode(',', $new_fav_array); 
    $del_fav_movie = new Users();
    $del_fav_movie->favMovies($login, $movies);
    header('Location: moviedetails?element='.$movie.'');
} else {
    header('Location: moviedetails?element='.$movie.'');

}