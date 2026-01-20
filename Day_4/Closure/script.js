// Closure : A fucntion defined inside the another function, the inner fucntion has access to the variables and scope of the outer function.

// function outer(){
//     let message = "Hello from the outer function!";

//     function inner(){
//         console.log(message);
//         console.log(message2);
//     }

//     let message2 = "Hello from the inner function!";
//     inner();
// }

// outer();

// function counter(){
//     let count = 0;

//     function incCount(){
//         for(let i=0; i<10; i++){
//             count++;
//         }
//         console.log(count);
//     }

//     incCount();
// }

// counter();


// let score = 0;

// function increaseScore(points){
//     score += points;
//     console.log(`+` + points + ` points! Total score: ` + score);
// }

// function decreaseScore(points){
//     score -= points;
//     console.log(`-` + points + ` points! Total score: ` + score);
// }

// function resetScore(){
//     score = 0;
//     console.log(`Score reset! Total score: ` + score);
// }

// increaseScore(10); // +10 points! Total score: 10
// increaseScore(5);  // +5 points! Total score: 15
// decreaseScore(3);  // -3 points! Total score: 12


// ------------------- SetTimeout -----------------//

// SetTimout : Function in javascript that allows you to schedule the execution of a function after a amount of time (milliseconds). { setTimeOut(fucntion, delay) }

function noti(){
    setTimeout(() => {
        alert("This alert is shown after 3 seconds!");
    }, 3000);
}