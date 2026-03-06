<?php
session_start();
include("conectare.php");

if (!isset($_SESSION['userid'])) {
    header("Location: login.html");
    exit();
}

$userid = $_SESSION['userid'];

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  
    $new_password = isset($_POST['new_password']) ? $_POST['new_password'] : '';
    $confirm_password = isset($_POST['confirm_password']) ? $_POST['confirm_password'] : '';

   
    if ($new_password !== $confirm_password) {
        echo "Parolele nu coincid!";
        exit(); 
    }

  

    echo "Parola a fost actualizată cu succes!";
}

$conn->close();
?>

<!DOCTYPE html>
<html lang="ro">
<head>

</head>
<body>
    <!-- codului HTML pentru pagina -->
    <form id="passwordForm" method="POST" action="">
        <label for="new_password">Parolă Nouă:</label>
        <input type="password" id="new_password" name="new_password" required>
        <label for="confirm_password">Confirmă Parola Nouă:</label>
        <input type="password" id="confirm_password" name="confirm_password" required>
        <button type="submit" onclick="showPasswordPopup(event)">Schimbă Parola</button>
    </form>

    <!-- Pop-up pentru confirmarea schimbării parolei -->
    <div class="popup" id="passwordPopup">
        <p>Parola a fost actualizată cu succes!</p>
        <button onclick="closePasswordPopup()">OK</button>
    </div>

    <!-- JavaScript -->
    <script>
        function showPasswordPopup(event) {
            event.preventDefault(); 

            
            document.getElementById('passwordPopup').classList.add('visible');

          
            setTimeout(() => {
                document.getElementById('passwordPopup').classList.remove('visible');
            }, 3000); 

            
            setTimeout(() => {
                document.getElementById('passwordForm').submit();
            }, 5000); 

            return false; 
        }

        function closePasswordPopup() {
           
            document.getElementById('passwordPopup').classList.remove('visible');
        }
    </script>
</body>
</html>
