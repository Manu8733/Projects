# GameBox - Video Game E-commerce Website

## Overview

**GameBox** is a dynamic and interactive web platform for browsing, purchasing, and playing video games. Built using **PHP** for backend functionality, **phpMyAdmin/MySQL** for database management, and **JavaScript** for frontend interactivity, the site includes all essential features of a modern e-commerce and gaming platform.

## Key Features

- **User Authentication**
  - Secure login with hashed passwords
  - Registration with email 
  - Ability to change password and email address

- **Game Store Functionality**
  - Browse a collection of video games
  - Add games to a shopping cart
  - Simulated payment method

- **Account Management**
  - Update profile information
  - View purchase history
  - Password reset functionality

- **Database Integration**
  - User and game data stored in MySQL, managed via phpMyAdmin
  - Login and register functionality integrated with the database
  - Games, cart items, and transactions linked to user accounts

- **Frontend Technologies**
  - HTML/CSS/JavaScript for responsive and interactive user interface
  - AJAX used for dynamic content updates without page reloads

## Technologies Used

- **Backend:** PHP
- **Database:** MySQL (managed via phpMyAdmin)
- **Frontend:** HTML, CSS, JavaScript

## Setup Instructions

1. **Clone the project files** into your local server directory (e.g., `htdocs` for XAMPP).
2. **Import the SQL file** into phpMyAdmin to create the required database and tables.
3. **Configure database connection** settings in the PHP files (`config.php` or similar).
4. **Run the server** using XAMPP or any compatible local web server.
5. **Access the site** via `http://localhost/GameBox` (or the appropriate local URL).

## Folder Structure

- `/php/` – Contains all PHP scripts for login, register, account updates, etc.
- `/js/` – JavaScript files for UI interactivity and AJAX calls
- `/css/` – Styling files
- `/assets/` – Images and media used on the site
- `/games/` – Game-related files or links
- `/db/` – SQL database setup files (optional)

## Future Improvements

- Add real payment gateway integration (e.g., Stripe or PayPal)
- Implement reviews and ratings for games
- Introduce admin panel for game and user management
- Enable multiplayer or online game functionalities

## Author
Bejerea Emanuel  
3rd-year student – Automation and Applied Informatics  
Faculty of Automation and Computers


