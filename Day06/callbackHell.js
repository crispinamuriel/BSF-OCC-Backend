const step1 = (callback) => {
  setTimeout(() => {
    console.log('Step 1 is completed!', typeof callback);
    // callback();
  }, 5000);
};

const step2 = (callback) => {
  setTimeout(() => {
    console.log('Step 2 is completed!', typeof callback);
    // callback();
  }, 5000);
};

const step3 = () => {
  setTimeout(() => {
    console.log('Step 3 is completed!');
  }, 7000);
};

// Nested callbacks
// step1(() => {
//   step2(() => {
//     step3();
//     console.log('Request is comlete and all steps are done!');
//   });
// });

step1(step2(step3()));
