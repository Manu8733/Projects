<?php
session_start();
include("conectare.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $password = $_POST['password'];

    $sql = "SELECT * FROM logintt WHERE Username = ?";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("s", $username);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result->num_rows > 0) {
        $row = $result->fetch_assoc();
        if (password_verify($password, $row['PasswordHash'])) {
            
            $_SESSION['username'] = $username;
            $_SESSION['userid'] = $row['UserID']; 
            
            header("Location: index.php?login=success");
            exit();
        } else {
            header("Location: login.html?error=incorrect_password");
            exit();
        }
    } else {
        header("Location: login.html?error=incorrect_username");
        exit();
    }

    $stmt->close();
    $conn->close();
}
?>
