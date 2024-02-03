<?php

$a = $_POST["username"]; 

$tmp_name = $_FILES["file"]["tmp_name"];
$file_name = $_FILES["file"]["name"];

move_uploaded_file($tmp_name, "uploads/" . $file_name);

echo "File uploaded successfully."

?>