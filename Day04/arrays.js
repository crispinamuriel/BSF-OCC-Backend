console.log('arrays');
// Intro to arrays

// Create an array with

const myArray = ['sailor moon', 'goku', 'caska', 'gutsu'];

// Accessing array elements

for (let i = 0; i < myArray.length; i++) {
  console.log(myArray[i]);
}

// Modifying array elements
myArray.push('mario');

// console.log(myArray);
// const myMario = myArray.pop();
// console.log(myMario);
console.log(myArray);
console.log(myArray.join(' - '));

const mySlice = myArray.slice(2);
console.log(mySlice);
