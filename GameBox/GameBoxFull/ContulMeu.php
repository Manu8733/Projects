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
    $reservations_query = "SELECT * FROM bookings WHERE UserID = '$userid'";
    $reservations_result = $conn->query($reservations_query);
} catch (mysqli_sql_exception $e) {
    die("Database error: " . $e->getMessage());
} catch (Exception $e) {
    die("Error: " . $e->getMessage());
}

// Verificăm dacă există un mesaj de notificare în sesiune
$popup_message = '';
if (isset($_SESSION['popup_message'])) {
    $popup_message = $_SESSION['popup_message'];
    unset($_SESSION['popup_message']);
}
?>

<!DOCTYPE html>
<html lang="ro">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My account</title>

    <!-- Favicon -->
    <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

    <!-- Stiluri personalizate -->
    <link rel="stylesheet" href="./assets/css/style.css">

    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Comforter+Brush&family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet">

    <!-- Stiluri suplimentare -->
    <style>
        body {
            margin: 0;
            padding: 0;
            font-family: 'Heebo', sans-serif;
            background-image: url('./assets/images/MyaccBg.png');
            background-size: auto;
            background-position: center;
            background-attachment: fixed;
        }

        .overlay {
            background-color: rgba(255, 255, 255, 0.5);
            padding: 50px;
            border-radius: 10px;
            backdrop-filter: blur(1px);
        }

        .header {
            position: relative !important;
            z-index: 1;
        }

        .contact-section {
            padding: 50px;
            border-radius: 10px;
            position: relative;
            z-index: 1;
        }

        .contact-wrapper {
            display: flex;
            justify-content: space-between;
            align-items: flex-start;
        }

        .contact-info,
        .reservation-info {
            flex: 1;
            margin-right: 50px;
        }

        .reservation-info {
            margin-left: 50px;
        }

        .reservation-item {
            background-color: rgba(255, 255, 255, 0.0);
            padding: 10px;
            border-radius: 5px;
            margin-bottom: 10px;
        }

        @media screen and (max-width: 768px) {
            .overlay {
                padding: 20px;
            }

            .contact-wrapper {
                flex-direction: column;
                align-items: stretch;
            }

            .contact-info,
            .reservation-info {
                margin: 0;
                width: 100%;
            }
        }

        /* Stiluri câmpuri de introducere */
        .email-form {
            display: none;
            margin-top: 20px;
        }

        .email-form input[type="email"] {
            width: 100%;
            padding: 10px;
            border: 1px solid #ccc;
            border-radius: 5px;
            margin-bottom: 10px;
            box-sizing: border-box;
            font-size: 16px;
        }

        .email-form button {
            padding: 10px 20px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        .email-form button:hover {
            background-color: #0056b3;
        }

        /* Stiluri pentru pop-up */
        .popup {
            display: none;
            position: fixed;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
            padding: 20px;
            background-color: #fff;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            border-radius: 10px;
            text-align: center;
            z-index: 1000;
        }

        .popup.visible {
            display: block;
        }

        .popup button {
            margin-top: 10px;
            padding: 5px 10px;
            background-color: #007bff;
            color: #fff;
            border: none;
            border-radius: 5px;
            cursor: pointer;
        }

        .popup button:hover {
            background-color: #0056b3;
        }
    </style>
</head>
<body id="top">

    <!-- Antet -->
    <header class="header" data-header>
        <div class="container">
            <nav class="navbar">
                <ul class="navbar-list">
                    <li><a href="index.php" class="navbar-link">Home</a></li>
                    <li><a href="index.php#news" class="navbar-link">News</a></li>
                    <li><a href="desprenoi.php" class="navbar-link">About us</a></li>
                    <li><a href="Store.php" class="navbar-link">Store</a></li>
                    <?php if (isset($_SESSION['username'])): ?>
                        <li><a href="basket.php" class="navbar-link">Basket</a></li>
                        <li><a href="ContulMeu.php" class="navbar-link">My account</a></li>
                        <li><a href="logout.php" class="navbar-link">Logout</a></li>
                    <?php else: ?>
                        <li><a href="login.html" class="navbar-link">Login</a></li>
                    <?php endif; ?>
                </ul>
            </nav>
        </div>
    </header>

    <!-- Secțiunea pentru informații despre utilizator și rezervările sale -->
    <section class="contact-section">
        <div class="container">
            <!-- Titlul secțiunii -->
            <h1 class="section-title">My account</h1>
            <div class="overlay">
                <div class="contact-wrapper">
                    <!-- Informații despre utilizator -->
                    <div class="contact-info">
                        <h2>User info</h2>
                        <p><strong>Username:</strong> <?php echo $user_data['Username']; ?></p>
                        <p><strong>Email:</strong> <?php echo $user_data['Email']; ?></p>
                     
                        <a href="change_password.php" class="btn">Change password</a>
                        
                        <button onclick="showEmailForm()" class="btn">Change email</button>
                        <form class="email-form" id="emailForm" method="POST" action="change_email.php">
                            <input type="email" id="new_email" name="new_email" placeholder="Introduceți adresa de email nouă" required>
                            <button type="submit">Change email</button>
                        </form>
                    </div>
                    
                
                </div>
            </div>
        </div>
    </section>

    <!-- Pop-up notificare -->
    <div id="popup" class="popup">
        <p><?php echo $popup_message; ?></p>
        <button onclick="closePopup()">Close</button>
    </div>

    <footer class="footer" style="position: absolute; bottom: 0; width: 100%;">
        <div class="container">
            <p>&copy; 2024 GameBox</p>
        </div>
    </footer>

    <!-- Scripturi suplimentare -->
    <script>
        function showEmailForm() {
            var form = document.getElementById("emailForm");
            form.style.display = "block";
        }

        function closePopup() {
            var popup = document.getElementById("popup");
            popup.classList.remove("visible");
        }

        document.addEventListener("DOMContentLoaded", function() {
            var popupMessage = "<?php echo $popup_message; ?>";
            if (popupMessage) {
                var popup = document.getElementById("popup");
                popup.classList.add("visible");
            }
        });
    </script>
</body>
</html>
