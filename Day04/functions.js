// Functions - grouping of javascript statements inside reusable blocks of code

console.log('my functions!');

//Functions - Allows us to write reusable block of codes and also provide ways to organize and structure codes

//Declaring a function
function greet() {
  console.log('Hello to the world of functions!');
}

//Calling a function
greet();

//Function declaration is hoisted
function functionDeclaration() {
  console.log('Hello! I am a function declaration!');
}
// Function expression is not hoisted

const myFunction = () => {
  console.log('Hello, I am a function expression');
};

myFunction();

//Functions with parameter
function greetme(name) {
  console.log('Hello', name + '!');
}
greetme('Regel');

function sum(a, b) {
  console.log('The sum of a and b is: ', a + b);
}

sum(10, 20);
