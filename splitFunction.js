const readline = require('readline-sync');
const user_message = readline.question("Enter your message:- \n");
const split_with = readline.question("By what you want to split:- ");

function splitFunction(message, split_code=" "){
    let splited_str = "";
    let checked = 0;
    let unchecked = 1;
    let index = 0;
    while(index < message.length){
        if(checked == unchecked){
            console.log(splited_str);
            splited_str = "";
            index = index + 1;
            checked = 0;
            unchecked = 1;
        }
        else if(message[index] == split_code){
            unchecked = checked;
        } else {
            splited_str = splited_str + message[index];
            index = index + 1
        }
    }
}

splitFunction(user_message, split_with);