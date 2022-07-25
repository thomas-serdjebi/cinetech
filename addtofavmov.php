<?php
session_start();
require('processing/class_users.php');

$movie= (string) htmlentities($_GET['movie']);

if(isset($_SESSION['login'])) {

    $login = $_SESSION['login'] ;

    $user = new Users();
    $array = $user->signIn($login);

    $fav_movies = (string) $array[0]['fav_movies'];

    $fav_array = explode(',', $fav_movies);

 

    if(!in_array($movie, $fav_array, true)){ 
        $movies = (string) $fav_movies.$movie .',' ;
        $add_fav_movie = new Users();
        $add_fav_movie->favMovies($login, $movies);
        header('Location: moviedetails?element='.$movie.'');
    } else {
        header('Location: moviedetails?element='.$movie.'');

    }

} else {
    header('Location: userportal.php?movie='.$movie.'');
}







?>