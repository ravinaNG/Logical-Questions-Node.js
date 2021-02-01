const readline = require('readline-sync');
let userStr = readline.question("Enter a Stering you want to remove duplicate:- ")

function replceStrIntoLst(str){
    let index = 0;
    let strInList = []
    while(index < str.length){
        strInList.push(str[index]);
        index += 1;
    }
    return strInList;
}

function removeDuplct(list){
    let listOfChar = list;
    let index = 0;
    while(index<listOfChar.length){
        let index2 = index + 1;
        while(index2 < listOfChar.length){
            if(listOfChar[index] === listOfChar[index2]){
                listOfChar.splice(index2, 1);
                listOfChar.splice(index, 1)
                index = -1;
                break;
            }
            index2 += 1;
        }
        index += 1;
    }
    return listOfChar;
}

function makeStr(list){
    let index = 0;
    let updated_str = "";
    while(index < list.length){
        updated_str += list[index];
        index += 1;
    }
    return updated_str;
}

let strInList = replceStrIntoLst(userStr);
let noDuplctList = removeDuplct(strInList);
let updated_str = makeStr(noDuplctList);
console.log(updated_str);