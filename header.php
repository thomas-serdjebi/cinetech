<?php
if(isset($_SESSION['login'])) {
    $login = $_SESSION['login'];
}
?>

<header>
    <a href='index.php'><img src='assets/logo.png' alt='logo' id='logo'></a>
    <div class="link">
        <div><a  class="link" href='movies.php'>Movies</a></div>
    </div>
    <div class="link">
        <div><a  class="link" href='series.php'>Series</a></div>
    </div>
    <div class="link">
        <?php if (isset($_SESSION['login'])){ echo " <div><a  class='link' href='favourites.php'> Hello $login<br> check your favourites here</a><br>
            <button class='btn btn-primary'>Disconnect</button></div> ";
            } else echo "<div><a class='link' href='userportal.php'> Sign In / Login </a></div> " ?>
    </div>
    
    <form id="form" method="get">
        <input type="text" placeholder="Search" id="search" class="search">
    </form>
</header>