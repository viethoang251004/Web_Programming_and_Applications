<?php
    define('HOST','localhost');
    define('USER','root'); //XAMpp
    define('PASS', '');
    define('DB_NAME','lab08'); 

    function create_connection(){
        $conn = new mysqli(HOST, USER, PASS,DB_NAME);
        if($conn ->connect_error){
            die('Can connect to the sever:'. $conn ->connect_error);
        }
        return $conn;
    }
    $conn = create_connection();
    //print_r($conn);
    
?>