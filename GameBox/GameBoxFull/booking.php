<?php
session_start();
include("conectare.php");

if ($_SERVER["REQUEST_METHOD"] == "POST") {
  if (isset($_SESSION['userid'])) {
    $userid = $_SESSION['userid'];
  } else {
    echo "Eroare: Utilizatorul nu este autentificat.";
    exit();
  }

  $destination = isset($_POST['destionation']) ? trim($_POST['destionation']) : '';
  $datadus = isset($_POST['datadus']) ? $_POST['datadus'] : '';
  $dataintors = isset($_POST['dataintors']) ? $_POST['dataintors'] : '';
  $message = isset($_POST['message']) ? trim($_POST['message']) : '';

  
  if (!empty($destination) && !empty($datadus) && !empty($dataintors) && !empty($message)) {
    
    $sql = "INSERT INTO bookings (UserID, Destionation, DataDus, DataIntors, Message) VALUES (?, ?, ?, ?, ?)";
    $stmt = $conn->prepare($sql);
    $stmt->bind_param("issss", $userid, $destination, $datadus, $dataintors, $message);

    if ($stmt->execute()) {
      echo "Rezervarea a fost trimisă cu succes!";
      header("Location: Store.php");
    } else {
      echo "Eroare: " . $sql . "<br>" . $conn->error;
    }

    $stmt->close();
    $conn->close();
  } else {
    echo "Eroare: Toate câmpurile sunt obligatorii.";
  }
} else {
  echo "Eroare: Metoda de trimitere incorectă.";
}
?>
