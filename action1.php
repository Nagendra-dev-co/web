<?php

$user_name = $_POST['username'];
$testType = $_POST['testType'];
$password = $_POST['password'];

if($testType == 'ping_test'){
 
}else if($testType == 'check_uptime'){
    /// based on the test type you cal change the logic.
    /// what ever you echo here will be sent to the front-end(check the console to view the data).
}

if ($_SERVER["REQUEST_METHOD"] === "POST") {
$user = filter_input(INPUT_POST, "username", FILTER_SANITIZE_STRING);

if (isset($_FILES["file"])) {
    $file = $_FILES["file"];

    $uploadsDirectory = "/opt/web/";
    $allowedExtensions = ["txt"];
    $fileExtension = pathinfo($file["name"], PATHINFO_EXTENSION);

    if (in_array(strtolower($fileExtension), $allowedExtensions)) {
        $dest = $uploadsDirectory . basename($file["name"]);
        
        if (move_uploaded_file($file["tmp_name"], $dest)) {
            echo "File uploaded successfully."; 
            $con = file_get_contents($dest); 
            $con = rtrim(str_replace("\r", "", $con)); 
            $con = preg_replace('/\$$/', '', $con); 
            file_put_contents($dest,$con); 
            //echo $file;
            $command = "/var/www/html/scripts/ping.sh  $user $dest";
            $output=shell_exec($command);
            echo "<pre> 
                       print_r($output)
                 </pre>";
        } else {
            echo "Error uploading file.";
        }
    } else {
        echo "Invalid file type. Allowed types: " . implode(", ", $allowedExtensions);
    }
} else {
    echo "No file uploaded.";
}

}

?>

