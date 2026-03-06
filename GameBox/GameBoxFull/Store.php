<?php
session_start();

// Lista jocurilor
$games = [
  ['name' => 'Nier Automata', 'price' => 49.99, 'image' => './assets/images/1.jpg', 'link' => 'https://nierautomata.square-enix-games.com/en-us/age-gate/'],
  ['name' => 'Valorant', 'price' => 0.5, 'image' => './assets/images/2.jpg', 'link' => 'https://playvalorant.com/en-gb/'],
  ['name' => 'Dead by Daylight', 'price' => 19.99, 'image' => './assets/images/3.jpg', 'link' => 'https://deadbydaylight.com/'],
  ['name' => 'Remnant: From the Ashes', 'price' => 29.99, 'image' => './assets/images/5.jpg', 'link' => 'https://www.remnantgame.com/en/editions'],
  ['name' => 'Hades', 'price' => 24.99, 'image' => './assets/images/4.jpg', 'link' => 'https://www.supergiantgames.com/games/hades/'],
  ['name' => 'Elden Ring', 'price' => 59.99, 'image' => './assets/images/6.jpeg', 'link' => 'https://en.bandainamcoent.eu/elden-ring/elden-ring'],
];

?>
<!DOCTYPE html>
<html lang="ro">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GameBox - Store</title>

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

    .author-wrapper h3,
    .author-wrapper p {
      color: #fff; /* Setează culoarea textului la alb */
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
          <li><a href="Store.php" class="navbar-link active">Store</a></li>
          <?php 
         
          if (isset($_SESSION['username'])): ?>
          <li><a href="basket.php" class="navbar-link">Basket</a></li>
          <li><a href="ContulMeu.php" class="navbar-link">My account</a></li>
          <li><a href="logout.php" class="navbar-link">Logout</a></li>
          
      <?php endif; ?>
          <?php 
                   if (!isset($_SESSION['username'])): ?>
                   <li><a href="login.html" class="navbar-link">Login</a></li>
           <?php endif; ?>
        </ul>
      </nav>
    </div>
  </header>

   <section class="section destination" id="Games">
    <div class="container">
      <h2 class="h2 section-title">Store</h2>
      <ul class="destination-list">
        <?php foreach ($games as $game): ?>
          <li>
            <div class="blog-card">
              <figure class="card-banner">
                <a href="<?= $game['link']; ?>" class="destination-card">
                  <img src="<?= $game['image']; ?>" width="740" height="518" loading="lazy" alt="<?= $game['name']; ?>" class="img-cover">
                </a>
              </figure>
              <div class="card-content">
                <div class="card-wrapper">
                  <div class="author-wrapper">
                    <h3><?= $game['name'] ; ?></h3>
                    <p>Price: $<?= number_format($game['price'], 2); ?></p>
                    <form method="POST" action="basket.php">
                      <input type="hidden" name="game_name" value="<?= $game['name'] ; ?>">
                      <input type="hidden" name="game_price" value="<?= $game['price']; ?>">
                      <input type="hidden" name="game_image" value="<?= $game['image']; ?>">
                      <?php if (isset($_SESSION['username'])): ?>
                        <button type="submit" class="btn">Buy</button>
                      <?php else: ?>
                        <a href="login.html" class="btn-link">Please login</a>
                      <?php endif; ?>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </li>
        <?php endforeach; ?>
      </ul>
    </div>
  </section>

  <!-- Pop-up pentru confirmare -->
  <div class="popup" id="popup">
    <p>Rezervarea a fost trimisă cu succes!</p>
    <button onclick="closePopup()">OK</button>
  </div>

  <!-- Subsol -->
  <footer class="footer" style="position: absolute; bottom: -3%; width: 100%;">
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