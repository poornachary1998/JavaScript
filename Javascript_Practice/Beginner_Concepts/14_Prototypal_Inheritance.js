// What is Prototype Inheritance?

// In JavaScript, objects can inherit properties and methods from other objects using the prototype chain.

// Every object in JavaScript has a hidden property called [[Prototype]] (accessible via __proto__ or Object.getPrototypeOf()), which refers to another object — its prototype.

// If you try to access a property or method that doesn’t exist on the object itself, JavaScript automatically looks for it in the prototype.

const animal = {
  eats: true,
  walk() {
    console.log("Animal walks");
  }
};

const dog = {
  bark() {
    console.log("Woof!");
  }
};

// Make dog inherit from animal
dog.__proto__ = animal;

console.log(dog.eats); // true (inherited from animal)
dog.walk(); // Animal walks
dog.bark(); // Woof!
