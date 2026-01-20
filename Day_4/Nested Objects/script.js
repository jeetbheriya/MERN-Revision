// Nested Objects : Objects inside other object is called the nested objects, use to represent more complex data structures.

// const person = {
//     fullName : "Developer-Jeet",
//     age : 20,
//     isStudent : true,
//     hobbies : ["coding", "reading", "gaming"],
//     address : {
//         QNo : "B-200, Bhalar Township",
//         city : "Wani",
//         state : "Maharashtra",
//     }
// }

// console.log(person.fullName);
// console.log(person.hobbies[1]);
// console.log(person.address.city);

class Person{
    constructor(fullName, age, ...address){
        this.fullName = fullName;
        this.age = age;
        this.address = new Address(...address);
    }
}

class Address{
    constructor(street, city, state){
        this.street = street;
        this.city = city;
        this.state = state;
    }
}

const person1 = new Person("Developer-Jeet", 
                           20, "B-200, Bhalar Township", 
                           "Wani", 
                           "Maharashtra");

const person2 = new Person("Coder-Yash", 
                           21, "MQ-343, Bhalar Township", 
                           "Wani", 
                           "Maharashtra");
