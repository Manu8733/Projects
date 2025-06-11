<?php
session_start();
include("conectare.php");

if (!isset($_SESSION['userid'])) {
    header("Location: login.html");
    exit();
}

$userid = $_SESSION['userid'];

try {
    $user_query = "SELECT * FROM logintt WHERE UserID = '$userid'";
    $user_result = $conn->query($user_query);

    if ($user_result->num_rows == 0) {
        throw new Exception('User not found.');
    }

    $user_data = $user_result->fetch_assoc();
} catch (mysqli_sql_exception $e) {
    $_SESSION['popup_message'] = "Database error: " . $e->getMessage();
} catch (Exception $e) {
    $_SESSION['popup_message'] = "Error: " . $e->getMessage();
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $new_email = isset($_POST['new_email']) ? $_POST['new_email'] : '';

    $check_query = "SELECT * FROM logintt WHERE Email = '$new_email' AND UserID != '$userid'";
    $check_result = $conn->query($check_query);

    if ($check_result->num_rows > 0) {
        $_SESSION['popup_message'] = "Această adresă de email este deja utilizată de un alt cont.";
    } elseif ($user_data['Email'] == $new_email) {
        $_SESSION['popup_message'] = "Această adresă de email este deja asociată acestui cont.";
    } else {
        $update_query = "UPDATE logintt SET Email = '$new_email' WHERE UserID = '$userid'";

        if ($conn->query($update_query) === TRUE) {
            $_SESSION['popup_message'] = "Adresa de email a fost actualizată cu succes!";
        } else {
            $_SESSION['popup_message'] = "Eroare la actualizarea adresei de email: " . $conn->error;
        }
    }
    header("Location: ContulMeu.php"); 
    exit();
}

$conn->close();
?>
