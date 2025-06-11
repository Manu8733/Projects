<?php
session_start();
?>
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>GameBox</title>

  <!-- 
    - favicon
  -->
  <link rel="icon" href="./favicon.svg" type="image/svg+xml">

  <!-- 
    - custom css link
  -->
  <link rel="stylesheet" href="./assets/css/style.css">

  <!-- 
    - google font link
  -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link
    href="https://fonts.googleapis.com/css2?family=Abril+Fatface&family=Comforter+Brush&family=Heebo:wght@400;500;600;700&display=swap"
    rel="stylesheet">

</head>

<body id="top">

  <!-- 
    - #HEADER
  -->
  <header class="header" data-header>
    <div class="container">
        <a href="index.php" class="logo"></a>
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


<style>
  body {
    margin: 0;
    padding: 0;
    font-family: 'Heebo', sans-serif;
    background-image: url('./assets/images/home2.jpg');
    background-size: cover;
    background-position: relative;
    background-attachment: fixed;
    backdrop-filter: blur(3px);
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
  }
</style>


</script>


  <main>
    <article>

      <!-- 
        - #Imagine mare
      -->

      <section class="section hero fade-in.appear"
        style="background-image: url('./assets/images/hero-bg-bottom.png') url('./assets/images/hero-bg-top.png')">
      
    
        <div class="container">
      
          <img src="./assets/images/home3.png" width="100" height="100" alt="Vector Shape" class="shape shape-1">
         
          <img src="./assets/images/home3.png" width="100" height="100" alt="Vector Fig" class="Fig fig2">
         
          <img src="./assets/images/home3.png" width="100" height="100" alt="Vector Fig" class="Fig fig3">

          <img src="./assets/images/home3.png" width="100" height="100" alt="Vector Shape" class="shape shape-2">

          <img src="./assets/images/home3.png" width="100" height="100" alt="Vector Shape" class="shape shape-3">

          <div class="hero-content">

            <p class="section-subtitle">Explore with us</p>

            <h2 class="hero-title">GameBox</h2>

            <p class="hero-text">
            Dive into the Ultimate Gaming Experience
            </p>

            <div class="btn-group">
              <a href="Store.php" class="btn btn-primary">Buy now</a>

              <a href="desprenoi.php" class="btn btn-outline">About us</a>
            </div>

          </div>

        

        </div>
      </section>





      <!-- 
  - #DESTINATION
-->

<section class="section destination" id="Games" >
  <div class="container">

    <h2 class="h2 section-title">Some of our games</h2>

    <ul class="destination-list">

      <li class="w-50">
        <a href="https://nierautomata.square-enix-games.com/en-us/age-gate/" class="destination-card">

          <figure class="card-banner">
            <img src="./assets/images/1.jpg" width="1140" height="1100" loading="lazy"
              alt="Malé, Maldives" class="img-cover">
          </figure>

          <div class="card-content">
            

            <h3 class="h3 card-title">NieR: Automata</h3>
          </div>

        </a>
      </li>

      <li class="w-50">
        <a href="https://playvalorant.com/en-gb/" class="destination-card">

          <figure class="card-banner">
            <img src="./assets/images/2.jpg" width="1140" height="1100" loading="lazy"
              alt="Bangkok, Thailand" class="img-cover">
          </figure>

          <div class="card-content">
            

            <h3 class="h3 card-title">Valorant</h3>
          </div>

        </a>
      </li>

      <li>
        <a href="https://deadbydaylight.com/" class="destination-card">

          <figure class="card-banner">
            <img src="./assets/images/3.jpg" width="1110" height="550" loading="lazy"
              alt="Kuala Lumpur, Malaysia" class="img-cover">
          </figure>

          <div class="card-content">
            

            <h3 class="h3 card-title">Dead by Daylight</h3>
          </div>

        </a>
      </li>

      <li>
        <a href="https://www.remnantgame.com/en/editions" class="destination-card">

          <figure class="card-banner">
            <img src="./assets/images/5.jpg" width="1110" height="550" loading="lazy"
              alt="Kathmandu, Nepal" class="img-cover">
          </figure>

          <div class="card-content">
            

            <h3 class="h3 card-title">Remnant 2</h3>
          </div>

        </a>
      </li>

      <li>
        <a href="https://www.supergiantgames.com/games/hades/" class="destination-card">

          <figure class="card-banner">
            <img src="./assets/images/4.jpg" width="1110" height="550" loading="lazy"
              alt="Jakarta, Indonesia" class="img-cover">
          </figure>

          <div class="card-content">
           

            <h3 class="h3 card-title">Hades</h3>
          </div>

        </a>
      </li>

    </ul>

  </div>
</section>

<!-- 
- #BLOG
-->

<section class="section blog" id="news">
  <div class="container">

    

    <h2 class="h2 section-title">Upcoming games</h2>

    <ul class="blog-list">

      <li>
        <div class="blog-card">
          <figure class="card-banner">
            <a href="https://www.rockstargames.com/VI">
              <img src="./assets/images/card1.jpg" width="740" height="518" loading="lazy"
                alt="A good traveler has no fixed plans and is not intent on arriving." class="img-cover">
            </a>
            <span class="card-badge">
              <ion-icon name="time-outline"></ion-icon>
              <time datetime="12-04">Cooming Soon</time>
            </span>
          </figure>
          <div class="card-content">
            <div class="card-wrapper">
              <div class="author-wrapper">

            <a href="https://www.rockstargames.com/VI" class="btn-link">
              <span>Read more</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </div>
      </li>

      <li>
        <div class="blog-card">
          <figure class="card-banner">
            
            <a href="https://www.farming-simulator.com/newsArticle.php?&news_id=544">
              <img src="./assets/images/card2.jpg" width="740" height="518" loading="lazy"
                alt="A good traveler has no fixed plans and is not intent on arriving." class="img-cover">
                
            </a>
            <span class="card-badge">
              <ion-icon name="time-outline"></ion-icon>
              <time datetime="12-04">18 November 2024</time>
              
            </span>
            
          </figure>
          <div class="card-content">
          <div class="card-wrapper">
            <a href="https://www.farming-simulator.com/newsArticle.php?&news_id=544" class="btn-link">
              <span>Read more</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </div>
      </li>

      <li>
        <div class="blog-card">
          <figure class="card-banner">
            <a href="https://playinzoi.com/en">
              <img src="./assets/images/card3.jpg" width="740" height="518" loading="lazy"
                alt="Un calator n-are data de intoarcere niciodata in tara." class="img-cover">
            </a>
            <span class="card-badge">
              <ion-icon name="time-outline"></ion-icon>
              <time datetime="12-04">Coming Soon</time>
            </span>
          </figure>
          <div class="card-content">
            <div class="card-wrapper">
            <a href="https://playinzoi.com/en" class="btn-link">
              <span>Read more</span>
              <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
            </a>
          </div>
        </div>
      </li>

    </ul>

  </div>
</section>





  <!-- 
    - #FOOTER
  -->

  <footer class="footer" style="background-image: url('./assets/images/footer-bg.png')">
    <div class="container">

      <div class="footer-top">

        

        <ul class="footer-list">



          <li>
            <a href="desprenoi.php" class="footer-link">About us</a>
          </li>

          <li>
            <a href="index.php#news" class="footer-link">News</a>
          </li>

          <li>
            <a href="index.php#Games" class="footer-link">Games</a>
          </li>

        </ul>

        <div class="footer-list">


          <form action="" class="newsletter-form">
            <input type="email" name="email" required placeholder="Email address" class="newsletter-input">

            <button type="submit" class="btn btn-primary">Aboneaza-te</button>
          </form>

        </div>

      </div>

      <div class="footer-bottom">

        

        <p class="copyright">
          &copy; 2024 <a href="#" class="copyright-link">GameBox</a>
        </p>

        <ul class="social-list">

          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="social-link">
              <ion-icon name="logo-facebook"></ion-icon>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="social-link">
              <ion-icon name="logo-twitter"></ion-icon>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="social-link">
              <ion-icon name="logo-instagram"></ion-icon>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="social-link">
              <ion-icon name="logo-linkedin"></ion-icon>
            </a>
          </li>

          <li>
            <a href="https://www.youtube.com/watch?v=dQw4w9WgXcQ" class="social-link">
              <ion-icon name="logo-google"></ion-icon>
            </a>
          </li>

        </ul>

      </div>

    </div>
  </footer>





  <!-- 
    - #GO TO TOP
  -->

  <a href="#top" class="go-top" data-go-top aria-label="Go To Top">
    <ion-icon name="chevron-up-outline"></ion-icon>
  </a>


  
</head>


  <!-- 
    - custom js link
  -->
  <script src="./assets/js/script.js"></script>

  <!-- 
    - ionicon link
  -->
  <script type="module" src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"></script>
  <script nomodule src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"></script>

</body>

</html>