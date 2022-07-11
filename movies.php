<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Titre de la page</title>
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/elements.css">
    <script type="module" src="scripts/movies_script.js"></script>
    <script type="module" src="scripts/header_script.js"></script>
    </head>

    <body>

        <?php require('header.php');?>

        <main>

            <?php require('sortby.php') ;?>
            
            <div id="tags"></div>


            <div class="container" id="container"></div>

        </main>
    </body>
</html>