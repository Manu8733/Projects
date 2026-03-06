<?php
session_start();

$last_page = isset($_SESSION['last_page']) ? $_SESSION['last_page'] : 'index.php';

session_unset();

session_destroy();


header("Location: $last_page");
exit();
?>
