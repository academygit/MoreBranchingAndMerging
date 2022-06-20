class Person {
  constructor(name, age, pet) {
    this.name = name;
    this.age = age;
    this.pet = pet;
  }
  greet() {
    console.log(`Hello, my name is ${this.name}`);
    console.log(`I am ${this.age} years old`);
    console.log(`My pet is ${this.pet}`);
  }
}
