// Shopping Cart
let shirt = 17;
let shoes = 65;
let pants = 49;
let sunglasses = 13;

let cart = 0;

let discount = 0.1;

cart = shirt * 2 + shoes + pants + sunglasses * 3;

cart = cart - cart * discount;

console.log('Total:', cart);
