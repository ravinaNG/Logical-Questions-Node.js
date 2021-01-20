const readLine = require('readline-sync');
let user = parseInt(readLine.question("enter number:- "))
let answer = "";
switch(user%2){
    case 0:
        answer = "Even";
        break;
    case 1:
        answer = "Odd";
        break;
    default:
        answer = "Wrong Input";
        break;
}
console.log(answer);