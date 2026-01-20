// getters : special methods that maked a property readable.
// setters : special methods that maked a property writable.

// Validate and modify the value when reading or writing a property.

// class Rectangle{
//     constructor(length, width){
//         this.length = length;
//         this.width = width;
//     }

//     set length(newLength){
//         if(newLength > 0){
//             this._length = newLength;
//         }else{
//             console.error("Length must be positive.")
//         }
//     } 

//     set width(newWidth){
//         if(typeof newWidth === "number"){
//             this._width = newWidth;
//         }else{
//             console.error("Width must be a number.")
//         }
//     }

//     get length(){
//         return `Length : ${this._length.toFixed(2)}`;
//     }

//     get width(){
//         return `Width : ${this._width.toFixed(2)}`;
//     }

//     get area(){
//         return (this._length * this._width).toFixed(2);
//     }
// }

//  const rectangle = new Rectangle(10, 5);

//  rectangle.length = -5;

//  console.log(rectangle.length, rectangle.width);
//   console.log(rectangle.area);

// -------------------------------------------------------------- //

// class Person{
//     constructor(firstName, lastName, age){
//         this.firstName = firstName;
//         this.lastName = lastName;
//         this.age = age;
//     }

//     set firstName(newFirstName){
//         if(typeof newFirstName === "string" && newFirstName.length > 0){
//             this._firstName = newFirstName;
//         }else{
//             console.error("First name must be a non-empty string.");
//         }
//     }

//     set lastName(newLastName){
//         if(typeof newLastName === "string" && newLastName.length > 0){
//             this._lastName = newLastName;
//         }else{
//             console.error("Last name must be a non-empty string.");
//         }
//     }

//     set age(newAge){
//         if(typeof newAge === "number" && newAge >= 0){
//             this._age = newAge;
//         }else{
//             console.error("Age must be a non-negative number.");
//         }   
//     }

//     get firstName(){
//         return this._firstName;
//     }
//     get lastName(){
//         return this._lastName;
//     }
//     get age(){
//         return this._age;
//     }
// }

// const person = new Person("Jeet", "Bheriya", 20);
// console.log(person.firstName, person.lastName, person.age);


// -----------------------DESTRUCTURING----------------------//

// Destructuring : extract data from the arrays or objects and then assign them to variables in a convinient way.
// [] : used to perform array destruction.
// {} : used to perform object dextruction.

// ---------------Example 1----------------//
// SWAP THE VALUES OF TWO VARIABLES //
let a = 1;
let b = 2;

console.log("Before Swapping : ");
console.log(a, b);

[a, b] = [b, a];

console.log("After Swapping : ")
console.log(a, b);

// ---------------Example 2----------------//
// SWAP THE ELEMENTS OF TWO ARRAY

const colors = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink"];

console.log("Before Swapping : ");
console.log(colors);

[colors[0], colors[2]] = [colors[2], colors[0]];

console.log("After Swapping : ");
console.log(colors);

// ---------------Example 3----------------//
// ASSIGN ARRAY ELEMENTS TO VARIABLES

const colors2 = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink"];

const [firstColor, secondColor, thirdColor] = colors2;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// ---------------Example 4----------------//
// EXTRACT VALUES FROM OBJECTS

const person1 = {
    name: "Jeet Bheriya",
    age: 20,
    profession: "Web Developer"
}

const person2 = {
    name: "John Doe",
    age: 25,
}

// const {name, age, profession} = person1;
const {name, age, profession = "Unemployed"} = person2;

console.log(name);
console.log(age);
console.log(profession);


// ---------------Example 5----------------//
// DESTURCTUR IN FUNCTION PARAMETERS

function displayPerson({name, age, profession = "unemployed"}){
    console.log(`Name : ${name}, Age : ${age}, Profession : ${profession}`);
}

displayPerson(person1);
displayPerson(person2);