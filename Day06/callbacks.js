// callback
const getData = (callback) => {
  setTimeout(() => {
    const data = 'This is the data';
    callback(data);
  }, 6000);
};

const myCallback = (data) => {
  console.log('Processed data', data.toUpperCase());
  return data.toUpperCase();
};

try {
  const processedData = await getData(myCallback);
  console.log(processedData);
} catch (e) {
  console.log('Error', e);
}
