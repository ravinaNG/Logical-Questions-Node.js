var readlineSync = require('readline-sync');
var userInput = Number(readlineSync.question('May I have your name? '));
let raw = 1;
let dec_value = 0;
let printValue = "";
while(raw <= userInput){
    let column = 1;
    while(column <= raw){
        if(column == raw || dec_value == raw){
            dec_value = raw;
            if(column == 1){
                printValue = printValue + column;
                console.log(printValue);
                printValue = "";
                // console.log(column);
                break;
            }else{
                printValue = printValue + column;
                // console.log(printValue);
                column=column-1
            }
        }else{
            printValue = printValue + column;
            // console.log(printValue);
            column = column + 1
        }
    }
    raw = raw + 1;
}

