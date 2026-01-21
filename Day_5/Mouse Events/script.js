// Event Listeners : Listen for specific events to create interactive web pages events: click, mouseover, 

const myBox = document.getElementById("myBox");
const myBox2 = document.getElementById("myBox2");

myBox.addEventListener("click", () => {
    myBox.innerText = "Hello Developer-Jeet 😁";
});

myBox.addEventListener("mouseover", (event) => {
    myBox.innerText = "Are you looking for something 😏"
    
});

myBox.addEventListener("dblclick", (event) => {
    myBox.style.color = "black";
    myBox.innerText = "Okay, wait wait ";
    event.target.style.backgroundColor = "yellow"
});

myBox2.addEventListener("keydown", (event) => {
    myBox2.style.backgroundColor = "tomato"
    myBox2.textContent = "☹️"
});
