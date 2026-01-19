let result = document.getElementById("result");
const minVal = 1;
const maxVal = 100;
const originalNumber = Math.floor(Math.random() * maxVal) + minVal;
const number = parseInt(prompt(`Guess a number between ${minVal} and ${maxVal}`));

while(number != originalNumber){
    if(number == NaN || number < 1 || number > 100){
        result.innerHTML += `Please enter a valid number between ${minVal} and ${maxVal}`;
    }
    result.innerHTML += `Wrong guess ☹️, The number was ${originalNumber}...Try Again`;
}

result.innerHTML += `Congratulations! You guessed the number ${originalNumber} correctly! 🎉`;