<?php
session_start();
?>
<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Series</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/elements.css">
    <script src="//code.jquery.com/jquery-3.2.1.slim.min.js" type="text/javascript"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" type="text/javascript"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" type="text/javascript"></script>
    <script type="module" src="scripts/series_script.js"></script>
    <script type="module" src="scripts/header_script.js"></script>

    </head>

    <body>

        <?php require('header.php');?>

        <main>
            <div class='column_content'>
                <div class='row_content' id="big_container">
                    <div id="sortbyer"><?php require('sortby.php') ;?></div>
                    <div class='column_content' id="tags_and_container">
                        <div id="tags"></div>
                        <div class="container" id="container"></div>
                    </div>
                
                </div>  
            </div>
            <div class='message' id='message'></div>
        </main>

        <?php require('footer.php');?>
        
    </body>


</html>