// A higher order function is a Function that can take another function as an argument and
function higherOrderFunction(callback) {
  console.log('This is the higher order function speaking');
  callback();
}

const myCallback = () => {
  console.log('This is the callback speaking: hello!');
};

higherOrderFunction(myCallback);
