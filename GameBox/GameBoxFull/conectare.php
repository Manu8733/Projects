<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "proiectii2";


$conn = new mysqli($servername, $username, $password, $dbname);


if ($conn->connect_error) {
    die("Conexiunea a eșuat: " . $conn->connect_error);
}
?>
