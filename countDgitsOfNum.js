const readline = require('readline-sync');
let user_num = readline.question("Enter your number:- ")

let lastDigit;
let digitsList = []
while(true){
    let lastDigit = user_num % 10;
    user_num = user_num - lastDigit;
    if(user_num === 0){
        break;
    }
}