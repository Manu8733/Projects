<?php
session_start();
?>
<!DOCTYPE html>
<html lang="ro">

<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Abous us</title>

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
     
      <nav class="navbar">
        <ul class="navbar-list">
          <li><a href="index.php" class="navbar-link">Home</a></li>
          <li><a href="index.php#news" class="navbar-link">News</a></li>
          <li><a href="desprenoi.php" class="navbar-link active">Abous us</a></li>
          <li><a href="Store.php" class="navbar-link">Store</a></li>   
          <?php  
          if (isset($_SESSION['username'])): ?>
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

  <!-- Principal -->
  <main>
    <section class="section hero"
        style="background-image: url('./assets/images/hero-bg-bottom.png') url('./assets/images/hero-bg-top.png')">
        <div class="container">

          

          
          

          <div class="hero-content">

            

      
          </div>

          <figure class="hero-banner">
            <img src="./assets/images/logoabout.png" width="550" height="650" loading="lazy" alt="hero banner"
              >
          </figure>

        </div>
      </section>
    <!-- Despre Noi -->
    <section class="about-us">
      <div class="container">
       

        <div class="values-section">
          <h1>About us</h1>
          <h3>GameBox is a Romanian gaming store that specializes in selling video games, consoles, and gaming accessories. Based in Romania, GameBox offers a variety of products for popular gaming platforms such as PlayStation, Xbox, Nintendo, and PC. The store focuses on providing both the latest game releases and a selection of older titles, catering to gamers of all ages and preferences.</h3>
          <h3>The store aims to create a community-driven experience by engaging with its customers through social media and various online platforms. Additionally, GameBox may offer pre-order options, allowing gamers to secure upcoming titles and receive special bonuses.</h3>
        </div>

        <div class="mission-section">
         
          
        </div>

        <div class="contact-section">
          <h2>Contact us</h2>
          <p>Address: 42 Gamer Street, Sector 3, Bucharest, Romania</p>
          <p>Phone: +40 31 123 4567</p>
          <p>Email: contact@gamebox.ro</p>
          <p>Website: www.gamebox.ro</p>
          <p>Opening hours:</p>
          <p>Monday - Friday: 10:00 - 19:00</p>
          <p>Saturday: 10:00 - 17:00</p>
          <p>Sunday: Closed</p>
          
        </div>
      </div>
    </section>
  </main>

  <!-- Subsol -->
  <footer class="footer">
    <div class="container">
      <p>&copy; 2024 GameBox</p>
    </div>
  </footer>

  <!-- JavaScript -->
  <script src="./assets/js/script.js"></script>
</body>
<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Heebo', sans-serif;
    background-image: url('./assets/images/ajutor1.jpg');
    background-size: cover;
    background-position: auto;
    background-attachment: auto;
    backdrop-filter: blur(2px);
  }

  .overlay {
    background-color: rgba(255, 255, 255, 0.5);
    padding: 50px;
    border-radius: 10px;
    backdrop-filter: blur(5px); 
  }
  
 
</style>
</head>

</html>
