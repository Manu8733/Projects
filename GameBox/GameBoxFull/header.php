<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ro">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Rezervari - RomanianTour</title>

  <!-- Favicon -->
  <link rel="shortcut icon" href="./favicon.svg" type="image/svg+xml">

  <!-- Stiluri personalizate -->
  <link rel="stylesheet" href="./assets/css/style.css">

  <!-- Google Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Comforter+Brush&family=Heebo:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>

<body id="top">

  <!-- Antet -->
  <header class="header" data-header>
    <div class="container">
      <a href="index.php" class="logo">RomanianTour</a>
      <nav class="navbar">
        <ul class="navbar-list">
          <li><a href="index.php" class="navbar-link">Acasă</a></li>
          <li><a href="desprenoi.php" class="navbar-link">Despre Noi</a></li>
          <li><a href="index.php#news" class="navbar-link">Tururi</a></li>
          <li><a href="Store.php" class="navbar-link active">Rezervari</a></li>
          <?php
          if (isset($_SESSION['username'])) {
            echo '<li><a href="#" class="navbar-link">Conectat ca ' . htmlspecialchars($_SESSION['username']) . '</a></li>';
            echo '<li><a href="logout.php" class="navbar-link">Deconectează-te</a></li>';
          } else {
            echo '<li><a href="login.html" class="navbar-link">Conectează-te</a></li>';
          }
          ?>
        </ul>
      </nav>
    </div>
  </header>
</body>
</html>
