class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }
  calculateArea() {
    throw new Error('Method not implemented.');
  }
}

class Rectangle extends Shape {
  displayFormula() {
    console.log(
      'To calculate the area of a rectangle, multiply the width by the height!'
    );
  }
  calculateArea() {
    console.log(`The area of this rectangle is ${this.width * this.height}`);
  }
}

const shape1 = new Rectangle(4, 5);
shape1.calculateArea();
shape1.displayFormula();

const myShape = new Shape();
myShape.calculateArea();
