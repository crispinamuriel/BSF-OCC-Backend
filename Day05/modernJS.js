// New JS ES6 features!

// Arrow Functions
// handling events with arrow functions make the syntax easier to read
const greet = (name) => {
  console.log('I am an arrow function');
  console.log(`Hello, ${name}!`);
};
// greet('Crispina');

const square = (num) => num * num;

// console.log(square(2));
// Classes

// Spread and Rest operators
// Rest
function myRestFunction(first, ...args) {
  console.log(first);
  console.log(args);
}
// myRestFunction(1, 2, 3, 4, 5);

// Destruction { key } = Object

// Array method
// Filter
const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const even = myNums.filter((num) => num % 2 == 0);
console.log(even);

const odd = myNums.filter((num) => num % 2 != 0);
console.log(odd);

// String methods
// Split - Split a string into an array of strings!

const message = 'Hello, I am the best!';

const splitArr = message.split(' ');
console.log(splitArr);

// Includes method for strings!
const sentence = 'The quick brown fox jumped over the lazy dog.';
const containsWord = sentence.includes('Fox');
const containsWord2 = sentence.includes('fox');
console.log(containsWord, containsWord2);

// length (property on every sting!)

console.log(sentence.length);
console.log(typeof sentence.length);

// toLowerCase() || toUpperCase()
console.log('hello'.toUpperCase());
console.log('HELLO KITTY'.toLowerCase());

// trim
const myWhiteSpaceStr = '        hello    friend  ';
console.log(myWhiteSpaceStr);
console.log(myWhiteSpaceStr.trim());

// Math operator
// max and min
const maxNumber = Math.max(10, 5, 20);
console.log(maxNumber);
const minNumber = Math.min(10, 5, 20);
console.log(minNumber);
// Round
console.log(Math.round(3.6));

// rounding down => Math.floor();
console.log(Math.floor(3.6));

// rounding up => Math.ceil();
console.log(Math.ceil(5.1));

// Math.random
console.log('my random number:', Math.random());
// Nested Math methods
console.log(Math.round(Math.random() * 10 + 1));

// Other
// toFixed() => gives a rounded decimal / float to a specific decimal place

const price = 40.100394;
console.log(price.toFixed(2));

// date
const currDate = new Date();
console.log(currDate);

// create a date (last Christmas!)
console.log(new Date(2023, 11, 25));
