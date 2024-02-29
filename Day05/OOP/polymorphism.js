// Polymorphism!
class Animal {
  makeSound() {
    return 'Animal makes a noise!';
    s;
  }
}

class Dog extends Animal {
  makeSound() {
    console.log(super.makeSound() + 'Dog makes a barking noise!');
  }
}
class Cat extends Animal {
  makeSound() {
    console.log(super.makeSound() + 'Cat makes a barking noise!');
  }
}

const myAnimal = new Animal();
console.log(myAnimal.makeSound());
const myDog = new Dog();
myDog.makeSound();
const cat = new Cat();
cat.makeSound();
