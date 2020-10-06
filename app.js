// //object literals below
// let person1 = {
//     name: "Bob",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// };
// let person2 = {
//     name: "Sharon",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// };
// let person3 = {
//     name: "Bart",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// };
// let person4 = {
//     name: "Sarah",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// };
// let person5 = {
//     name: "Joe",
//     sayHello: function () {
//         console.log(`Hello! My name is ${this.name}`);
//     }
// };

// person1.sayHello();
// person2.sayHello();
// person3.sayHello();
// person4.sayHello();
// person5.sayHello();

//constructor function below
// function Person(name, age, city) {
//     this.name = name;
//     this.city = city;
//     this.age = age;
// }

// Person.prototype.question = function () {
//     console.log(`Hey! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
// }

// let person1 = new Person("Bob", "64", "Birmingham");
// person1.question();
// let person2 = new Person("Sharon", "61", "Birmingham");
// person2.question();
// let person3 = new Person("Bart", "38", "Birmingham");
// person3.question();
// let person4 = new Person("Sarah", "31", "Birmingham");
// person4.question();
// let person5 = new Person("Jow", "27", "Birmingham");
// person5.question();

// //using ES6 syntax
class PersonES6 {
    constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
    }

    questionES6() {
        console.log(`Guten Tag! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
    }
}

let person1 = new PersonES6("Bob", "64", "Birmingham");
person1.questionES6();
let person2 = new PersonES6("Sharon", "61", "Birmingham");
person2.questionES6();
let person3 = new PersonES6("Bart", "38", "Birmingham");
person3.questionES6();
let person4 = new PersonES6("Sarah", "31", "Birmingham");
person4.questionES6();
let person5 = new PersonES6("Jow", "27", "Birmingham");
person5.questionES6();