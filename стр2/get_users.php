<?php

include 'db.php';

sleep(3);
$query = "SELECT * FROM users";
$result = mysqli_query($link, $query);

$users = [];
while ($user = mysqli_fetch_assoc($result)) {
    $users[] = $user;
}

// var_dump($users);

foreach ($users as $user) {
    echo '<h2>'.$user['name'].'</h2>';
    echo '<i>'.$user['date_created'].'</i>';
}