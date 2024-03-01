// Async / Await
const step1 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 1 is complete!');
      resolve(); //
    }, 3000);
  });
};

const step2 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 2 is complete!');
      resolve();
    }, 3000);
  });
};
const step3 = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log('Step 3 is complete!');
      resolve();
    }, 3000);
  });
};
// Add async keyword before the parens, makes it asynchronous! There is a process that will take time and we should wait
const performSteps = async () => {
  try {
    await step1();
    await step2();
    await step3();
    console.log('All steps are completed');
  } catch (e) {
    console.error('Error:', e);
  }
};
performSteps();
