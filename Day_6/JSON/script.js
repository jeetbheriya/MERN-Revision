const names = `["Jeet","Tanmay","Mihir","Yash"]`;
const jsonPeoples = ` [{"name":"Jeet","age":20,"isEmployed":true},{"name":"Tanmay","age":20,"isEmployed":false},{"name":"Mihir","age":20,"isEmployed":true}]`;

const jsonPerson = `{"name":"Jeet","age":20,"isEmployed":true,"hobbies":["Codiung","Gaming","Jellyfishing"]}`;

// const jsonString = JSON.stringify(names);
// console.log(names);
// console.log(jsonString);

// const jsonParse = JSON.parse(jsonPerson);
// console.log(jsonParse);

fetch("person.json")
    .then(response => response.json())
    .then(value => console.log(value));