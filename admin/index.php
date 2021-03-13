<?php
require_once '../load.php';
confirm_logged_in();
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Roku Flashback - Watch TV Shows Online, Watch Movies Online</title>

    <link rel="icon" href="../images/favicon.svg" type="image/gif">

    <link rel="stylesheet" href="../css/master.css">

    <!-- Cardo -->
    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <!-- Josefin Sans -->
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <!-- Frijole -->
    <link href="https://fonts.googleapis.com/css2?family=Frijole&display=swap" rel="stylesheet">

    <script src="https://kit.fontawesome.com/65f54478f1.js" crossorigin="anonymous"></script>
</head>
<body>
    <div class="grid-container-index" id="app">
        <header class="header">
            <a href="#" class="logo">Roku</a>
            <input class="menu-btn" type="checkbox" id="menu-btn" />
            <label class="menu-icon" for="menu-btn"><span class="navicon"></span></label>
            <ul class="menu">
              <li><a href="../kids.html">Kids</a></li>
              <li><a href="#">Movies</a></li>
              <li><a href="#">Account</a></li>
              <li><a href="admin_logout.php">Sign Out</a></li>
            </ul>
        </header>
        
        <div class="landing">
            <img src="../images/the-little-things.jpg" alt="Landing Image">
        </div>

        <div class="landing-description">
            <h2>The Little Things</h2>
            <p>Kern County Deputy Sheriff Joe Deacon is sent to Los Angeles for what should have been a quick evidence-gathering assignment. Instead, he becomes embroiled in the search for a serial killer who is terrorizing the city.</p>
            
            <ul>
                <li><a href="./admin/admin_login.php">Play</a></li>
                <li><a href="./admin/admin_login.php">More Info</a></li>
            </ul>
        </div>

        <div class="search-box"> 
            <form action="/action_page.php">
                <input type="text" placeholder="Search..." name="search">
                <button type="submit"><i class="fa fa-search"></i></button>
            </form>
        </div>

        <div class="display-popular">
            <h3>Popular on Roku Flashback</h3>
            <a href="#"><img src="../images/mortal-kombat.jpg" alt="Mortal Kombat"></a>
            <a href="#"><img src="../images/godzilla-kong.jpg" alt="Godzilla Kong"></a>
            <a href="#"><img src="../images/city-of-lies.jpg" alt="City of Lies"></a>
            <a href="#"><img src="../images/emma-stone.jpg" alt="Emma Stone"></a>
        </div>

        <div class="display-new-releases">
            <h3>New Releases</h3>
            <a href="#"><img src="../images/mortal-kombat.jpg" alt="Mortal Kombat"></a>
            <a href="#"><img src="../images/godzilla-kong.jpg" alt="Godzilla Kong"></a>
            <a href="#"><img src="../images/city-of-lies.jpg" alt="City of Lies"></a>
            <a href="#"><img src="../images/emma-stone.jpg" alt="Emma Stone"></a>
        </div>

        <div class="display-1990">
            <h3>1990's</h3>
            <a href="#"><img src="../images/mortal-kombat.jpg" alt="Mortal Kombat"></a>
            <a href="#"><img src="../images/godzilla-kong.jpg" alt="Godzilla Kong"></a>
            <a href="#"><img src="../images/city-of-lies.jpg" alt="City of Lies"></a>
            <a href="#"><img src="../images/emma-stone.jpg" alt="Emma Stone"></a>
        </div>

        <div class="display-1980">
            <h3>1980's</h3>
            <a href="#"><img src="../images/mortal-kombat.jpg" alt="Mortal Kombat"></a>
            <a href="#"><img src="../images/godzilla-kong.jpg" alt="Godzilla Kong"></a>
            <a href="#"><img src="../images/city-of-lies.jpg" alt="City of Lies"></a>
            <a href="#"><img src="../images/emma-stone.jpg" alt="Emma Stone"></a>
        </div>

        <div class="display-1970">
            <h3>1970's</h3>
            <a href="#"><img src="../images/mortal-kombat.jpg" alt="Mortal Kombat"></a>
            <a href="#"><img src="../images/godzilla-kong.jpg" alt="Godzilla Kong"></a>
            <a href="#"><img src="../images/city-of-lies.jpg" alt="City of Lies"></a>
            <a href="#"><img src="../images/emma-stone.jpg" alt="Emma Stone"></a>
        </div>

        <div class="explore-all-btn">
            <p><a href="#">Explore All</a></p>
        </div>

        <footer>
            <h3><a href="index.php"><img src="../images/logo.png" alt="Roku Flashback Logo"></a></h3>
            <ul>
                <li><a href="#">Audio and Subtitles</a></li>
                <li><a href="#">Social Media</a></li>
                <li><a href="#">Privacy</a></li>
                <li><a href="#">Contact Us</a></li>
            </ul>
            <p class="copyright">&copy; 2021 Roku Flashback All Rights Reserved.</p>
        </footer>
    </div>

    <script type="module" src="../js/main.js"></script>
</body>
</html>
