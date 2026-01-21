// DOM navigation : The process of navigating through the structure of HTML document using JavaScript.

// .firstElemenetChlid
const ulElements = document.querySelectorAll("ul");
ulElements.forEach(ulElement => {
    const firstName = ulElement.firstElementChild;
    firstName.style.backgroundColor = "yellow"
});

// .lastElementChild
ulElements.forEach(ulElement => {
    const lastName = ulElement.lastElementChild;
    lastName.style.backgroundColor = "blue"
});

// .nextElementSibling
const nextElement = document.getElementById("Apple");
const nextSibling = nextElement.nextElementSibling;
nextSibling.style.backgroundColor = "red";

// .previousElemenetSibling
const prevElement = document.getElementById("pie");
const prevSibling = prevElement.previousElementSibling;
prevSibling.style.backgroundColor = "red";

// .parentElement
const section = document.getElementById("carrot");
const parent = section.parentElement;
parent.textContent = parent.textContent.toUpperCase();

// .children
const child = document.getElementById("fruits");
const childern = child.children;

console.log(childern);  
