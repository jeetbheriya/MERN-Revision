// CALLBACK HELL : Situation in Javascript where callbacks are nested in other callback to the degree where node is difficult to read.

// function Task1(callback){
//     setTimeout(() => {
//         console.log("Task 1");
//         callback();
//     }, 3000);
// };

// function Task2(callback){
//     setTimeout(()=> {
//         console.log("Task 2");
//     callback();
//     }, 1000);
// };

// function Task3(callback){
//     setTimeout(()=> {
//         console.log("Task 3");
//         callback();
//     }, 2000);
// };

// function Task4(callback){
//     setTimeout(()=> {
//         console.log("Task 4");
//         callback();
//     }, 1500);
// };

// Task1(() => {
//     Task2(() => {
//         Task3(() => {
//             Task4(() => {
//                 console.log("All Task completed..."); 
//             })
//         })
//     })
// });


// <----------------------- PROMSIES ------------------------>//

//  Promises = An object that manages Asynchronous operation. Wrap a promsie Object around {asynchrounous code} "I promsie to retuen a value", PENDING -> RESOLVED or REJECTED
// new Promsie((resolve, reject) => {asynchrounous code});

function walDog(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let dogWalked = false;
            
            if(dogWalked){
                resolve("yes");
            }else{
                reject("No");
            }
        }, 3000);
    });
};

function cleanKitchen(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Clean the kitchen.")
        }, 2000);
    });
};

function cleanHall(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
             resolve("Clean the hall.")
        }, 1000);
    });
};


// walDog().then(res => {
//     console.log(res);
//     cleanKitchen().then(res => {
//         console.log(res);
//         cleanHall().then(res => {
//             console.log(res);
//         })
//     })
// })

// <----------------------Async/Await ------------------> // 

// Async = makes a function return a promise.
// Await = makes a async function wait for a promise.

// Allows to write the asynchronous code in a synchrounous manner async doesn't have resolve or reject parameter. Everything after await is placed in a n event queue.

async function deChores(){
    const walTheDog = await walDog();
    console.log(walTheDog);

    const cleanTheKitchen = await cleanKitchen();
    console.log(cleanTheKitchen);

    const cleanTheHall = await cleanHall();
    console.log(cleanTheHall);
    console.log("You finished all the Chores.")
}

 deChores();