<?php

function login($email, $password) {

    $pdo = Database::getInstance()->getConnection();
    ## check if the username and password are matching
    $get_user_query = "SELECT * FROM tbl_user WHERE user_email=:email AND user_pass=:password";
    $user_set = $pdo->prepare($get_user_query);
    $user_set->execute(
        array(
            ":email"=>$email,
            ":password"=>$password
        )
    );
    if ($found_user = $user_set->fetch(PDO::FETCH_ASSOC)) {
        // found user in the database, get him in!
        $found_user_id = $found_user["user_id"];

        // write the user_fname and user_id into session
        $_SESSION["user_id"] = $found_user_id;
        $_SESSION["user_name"] = $found_user["user_name"];

        // Redirect user back to index.php
        redirect_to("index.php");
        
    } else {
        // This is invalid attempt, reject it!
        return "The email and password do not match. Please try again.";
    }
}

function confirm_logged_in() {
    if (!isset($_SESSION["user_id"])) { // session does not exist
        redirect_to("admin_login.php");
    }

    // if (!empty($admin_above_only) && empty($_SESSION["user_level"])) { // ""/"0"/0/null/false is empty
    //     redirect_to("index.php");
    // }
}

function logout() {
    session_destroy();

    redirect_to("admin_login.php");
}

