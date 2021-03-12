<?php
require_once "../load.php";
// confirm_logged_in(); 

if (isset($_POST["submit"])) {
    $data = array(
        "name"=>trim($_POST["name"]),
        "email"=>trim($_POST["email"]),
        "password"=>trim($_POST["password"])
    );
    $message = createUser($data);
    // var_dump($data);
   
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up | Roku Flashback</title>

    <link rel="icon" href="images/favicon.svg" type="image/gif">

    <link rel="stylesheet" href="../css/master.css">

    <!-- Cardo -->
    <link href="https://fonts.googleapis.com/css2?family=Cardo:ital,wght@0,400;0,700;1,400&display=swap" rel="stylesheet">
    <!-- Josefin Sans -->
    <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;1,100;1,200;1,300;1,400;1,500;1,600;1,700&display=swap" rel="stylesheet">
    <!-- Frijole -->
    <link href="https://fonts.googleapis.com/css2?family=Frijole&display=swap" rel="stylesheet">

    <script src="https://kit.fontawesome.com/65f54478f1.js" crossorigin="anonymous"></script>
</head>
<body class="signup-bg">
    <div class="grid-container" id="app">
      <h3><a href="../index.html"><img src="../images/logo.png" alt="Roku Flashback Logo"></a></h3>

        <div>
            <form action="admin_signup.php" method="post">
                <h2>Create Account</h2>

              <input type="text" id="name" name="name" placeholder="Username *" required><br>
              <input type="text" id="email" name="email" placeholder="Email *" required><br>
              <input type="text" id="password" name="password" placeholder="Password *" required><br>
            
              <input id="login-btn" name="submit" type="submit" value="Continue">
            </form>
        </div>

        <p class="copyright">&copy; 2021 Roku Flashback All Rights Reserved.</p>
    </div>
</body>
</html>