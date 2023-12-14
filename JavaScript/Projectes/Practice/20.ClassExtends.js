// Base class
class Animal {
    constructor(name) {
      this.name = name;
    }
  
    makeSound() {
      console.log("Some generic animal sound");
    }
  }
  
  // Derived class inheriting from Animal
  class Dog extends Animal {
    constructor(name, breed) {
      // Call the constructor of the base class (Animal) we use super() method
      super(name);
      this.breed = breed;
    }
  
    makeSound() {
      console.log("Woof woof!");
    }
  
    fetch() {
      console.log(`${this.name} is fetching the ball!`);
    }
  }
  
  // Create instances of the classes
  const animal = new Animal("Generic Animal");
  const dog = new Dog("Buddy", "Labrador");
  
  // Call methods on instances
  animal.makeSound(); // Output: Some generic animal sound
  dog.makeSound();    // Output: Woof woof!
  dog.fetch();        // Output: Buddy is fetching the ball!
  