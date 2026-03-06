<?php
require 'vendor/autoload.php';

// Set your Stripe secret key
\Stripe\Stripe::setApiKey('sk_test_your_key_here');

session_start();

// Calculate the total price
if (isset($_SESSION['cart'])) {
    $cart = $_SESSION['cart'];
    $totalPrice = 0;
    foreach ($cart as $game) {
        $totalPrice += $game['price'];
    }

    // Create a Stripe Checkout session
    $session = \Stripe\Checkout\Session::create([
        'payment_method_types' => ['card'],
        'line_items' => [[
            'price_data' => [
                'currency' => 'usd',
                'product_data' => [
                    'name' => 'GameBox Purchase',
                ],
                'unit_amount' => $totalPrice * 100,  // Convert dollars to cents
            ],
            'quantity' => 1,
        ]],
        'mode' => 'payment',
        'success_url' => 'http://localhost/GameBox/success.php',
        'cancel_url' => 'http://localhost/GameBox/cancel.php',
    ]);

    // Redirect to Stripe Checkout
    header('Location: ' . $session->url);
    exit;
} else {
    echo "Your cart is empty or not found.";
}
