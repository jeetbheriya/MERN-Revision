// Nodelist : Static collection of HTML element by (id, class, element) Can be created by using querySelectorAll().

let buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
    button.style.backgroundColor = "Aqua";
    button.textContent += "😁";
});

// Event Listerners

buttons.forEach(button => {
    button.addEventListener("click", (event) => {
        event.target.style.backgroundColor = "tomato";
    });

    button.addEventListener("mouseover", (event) => {
        event.target.textContent = "What are you trying to see...😏";
    });

    button.addEventListener("mouseout", (event) => {
        event.target.textContent = originalText;
    });
});

// Add an Element

// STEP 1
const newButton = document.createElement("button");
newButton.textContent = "Button 5";
newButton.classList = "buttons";
document.body.appendChild(newButton);

console.log(buttons);
