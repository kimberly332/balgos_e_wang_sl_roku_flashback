<?php

// function getUserLevelMap() {
//     return array(
//         '0' => 'Web Editor',
//         '1' => 'Web Admin',
//         '2' => 'Super Web Admin'
//     );
// }

// function getCurrentUserLevel() {
//     $user_level_map = getUserLevelMap();
//     if (isset($_SESSION['user_level']) && 
//         array_key_exists($_SESSION['user_level'], $user_level_map)) {
//         return $user_level_map[$_SESSION['user_level']];
//     } else {
//         return 'Unrecognized';
//     }
// }

function createUser($user_data) {

    // empty('') = true (username is '') || username already exists
    // if (empty($user_data['username']) || isUsernameExists($user_data['username'])) {
    //     return 'Username is invalid';
    // }

    ## test / debug  only, remove it later
    // return var_export($user_data, true);

    
    // 1. create user by inserting into database
    $pdo = Database::getInstance()->getConnection();

    $create_user_query = "INSERT INTO tbl_user(user_name, user_email, user_pass)";
    $create_user_query .= " VALUES(:username, :email, :password)";

    $create_user_set = $pdo->prepare($create_user_query);
    $create_user_result = $create_user_set->execute(
        array(
            ":username"=>$user_data["name"],
            ":email"=>$user_data["email"],
            ":password"=>$user_data["password"]
        )
    );
    
    ## 2. Redirect to index.php if create user successfully (maybe with some message?)
    ##    Otherwise, showing the error message
    if ($create_user_result) {
        // login
        login($user_data["email"], $user_data["password"]);
    } else {
        return "The user did not go through !!!";
    }


}

// function getSingleUser($user_id) {
    
//     # debug / test
//     // echo 'You are trying to fetch user' . $user_id;

//     $pdo = Database::getInstance()->getConnection();

//     $get_user_query = 'SELECT * FROM tbl_user WHERE user_id = :id';
//     $get_user_set = $pdo->prepare($get_user_query);
//     $result = $get_user_set->execute(
//         array(
//             ':id'=>$user_id
//         )
//     );

//     if ($result && $get_user_set->rowCount()) {
//         return $get_user_set;
//     } else {
//         return false;
//     }
// }

// function editUser($user_data) {

//     // empty('') = true (username is '') || username already exists
//     if (empty($user_data['username']) || isUsernameExists($user_data['username'])) {
//         return 'Username is invalid';
//     }

//     $pdo = Database::getInstance()->getConnection();

//     $update_user_query = 'UPDATE tbl_user SET user_fname = :fname, user_name = :username, user_pass = :password, user_email = :email, user_level = :user_level WHERE user_id = :id';
//     $update_user_set = $pdo->prepare($update_user_query);
//     $update_user_result = $update_user_set->execute (
//         array(
//             ':fname'=>$user_data['fname'],
//             ':username'=>$user_data['username'],
//             ':password'=>$user_data['password'],
//             ':email'=>$user_data['email'],
//             ':user_level'=>$user_data['user_level'],
//             ':id'=>$user_data['id']
//         )
//     );

//     ## debug / test
//     // $update_user_set->debugDumpParams();
//     // exit;

//     if ($update_user_result) {

//         // flush the session
//         $_SESSION['user_name'] = $user_data['fname'];
//         $_SESSION['user_level'] = $user_data['user_level'];
        
//         redirect_to('index.php');
//     } else {
//         return 'Guess you got canned';
//     }
// }

// function isCurrentUserAdminAbove() {
//     return !empty($_SESSION['user_level']); // web editor = 0  web admin >= 1 -> empty(0) = true
// }

// function isUsernameExists($username) {
//     $pdo = DATABASE::getInstance()->getConnection();

//     $user_exists_query = 'SELECT COUNT(*) FROM tbl_user WHERE user_name = :username';
//     $user_exists_set = $pdo->prepare($user_exists_query);
//     $user_exists_result = $user_exists_set->execute(
//         array(
//             ':username'=>$username
//         )
//     );
//     return !$user_exists_result || $user_exists_set->fetchColumn() > 0;
    


// }
