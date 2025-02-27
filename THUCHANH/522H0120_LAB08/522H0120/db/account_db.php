<?php
    require_once('db.php');

    function login($username, $password) {
        $conn = create_connection();
        $sql = "SELECT * FROM account WHERE username = ?";

        $stm = $conn->prepare($sql);
        $stm->bind_param("s", $username);
        
        if (!$stm->execute()) { // Removed semicolon
            return false;
        }
        
        $result = $stm->get_result();
        if ($result->num_rows !== 1) {
            return false;
        }
        
        $data = $result->fetch_assoc();
        $hashed = $data['password'];

        if (password_verify($password, $hashed)) {
            return $data; // Return data if password matches
        } else {
            return false; // Return false if password doesn't match
        }
    }
    function generateRandomString($length = 10) {
        $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $charactersLength = strlen($characters);
        $randomString = '';
        for ($i = 0; $i < $length; $i++) {
            $randomString .= $characters[random_int(0, $charactersLength - 1)];
        }
        return $randomString;
    }
    function register($username, $firstname, $lastname, $email, $password) {
        $sql = "SELECT COUNT(*) FROM account WHERE username = ? OR email = ?";
        $conn = create_connection();
    
        $stm = $conn->prepare($sql);
        $stm->bind_param("ss", $username, $email); // Bind both parameters
    
        $stm->execute(); // Execute the statement
    
        $result = $stm->get_result();
        $exists = $result->fetch_array()[0] === 1;
    
        if ($exists) {
            return "Cannot register because this username or email already exists";
        }
    
        $hashed = password_hash($password, PASSWORD_DEFAULT);
        $token = generateRandomString();
    
        $sql = "INSERT INTO account (username, firstname, lastname, email, password, activated, activate_token) VALUES (?, ?, ?, ?, ?, 0, ?)";
    
        $stm = $conn->prepare($sql); // Prepare the insertion statement
        $stm->bind_param("ssssss", $username, $firstname, $lastname, $email, $hashed, $token); // Bind parameters
    
        if ($stm->execute()) {
            return "Register success";
        } else {
            return "Register fail";
        }
    }
    
    
?>
