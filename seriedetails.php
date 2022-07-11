<!doctype html>
<html lang="fr">
    <head>
    <meta charset="utf-8">
    <title>Titre de la page</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
    <link rel="stylesheet" href="style/details.css">
    <link rel="stylesheet" href="style/header.css">
    <link rel="stylesheet" href="style/elements.css">
    <script src="//code.jquery.com/jquery-3.2.1.slim.min.js" type="text/javascript"></script>
    <script src="//cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" type="text/javascript"></script>
    <script src="//maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js" type="text/javascript"></script>
    <script type="module" src="scripts/serie_details_script.js"></script>
    <script type="module" src="scripts/header_script.js"></script>

    </head>

    <body>

        <?php require('header.php');?>

        <main>

            <div class="container mt-5">
                <div class="row">
                    <div class="col-lg-8">
                        <!-- Post content-->
                        <article>
                            <!-- Post header-->
                            <header class="mb-4">
                                <!-- Post title-->
                                <h1 class="fw-bolder mb-1" id="name">Name</h1>
                                <div class="text-muted fst-italic mb-2 white" id="vote_average"></div>
                                <!-- Post meta content-->
                            </header>
                            <!-- Preview image figure-->
                            <h4 class="fw-bolder mb-1" id="tagline">Tagline</h4>
                            <br>
                            <figure class="mb-4"><img class="img-fluid rounded" id="poster" alt="..." /></figure>
                            <!-- Post content-->
                            <section class="mb-5">
                                <p class="fs-5 mb-4" id="overview">Overview</p>  
                            </section>   
                        </article>

                    </div>
                    <!-- Side widgets-->
                    <div class="col-lg-4" id="informations">
                        <!-- Categories widget-->
                        <div class="card mb-4 w-100" id="genres_bloc">
                            <div class="card-header" >Genres</div>
                            <div class="card-body">
                                <div class="row">
                                    <div class="col-sm-6">
                                        <ul class="list-unstyled mb-0" id="genres">
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <!-- Side widget-->
                        <div class="card mb-4  w-100">
                            <div class="card-header">More informations</div>
                            <div class="card-body"><div class="card-text" id="first_air_date">First air date : </div></div>
                            <div class="card-body"><div class="card-text">Created By : <ul id="created_by"></ul></div></div>
                            <div class="card-body"><div class="card-text">Production companies : <ul id="production_companies"></ul></div></div>
                            <div class="card-body"><div class="card-text">Spoken languages : <ul id="spoken_languages"></ul></div></div>
                        </div>
                    </div>
                </div>

    
                <div class="d-flex flex-wrap" id="seasons">

                </div>

                <div>

                    <div class="white"><hr><h5>Similar series belonging to the movie's categories</h5></div>

                    <div id="container" class="container"></div>

                </div>

            </div>


        </main>
    </body>
</html>