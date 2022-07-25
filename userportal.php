<?php
session_start();
require('processing/signUp_process.php');

?>

<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Sign in</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/index.css">
    <script src="//code.jquery.com/jquery-3.2.1.slim.min.js" type="text/javascript"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" type="text/javascript"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" type="text/javascript"></script>
    <script type="module" src="scripts/header_script.js"></script>
    <script type="module" src="scripts/index_script.js"></script>
    </head>

    <body>

        <?php require('header.php');?>

        <main>
            <div class="content">
                <div class="container">
                    <div class="row align-items-center" id="forms_container">
                        <div class="col-md-5 contents" id="left_block">

                            <div class="form-block" id="signupform">
                                <div class="mb-4">
                                    <h3>Sign Up to <span class="title3">Cinetech<span class="title3"></span></h3><br>
                                    <div class="mb-4 orange" id="error_sign_up">All fields must be filled in.</div>
                                    <div class="mb-4 orange" id="error_sign_up_login"></div>
                                    <div class="mb-4 orange" id="error_sign_up_password"></div>
                                    <div class="mb-4 orange" id="error_sign_conf_password"></div>
                                </div>

                                <form action="#" method="post">
                                    <div class="form-group first">
                                        <label for="login">Login</label>
                                        <input type="text" name="signuplogin" id="signuplogin" class="form-control" value="<?php if(isset($login)){ echo $login ;}?>">

                                    </div>
                                    <div class="form-group last mb-4">
                                        <label for="password">Password</label>
                                        <input type="password"  name="signuppassword" id="signuppassword" class="form-control">
                                        
                                    </div>
                                    
                                    <div class="form-group last mb-4">
                                        <label for="password_confirm">Confirm your password</label>
                                        <input type="password" class="form-control" name="password_confirm" id="passwordconfirm">
                                        
                                    </div>
                                    
                                    <div class="mb-4">
                                    <p class="mb-4 orange">Password must have at least 8 caracters with at least 1 lower case letter, 1 upper case letter, 1 number and 1 special characters</p>
                                    </div>

                                    <input type="submit" name="register" value="Sign Up" id="signupbutton" class="btn btn-pill text-white btn-block btn-primary">
                                
                                </form>
                            </div>
                        </div>

                        <div class="col-md-2 text-center">
                            &mdash;<span id='or'>or</span>&mdash;
                        </div>

                        <div class="col-md-5 contents">
                            <div class="form-block" id="signinform">
                                <div class="mb-4">
                                    <h3>Sign In to <span class="title3">Cinetech</span></h3><br>
                                    <p class="mb-4 orange" id="error_sign_in">All fields must be filled in.</p>
                                </div>

                                <form action="#" method="post">
                                    <div class="form-group first">
                                        <label for="login">Login </label>
                                        <input type="text" name="signinlogin" id="signinlogin" class="form-control">

                                    </div>
                                    <div class="form-group last mb-4">
                                        <label for="password">Password </label>
                                        <input type="password" name="signinpassword" id="signinpassword" class="form-control">
                                        
                                    </div>

                                    <div class="mb-4">
                                    <p class="mb-4"></p>
                                    </div>

                                    <input type="submit" value="Log In" name="connect" class="btn btn-pill text-white btn-block btn-primary">
                                </form>
                            </div>
                        </div>




                        
                    </div>
                </div>
            </div>


    </main>

    </body>
</html>