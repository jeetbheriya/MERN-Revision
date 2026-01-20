// Fisher - Yates Algorithm

//  const cards = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];

//  shuffle(cards);

//  console.log(cards);

//  function shuffle(cards){
//     for(let i = cards.length - 1; i > 0; i--){
//         const random = Math.floor(Math.random() * (i+1));

//         [cards[i], cards[random]] = [cards[random], cards[i]]
//     }
//  }


// Date Objects : Objects that contains values that represent date and time. These date objects can be changes and formatted.

const date = new Date();
console.log(date);
console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());