<?php

include 'db.php';

// $postData = file_get_contents('php://input');
// $data = json_decode($postData, true);

$name = $_REQUEST['name'];
$box = $_REQUEST['box'];
$message = $_REQUEST['message'];


$query= "INSERT INTO users (name, box, message, date_create)
  VALUES ('$name', '$box', '$message', NOW())";
mysqli_query($link, $query);
$error=mysqli_error($link);

if($error) {
    echo $error;

} else {
    echo true;
}

// echo json_encode($data);