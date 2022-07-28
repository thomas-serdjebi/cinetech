<?php
require('class_users.php');

if(isset($_POST['register'])){
    $login = htmlentities(trim($_POST['signuplogin']));
    $password = htmlentities(trim($_POST['signuppassword']));
    $password_confirm = htmlentities(trim($_POST['password_confirm']));

    $valid = true;

    if(empty($login) || empty($password) || empty($password_confirm)) {
        $valid = false;
    }

    $check_login = new Users();
    $checking_login = $check_login->checkLogin($login);

    if(strlen($login)<6){
        $valid = false;
        $login = '';
        $error_login = 'Your login must be at least 6 characters';
    } else if (preg_match('/[^A-Za-z0-9]/i', $login)) {
        $valid = false;
        $login = '';
        $error_login = 'Your login can only contain numbers and letters';
    } else if (count($checking_login) != 0) {
        $valid = false;
        $login ='';
        $error_login =" This login already exists.";

    }

    if(strlen($password)< 8) {
        $valid = false;
        $error_password = "Your password must be at least 8 characters";
    } else if (!preg_match('/^(?=.*\d)(?=.*[@#\-_$%^&+=§!\?])(?=.*[a-z])(?=.*[A-Z])[0-9A-Za-z@#\-_$%^&+=§!\?]/',$password)){
        $valid = false;
        $error_password = "Your password must have at least 1 uppercase letter, 1 lowercase letter and 1 special character";
    } else if ($password != $password_confirm) {
        $valid = false;
        $error_signUp = "Passwords don't match";
    }

    if($valid == true) {
        $password = password_hash($password, PASSWORD_BCRYPT);
        $signUp = new Users();
        $signUp->signUp($login, $password);
        header('Location:userportal.php?display=only_signin');
    }

}

if(isset($_POST['connect'])) {
    $login = htmlentities($_POST['signinlogin']);
    $password = htmlentities($_POST['signinpassword']);

    $valid = true;

    if (empty($login) || empty($password)) {
        $valid = false;
        $error = "All fields must be filled in.";

    }

    if ($valid == true) {
        $signIn = new Users();
        $array = $signIn->signIn($login);

        if(!empty($array)) {

            if (password_verify($password, $array[0]['password'])) {
                $_SESSION['login'] = $login;
                if(isset($_GET['movie'])) {
                    $movie = htmlentities($_GET['movie']);
                    header('Location: addtofavmov.php?movie='.$movie.'');
                } else if(isset($_GET['tv'])) {
                    $serie = htmlentities($_GET['tv']);
                    header('Location: addtofavtv.php?serie='.$serie.'');

                } else {
                    header('Location: index.php');
                }
            } else {
                $error = "Your password is not correct.";
            }

        } else {
            $error = "Your login doesn't exist.";
        }
        

    }



}








?>