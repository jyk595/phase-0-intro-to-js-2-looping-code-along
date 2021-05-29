// Code your solutions in this file
const name = ["Ada", "Brendan", "Ali"];

function writeCards(name, eventName) {
    let newArray = [];
    
    for(let i=0; i < name.length; i++) {
        newArray.push(`Thank you, ${name[i]}, for the wonderful ${eventName} gift!`);
    }

    return newArray;
};

// function countDown(number) {
//     let i = number-1;
//     while (i >= 0) {
//         console.log(number);
//         i --;
//     }
// }

function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown --);
    }
    return countDown;
}