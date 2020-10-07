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
// let person5 = new Person("Joe", "27", "Birmingham");
// person5.question();

// // //using ES6 syntax
// class PersonES6 {
//     constructor(name, age, city) {
//     this.name = name;
//     this.age = age;
//     this.city = city;
//     }

//     questionES6() {
//         console.log(`Guten Tag! My name is ${this.name} I am ${this.age} years old and live in ${this.city}.`)
//     }
// }

// let person1 = new PersonES6("Bob", "64", "Birmingham");
// person1.questionES6();
// let person2 = new PersonES6("Sharon", "61", "Birmingham");
// person2.questionES6();
// let person3 = new PersonES6("Bart", "38", "Birmingham");
// person3.questionES6();
// let person4 = new PersonES6("Sarah", "31", "Birmingham");
// person4.questionES6();
// let person5 = new PersonES6("Joe", "27", "Birmingham");
// person5.questionES6();

class Vehicle {
    constructor(manufacturer, wheelsNum) {
        this.manufacturer = manufacturer;
        this.wheelsNum = wheelsNum;
    }
    aboutVehicle() {
        console.log(`The vehicle is made by ${this.manufacturer} with ${wheelsNum}.`)
    }
}

class Truck extends Vehicle {
    constructor(manufacturer, wheelsNum, doors, bed) {
        super(manufacturer, wheelsNum);
        this.doors = doors;
        this.bed = bed;
    }
    aboutVehicle() {
        console.log(`The vehicle is made by ${this.manufacturer} and has ${this.wheelsNum} wheels. It has ${this.doors} doors. Does it have a truck bed?  ${this.bed}`)
    }
}

class Sudan extends Vehicle {
    constructor(manufacturer, wheelsNum, size, mpg) {
        super(manufacturer, wheelsNum);
        this.size = size;
        this.mpg = mpg;
    }
    aboutVehicle() {
        console.log(`The vehicle is made by ${this.manufacturer} and has ${this.wheelsNum} wheels. Its ${this.size} size and has ${this.mpg} mpg.`)
    }
}

class Motorcycle extends Vehicle {
    constructor(manufacturer, wheelsNum, handlebars, hasDoors) {
        super(manufacturer, wheelsNum);
        this.handlebars = handlebars;
        this.hasDoors = hasDoors;
    }
    aboutVehicle() {
        console.log(`The vehicle is made by ${this.manufacturer} with ${this.wheelsNum} wheels. Does it have handlebars? ${this.handlebars} Does it have doors? ${this.hasDoors};`)
    }
}

let truck = new Truck("Chevy", 4, 2, true);
let sudan = new Sudan("Toyota", 4, "small", 35);
let motorcycle = new Motorcycle("Kia", 2, true, false);

console.log(truck);
console.log(sudan);
console.log(motorcycle);

truck.aboutVehicle();
sudan.aboutVehicle();
motorcycle.aboutVehicle();
