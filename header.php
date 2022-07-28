<?php
if(isset($_SESSION['login'])) {
    $login = $_SESSION['login'];
}
?>

<header>
    <div class='row_header'>
        <div>
            <a href='index.php'><img src='assets/logo.png' alt='logo' id='logo'></a>
        </div>
        <div class="link">
            <div><a  class="link" href='movies.php'>Movies</a></div>
        </div>
        <div class="link">
            <div><a  class="link" href='series.php'>Series</a></div>
        </div>
        <?php if(isset($_SESSION['login'])) { echo "
        <div class='link'>
            <div class='link orange'>Welcome</div>
            <div class='link orange'>".$_SESSION['login']."</div>
        </div>
        <div class='link'>
            <div><a class='link' href='favourites.php'>Favourites</a></div>
        </div>
        <div class='link'>
        <div><a class='link' href='processing/disconnect.php'>Disconnect</a></div>
        </div>"; } else { echo "
        <div class='link'>
            <div><a class='link' href='userportal.php'>Sign In</a></div>
        </div>" ; } ?>
        <form id="form" method="get">
            <input type="text" placeholder="Search" id="search" class="search">
        </form>
    </div>
</header>