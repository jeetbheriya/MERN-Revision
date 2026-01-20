// // Constructor : Special method for defining the properties and    method of an object.

// const para = document.getElementById("car_info");

// function Cars(brand, model, year, color){
//     console.log("Inside Constructor");
//     console.log(this.brand = brand);
//     console.log(this.model = model);
//     this.year = year;
//     this.color = color;
//     this.owns = function(){
//         console.log(`I own a ${this.brand} ${this.model}`);
//     }

//     para.innerHTML = `Car Info : ${this.brand} ${this.model} ${this.year} ${this.color}`;
// }
// // To use the constructor we have to make the instance of the object.

// const myCar = new Cars("BMW", "M4", 2021, "Black");
// console.log("Accessing the details via instance:");
// console.log(myCar.year);
// console.log(myCar.color);
// console.log(myCar.owns())


// -----------------------------------CLASSES-----------------------------------//


// class Products{
//     constructor(name, price){
//         this.name = name;
//         this.price = price;
//     }

//     displayProducts(){
//         console.log(`Product Name: ${this.name} \nPrice: $${this.price.toFixed(2)}`);
//     }

//     calculateTotal(salesTax){
//         return (this.price + (this.price * salesTax));
//     }

// }

// const salesTax = 0.07;

// const product1 = new Products("MacBook Air M4", 890.90);

// product1.displayProducts();
// console.log(product1.calculateTotal(salesTax));

// -----------------------------------STATIC-----------------------------------//

// Static : Keywords used to define a static method or property, belongs to the class itself rather than to instance of the class.

// class Calculator{
//     static PI = Math.PI;
//     static sum(a, b){
//         return a + b;
//     }

//     static radius(r){
//         return this.PI * r * r;
//     }
// }

// console.log(Calculator.sum(5, 10));
// console.log(Calculator.radius(7));
// console.log(Calculator.PI.toFixed(5));


// -----------------------------------INHERITANCE-----------------------------------//

// Inheritance : Allows a new cass to inherit the properties and method of existing class(Parent Child relationship). Helps with code reusability.

// class Animal{
//     alive = true;

//     eat(){
//         console.log(`The ${this.name} is eating.`);
//     }

//     sleep(){
//         console.log(`The ${this.name} is sleeping.`)
//     }
// }

// class Rabbit extends Animal{
//     name = "Rabbit";

//     run(){
//         console.log(`The ${this.name} is running.`);
//     }
// }

// class Dog extends Rabbit{
//     name = "Dog";
// }

// const rabbit = new Rabbit();
// const dog = new Dog();

// console.log(rabbit.alive);
// console.log(rabbit.eat());
// console.log(dog.run());
// console.log(dog.sleep());


// -----------------------------------SUPER-----------------------------------//
// Super: It is ssimilar to that if this keyword,used to access the properties and methods of its parent class.

class Animal{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    move(speed){
        console.log(`The ${this.name} is moving at ${speed} km/h.`);
    }
}

class Rabbit extends Animal{
    constructor(name, age, runSpeed){
        super(name, age);
        this.runSpeed = runSpeed;
    }

    run(){
        super.move(this.runSpeed);    
    }
}

class Fish extends Animal{
    constructor(name, age, swinSpeed){
        super(name, age);
        this.swinSpeed = swinSpeed;
    }

    swim(){
        super.move(this.swinSpeed);
    }
}

class Pigeote extends Animal{
    constructor(name, age, flySpeed){
        super(name, age);
        this.flySpeed = flySpeed;
    }

    fly(){
        supermove(this.flySpeed);
    }
}

const rabbit = new Rabbit("Bunny", 1, 25);
const fish = new Fish("Goldie", 2, 15);
const pigeon = new Pigeote("Pia", 3, 30);

console.log(rabbit.run(25));
console.log(fish.swim(15));
console.log(pigeon.fly(30));