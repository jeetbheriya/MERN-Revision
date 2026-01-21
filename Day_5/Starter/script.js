{/* <>----------------- EXAMPLE 1 <h1> -----------------------</> */}

// Step 1 : CREATE THE ELEMENT
// const newH1 = document.createElement("h1");
const newListItem = document.createElement("li");

// SETP 2 : ADD ATTRIBUTE/PROPERTIES
// newH1.textContent = "Developer-Jeet"
// newH1.id = "myH1";
// newH1.style.color = "Purple";
// newH1.style.textAlign = "center";
newListItem.textContent = "coconut";
newListItem.id = "coconut";
newListItem.style.fontWeight = "bold";
newListItem.style.backgroundColor = "lightgreen";

// STEP 3 : APPEND ELEMENT TO DOM
// document.body.prepend(newH1);
// document.getElementById("box1").append(newH1);
// document.body.append(newListItem);
// document.getElementById("fruits").prepend(newListItem);
const orange = document.getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem, orange);

// const box2 = document.getElementById("box2");
// document.body.insertBefore(newH1, box2);

// REMOVE HTML ELEMENT
// document.getElementById("box1").removeChild("newH1");