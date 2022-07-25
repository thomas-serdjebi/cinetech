<?php
$host = 'localhost';
$dbname = 'cinetech';
$username = 'root';
$password = ''; 

try {
    $db = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $this->db = $db;

} catch (PDOException $pe) {
    die("Could not connect to the database $dbname :" . $pe->getMessage());
}





?>