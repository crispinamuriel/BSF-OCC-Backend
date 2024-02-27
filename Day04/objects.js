console.log('objects');
const person = {
  firstName: 'Jane',
  lastName: 'Smith',
  birthdate: 'Aug. 22, 1999',
  hobbies: ['gardening', 'scrapbooking', 'jewelrymaking'],

  greet: function () {
    console.log(`hello my name is ${this.firstName}`);
  },
};
console.log(person);
console.log(person.birthdate);
console.log(person.hobbies);
person.greet();
