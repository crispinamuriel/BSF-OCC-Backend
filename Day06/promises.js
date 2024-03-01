// Promises
const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 1 is completed');
      resolve();
    }, 5000);
  });
};

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 2 is completed');
      resolve();
    }, 5000);
  });
};

const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 3 is complete');
      resolve();
    }, 4000);
  });
};

// Chaining Promises
// .then allows us to specifiy what will happen next!
step1()
  .then(step2)
  .then(step3)
  .then(() => {
    console.log('All Steps are Complete!!!');
  })
  .catch((e) => {
    console.log('Error', e);
  });
