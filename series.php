<?php
session_start();
?>
<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Series</title>
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/elements.css">
    <script type="module" src="scripts/series_script.js"></script>
    <script type="module" src="scripts/header_script.js"></script>

    </head>

    <body>

        <?php require('header.php');?>

        <main>

            <?php require('sortby.php');?>

            <div id="tags"></div>

            <div id="container" class='container'></div>

        </main>
    </body>
</html>