// Inheritance

// Parent Class
class Animal {
  constructor(name) {
    this.name = name;
  }
  eat() {
    console.log(`${this.name} is eating.`);
  }
}

// Child class
class Dog extends Animal {
  bark() {
    console.log('Bark! Bark!');
  }
}

class Cat extends Animal {
  meow() {
    console.log('Meow! Meow!');
  }
}

const myAnimal = new Animal('Sparkie');
const myDog = new Dog('Princess');
const myCat = new Cat('Sebastian');

myAnimal.eat();
myDog.eat();
myDog.bark();
