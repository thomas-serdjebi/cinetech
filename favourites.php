<?php
session_start();
?>
<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Account</title>
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/elements.css">
    <link rel="stylesheet" href="style/search.css">
    <script type="module" src="scripts/header_script.js"></script>
    <script type="module" src="scripts/favourites_script.js"></script>
    </head>

    <body>

        <?php require('header.php');?>

        <main>
            <div class='main_container' id="message">
                <div class='column' id='series_results'>
                    <div><h1>Your favourite Series</h1></div>
                    <div id='tv'></div>

                </div>

                <div class='column' id='movies_results'>
                    <div><h1>Your favourite Movies</h1></div>
                    <div id='movie'></div>
                </div>
            </div>

        </main>

        <?php require('footer.php');?>
        
    </body>
</html>