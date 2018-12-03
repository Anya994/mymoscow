<?php

include 'db.php';

$user_id = $_GET['user_id'];

$query = "SELECT name FROM users WHERE user_id=$user_id";
$result = mysqli_query($link, $query);
if (mysqli_num_rows($result) == 0) {
    echo "Такого пользователя не существует";
} else {

$user = mysqli_fetch_assoc($result);
$user_name = $user['name'];

echo $user_name;
}
