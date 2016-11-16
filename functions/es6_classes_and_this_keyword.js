/**
   Topic: classes in ES6, the 'this' keyword.
   Problem instructions: What will the console output after the two method calls? 
   Relevant resources:
 * - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Classes
 * - https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Operators/this
 * - https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor
*/

class Vehicle {
  constructor(model, age){
    this.model = model;
    this.age = age;
  }
  
  getModel() {
    return "I'm a(an) " + this.model;
  }
  
  getAge() {
    return "This vehicle is in usage for " + age + " years.";
  }
}

const car = new Vehicle('Audi', 12);

console.log(car.getModel());
console.log(car.getAge());

/*
Problem solution --> 
VG8gdW5kZXJzdGFuZCB3aHkgdGhpcyBoYXBwZW5zIHJlYWQgdGhlIGxhc3QgMiBsaW5rcyBJIGF0dGFj
aGVkLiBUaGF0IHNob3VsZCBjbGFyaWZ5IHdoeSB0aGUgZmlyc3QgY2FsbCB3b3JrcyBmaW5lIGJ1dCB3
ZSBnZXQgYW4gZXJyb3IgaW4gdGhlIHNlY29uZCBjYWxsLiBJZiwgYWZ0ZXIgcmVhZGluZyB0aG9zZSwg
aXQncyBzdGlsbCBub3QgcXVpdGUgY2xlYXIgd2hhdCBoYXBwZW5zLCBjb21lIHRvIG1lIGFuZCBJJ2xs
IGV4cGxhaW4uIA==
*/