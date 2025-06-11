<?php
include("conectare.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = password_hash($_POST['password'], PASSWORD_BCRYPT);

    
    $check_query = "SELECT * FROM logintt WHERE Email = '$email'";
    $result = $conn->query($check_query);

    if ($result->num_rows > 0) {
      
        echo "Această adresă de email este deja folosită.";
    } else {
       
        $sql = "INSERT INTO logintt (Username, PasswordHash, Email) VALUES ('$username', '$password', '$email')";

        if ($conn->query($sql) === TRUE) {
           
            echo "success";
        } else {
            
            echo "error";
        }
    }

    $conn->close();
}
?>
