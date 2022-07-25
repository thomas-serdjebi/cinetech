<?php

class Users {

    public function __construct() {
        require('db.php');
    }

    public function signUp($login, $password){
        $fav = '';

        $data = [
            'login' => $login,
            'password' => $password,
            'fav' => $fav,
        ];

        $sql = "INSERT INTO users (login, password, fav) VALUES (:login, :password, :fav)";
        $pdo = $this->db->prepare($sql);
        $pdo->execute($data);
        echo"tamere";
    }

    public function signIn($login){
        $sql = "SELECT * FROM users WHERE login = :login ";
        $pdo = $this->db->prepare($sql);
        $pdo->setFetchMode(PDO::FETCH_ASSOC);
        $pdo->execute(['login' => $login]);

        return $array = $pdo->fetchAll();
        
    }

    public function checkLogin($login){
        $sql = "SELECT * FROM users WHERE login = :login";
        $pdo = $this->db->prepare($sql);
        $pdo->setFetchMode(PDO::FETCH_ASSOC);
        $pdo->execute(['login'=>$login]);

        return $array = $pdo->fetchAll();
    }

    public function favMovies($login, $movies) {
        $data = [
            'movies'=>$movies,
            'login'=>$login,
        ];

        $sql = "UPDATE users SET fav_movies = :movies WHERE login = :login";
        $pdo = $this->db->prepare($sql);
        $pdo->execute($data);
        
    }

    public function favSeries($login, $series) {
        $data = [
            'series'=>$series,
            'login'=>$login,
        ];

        $sql = "UPDATE users SET fav_series = :series WHERE login = :login";
        $pdo = $this->db->prepare($sql);
        $pdo->execute($data);
        
    }

    public function getFavElements($login) {
        
        $favElements = array (
            'favMovies'=>[],
            'favSeries'=>[]
        ) ;

        $sql = 'SELECT fav_movies FROM users WHERE login = :login';
        $pdo = $this->db->prepare($sql);
        $pdo->setFetchMode(PDO::FETCH_ASSOC);
        $pdo->execute(['login'=>$login]);

        $favMovies = $pdo->fetch();

        $sql2 = 'SELECT fav_series FROM users WHERE login = :login';
        $pdo2 = $this->db->prepare($sql2);
        $pdo2->setFetchMode(PDO::FETCH_ASSOC);
        $pdo2->execute(['login'=>$login]);

        $favSeries = $pdo2->fetch();

        $favElements = array (
            'favMovies'=>$favMovies,
            'favSeries'=>$favSeries
        ) ;

        return $favElements;

    }
}