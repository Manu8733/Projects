<?php
session_start();

// Dacă formularul de adăugare în coș a fost trimis
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    // Dacă s-a trimis cererea de adăugare
    if (isset($_POST['game_name']) && isset($_POST['game_price']) && isset($_POST['game_image'])) {
        $game_name = $_POST['game_name'];
        $game_price = $_POST['game_price'];
        $game_image = $_POST['game_image'];

        // Dacă coșul nu este deja setat în sesiune, inițializează-l
        if (!isset($_SESSION['cart'])) {
            $_SESSION['cart'] = [];
        }

        // Adaugă jocul în coș
        $_SESSION['cart'][] = ['name' => $game_name, 'price' => $game_price, 'image' => $game_image];
    }

    // Dacă s-a trimis cererea de eliminare
    if (isset($_POST['remove_game'])) {
        $remove_game_index = $_POST['remove_game'];

        // Elimină jocul de la indexul specificat
        if (isset($_SESSION['cart'][$remove_game_index])) {
            unset($_SESSION['cart'][$remove_game_index]);

            // Reindexează array-ul pentru a evita probleme la eliminarea altor elemente
            $_SESSION['cart'] = array_values($_SESSION['cart']);
        }
    }

    // Redirecționează utilizatorul înapoi la pagina coșului după actualizare
    header('Location: basket.php');
    exit;
}

// Calculează totalul
$total = 0;
if (isset($_SESSION['cart'])) {
    foreach ($_SESSION['cart'] as $game) {
        $total += $game['price'];
    }
}
?>
<!DOCTYPE html>
<html lang="ro">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GameBox - Basket</title>

  <!-- Favicon -->
  <link rel="icon" href="./favicon.svg" type="image/svg+xml">

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
      background-image: url('./assets/images/StoreBkgrd.jpg');
      backdrop-filter: blur(5px);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
    }

    .header {
      position: relative !important;
      z-index: 1;
    }

    .basket-list {
      color: #fff; /* Setează culoarea textului din lista coșului la alb */
    }

    .basket-list .btn-remove {
      background-color: #dc3545; /* Opțional: culoare de fundal pentru butoanele de eliminare */
      color: #fff; /* Culoarea textului din butoanele de eliminare */
    }

    .basket-list .btn-remove:hover {
      background-color: #c82333; /* Opțional: culoare de fundal pentru butoanele de eliminare la hover */
    }

    .basket-item-image {
      width: 50px; /* Ajustează dimensiunea imaginii după preferință */
      height: auto;
      margin-right: 10px; /* Spațiu între imagine și text */
      vertical-align: middle; /* Alinierea imaginii cu textul */
    }
    body {
      margin: 0;
      padding: 0;
      font-family: 'Heebo', sans-serif;
      background-image: url('./assets/images/StoreBkgrd.jpg');
      backdrop-filter: blur(5px);
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      
    }

    .overlay {
      background-color: rgba(255, 255, 255, 0.5);
      padding: 50px;
      border-radius: 10px;
      backdrop-filter: blur(5px);
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

    .contact-form .newsletter-input,
    .contact-form .btn {
      display: block;
      width: calc(100% - 20px);
      margin: 10px auto;
      box-sizing: border-box;
    }

    .contact-form .newsletter-input {
      padding: 10px !important;
      border: 1px solid #ccc;
      border-radius: 5px;
      font-size: 16px;
      background-color: rgba(255, 255, 255, 0.8);
      color: #333;
    }

    .contact-form .btn {
      padding: 10px;
      background-color: #007bff;
      border: none;
      color: #fff;
      cursor: pointer;
      border-radius: 5px;
      font-size: 16px;
    }

    .contact-form .btn:hover {
      background-color: #0056b3;
    }

    .contact-wrapper {
      display: flex;
      justify-content: space-between;
      align-items: center;
    }

    .contact-info {
      flex: 1;
      margin-right: 50px;
    }

    .contact-form {
      flex: 1;
      margin-left: 50px;
    }

    .form-row {
      display: flex;
      justify-content: space-between;
    }

    .form-row .newsletter-input {
      width: calc(50% - 10px);
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
      .contact-form {
        margin: 0;
        width: 100%;
      }

      .form-row {
        flex-direction: column;
      }

      .form-row .newsletter-input {
        width: 100%;
        margin-bottom: 10px;
      }
    }
    .footer {
    position:sticky;
    bottom: auto;
    left: 0;
    width: 100%;
    background-color: #333;
    color: #fff;
    text-align: center;
    padding: 20px 0;
    z-index: 1000;
}

html, body {
    height: 100%;
    margin: 0;
    display: flex;
    flex-direction: column;
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

    .basket-list {
  list-style: none; /* Elimină stilul de listă implicit */
  padding: 0;
}

html, body {
  height: 100%;
  margin: 0;
  display: flex;
  flex-direction: column;
}

.container {
  flex: 1;
  padding: 20px;
}

.section.basket {
  flex: 1;
  overflow-y: auto; /* Permite scroll pe verticală */
}

.footer {
  position: relative;
  bottom: 0;
  left: 0;
  width: 100%;
  background-color: #333;
  color: #fff;
  text-align: center;
  padding: 0px 0;
}

.checkout-button-container {
            display: flex;
            justify-content: flex-end;
            margin-top: 20px;
        }

.checkout-button {
            background-color: #007bff;
            color: #fff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
            text-decoration: none;
            font-size: 16px;
            transition: background-color 0.3s ease;
        }

        .checkout-button:hover {
            background-color: #0056b3;
        }

.basket-list li {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0.1); /* Fundal semi-transparent */
  border-radius: 8px; /* Colțuri rotunjite */
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1); /* Adaugă o umbră subtilă */
  color: #fff; /* Culoarea textului alb */
}

.basket-list li strong {
  font-size: 18px; /* Mărește fontul pentru total */
}

.basket-list .game-info {
  flex-grow: 1; /* Asigură că informațiile despre joc ocupă cât mai mult spațiu */
  font-size: 16px;
  margin-right: 10px; /* Adaugă spațiu între informații și buton */
}

.basket-list .game-price {
  font-weight: bold;
  font-size: 18px; /* Font puțin mai mare pentru preț */
}

.basket-list .btn-remove {
  background-color: #dc3545;
  color: #fff;
  padding: 8px 12px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.basket-list .btn-remove:hover {
  background-color: #c82333;
}

  </style>
</head>

<body id="top">

  <!-- Antet -->
  <header class="header" data-header>
    <div class="container">
      <a href="index.php" class="logo"></a>
      <nav class="navbar">
        <ul class="navbar-list">
          <li><a href="index.php" class="navbar-link">Home</a></li>
          <li><a href="index.php#news" class="navbar-link">News</a></li>
          <li><a href="desprenoi.php" class="navbar-link">About us</a></li>
          <li><a href="Store.php" class="navbar-link active">Store</a></li>
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

  <section class="section basket" id="Basket">
    <div class="container">
      <h2 class="h2 section-title">Your Basket</h2>

      <ul class="basket-list">
        <?php if (isset($_SESSION['cart']) && count($_SESSION['cart']) > 0): ?>
          <?php foreach ($_SESSION['cart'] as $index => $game): ?>
            <li>
              <img src="<?= $game['image']; ?>" alt="<?= $game['name']; ?>" class="basket-item-image">
              <?= $game['name']; ?> - $<?= number_format($game['price'], 2); ?>
              <!-- Formular pentru eliminarea unui joc -->
              <form method="POST" action="basket.php" style="display:inline;">
                <input type="hidden" name="remove_game" value="<?= $index; ?>">
                <button type="submit" class="btn-remove">Remove</button>
              </form>
            </li>
          <?php endforeach; ?>
          <li><strong>Total: $<?= number_format($total, 2); ?></strong></li>
        <?php else: ?>
          <li>Your basket is empty.</li>
        <?php endif; ?>
      </ul>
       <!-- Buton de plată -->
       <div class="checkout-button-container">
              <a href="checkout.html" class="checkout-button">Proceed to Checkout</a>
    </div>

  </section>

  <!-- Pop-up pentru confirmare -->
  <div class="popup" id="popup">
    <p>Rezervarea a fost trimisă cu succes!</p>
    <button onclick="closePopup()">OK</button>
  </div>

  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 GameBox</p>
    </div>
  </footer>

  <!-- JavaScript -->
  <script>
    function showPopup(event) {
      event.preventDefault(); 
      document.getElementById('popup').classList.add('visible');
      setTimeout(() => {
        document.getElementById('bookingForm').submit();
      }, 2000); 
      return false; 
    }

    function closePopup() {
      document.getElementById('popup').classList.remove('visible');
    }
  </script>

</body>

</html>
