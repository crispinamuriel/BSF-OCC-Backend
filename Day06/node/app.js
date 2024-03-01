// Main application app.js

// Import neccessary modules
const product = require('./product');
const cart = require('./cart');
const calculateTotal = require('./order');

// Add products to the cart
cart.addToCart(product[0]);
cart.addToCart(product[2]);

// Display cart information
console.log(cart.getCartItems());

// Calculate and display order amount
const totalAmount = calculateTotal(cart.getCartItems());
console.log('Total order amount', totalAmount);

// Clean and modular program that utilizes separate components for each process
