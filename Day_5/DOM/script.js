// Element Selector : Method is used to target and manipulate HTML element. They allow you to select one or multiple HTML elements  from the DOM (Document Obejct Model).

// 1. document.getElementById()
const myHeading = document.getElementById("head");
myHeading.style.backgroundColor = "Aqua";
myHeading.style.textAlign = "center";

console.log(myHeading);

// 2. document.getElementByClassname()
const cars = document.getElementsByClassName("cars"); 
console.log(cars);

for(let car of cars){
    const color = ["Red", "Green", "Blue", "Yellow", "Purple", "Orange", "Pink"];
    let randomIndx = Math.floor(Math.random() * 6) + 1;

    car.style.backgroundColor = color[randomIndx];
}

// 3. document.getElementBytagName()
const h4Elements = document.getElementsByTagName("h4");
const liElements = document.getElementsByTagName("li");

for(let h4Element of h4Elements){
    h4Element.textContent = h4Element.textContent.toUpperCase();
    h4Element.style.color = "Red";
}

for(let liElement of liElements){
    liElement.textContent = liElement.textContent.toLowerCase();
    liElement.style.backgroundColor = "lightgreen";
}

// 4. document.querySelector()
const element = document.querySelector("div");
element.style.color = "white";

// 5. document.querySelectorAll()
const foods = document.querySelectorAll("li");
console.log(foods);

foods.forEach(food => {
    food.style.color = "white";
})

