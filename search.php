<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Titre de la page</title>
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/elements.css">
    <link rel="stylesheet" href="style/search.css">
    <script type="module" src="scripts/header_script.js"></script>
    <script type="module" src="scripts/search_script.js"></script>
    </head>

    <body>

        <?php require('header.php');?>

        <main>
            <div class='main_container' id="message">
                <div class='column' id='series_results'>
                    <div><h1>Series results</h1></div>
                    <div id='tv'></div>

                </div>

                <div class='column' id='movies_results'>
                    <div><h1>Movies results</h1></div>
                    <div id='movie'></div>
                </div>
            </div>
        </main>
    </body>
</html>