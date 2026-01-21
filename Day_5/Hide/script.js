const myButton = document.getElementById("hide-btn");
const myImg = document.getElementById("my-img")
const myText = document.getElementById("my-text");

myButton.addEventListener("click", (event) => {
    if(myImg.style.display === "none"){
        myImg.style.display = "block";
        myText.textContent = "1969 Chevrolet Camaro 🔥" 
        myButton.textContent = "Hide";
    }else{
        myImg.style.display = "none";
        myText.textContent = "OOPs !!!, Click to See 😏"
        myButton.textContent = "Show";
    }
});
