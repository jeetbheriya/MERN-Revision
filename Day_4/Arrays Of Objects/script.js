// const Fruits = [
//   { name: "Apple", color: "Red", price: 1.2 },
//   { name: "Banana", color: "Yellow", price: 0.5 },
//   { name: "Grapes", color: "Purple", price: 2.0 },
//   { name: "Orange", color: "Orange", price: 1.0 },
//   { name: "Mango", color: "Yellow", price: 1.5 },
// ];

// // reduce()

// const maxPrice = Fruits.reduce(
//   (max, fruit) => {
//     return fruit.price > max ? fruit.price : max;
//   }, 0);

// console.log(maxPrice);

// --------------SORTING--------------//

// sort() = method used to sort element of an array in place. Sorts elements as strings in lexicographic order, not alphabetical order.   {lexivographical order = (alphabetes + numbers + symbols)} as strings.

let Fruits = ["Apple", "Kiwi", "Banana", "Mango", "Grapes"];
let Numbers = [5, 10, 3, 8, 1, 4];

console.log(Fruits.sort());
console.log(Numbers.sort((a, b) => a - b));


const persons = [
    {name: "John", age: 25, gpa: 3.5},
    {name: "Alice", age: 30, gpa: 3.8},
    {name: "Bob", age: 20, gpa: 3.2}
]

console.log(persons.sort((a, b) => a.gpa - b.gpa));

