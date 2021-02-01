const readline = require('readline-sync');
const userStr = readline.question("Enter a Stering you want to remove duplicate:- ")

let index = 0;
let updated_str = "";
let checker = 0;
while(index<userStr.length){
    let index2 = index + 1;
    while(index2 < userStr.length){
        if(userStr[index] === userStr[index2]){
            checker = index2;
            break;
        }
        index2 += 1;
    }
    if(index2 === userStr.length && (checker !== index || index === 0))[
        updated_str += userStr[index]
    ]
    index += 1;
}

console.log(updated_str);