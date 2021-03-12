<?php
require_once "../load.php";

if (isset($_POST["submit"])) {
    $email = trim($_POST["email"]);
    $password = trim($_POST["password"]);
    if (!empty($email) && !empty($password)) {
        $result = login($email, $password);
        $message = $result;
    } else {
        $message = "Please fill out the required field.";
    }
}
?>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Login | Roku Flashback</title>
    
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
<body class="login-bg">

    <div class="grid-container" id="app">
      <h3><a href="../index.html"><img src="../images/logo.png" alt="Roku Flashback Logo"></a></h3>
        
        <div>
        
            <form action="admin_login.php" method="post">
                <h2>Sign in with your email</h2>

                <p><?php echo !empty($message) ? $message : "" ?></p>

              <!-- <label for="email">Email</label> -->
              <input type="text" id="email" name="email" placeholder="Email *" required><br>

              <!-- <label for="password">Last Name</label> -->
              <input type="text" id="password" name="password" placeholder="Password *" required><br>

              <a href="#">Forget Password?</a>
            
              <input id="login-btn" type="submit" value="Sign In" name="submit">
            </form>

            <p>New to Roku Flashback? <span><a href="admin_signup.php">Sign up</a></span></p>
          </div>

        <p class="copyright">&copy; 2021 Roku Flashback All Rights Reserved.</p>
    </div>
</body>
</html>