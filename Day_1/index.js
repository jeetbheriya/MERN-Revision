// Variables

let fullName = "JEET RAKESH BHERIYA";
let age = 21;
let isStudent = true;

// using DOM
document.getElementById("p1").textContent = `Name : ${fullName}`;
document.getElementById("p2").textContent = `Age : ${age}`;
document.getElementById("p3").textContent = `Are you a student? : ${isStudent}`;

// How to accept user input
let username = prompt("Enter you user name");
console.log(`Hey ${username}.`);