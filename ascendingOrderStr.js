const readline = require('readline-sync');
const userStr = readline.question("Enter String you want to order:- ");

let ascendingOrderStr = "";

const smll_alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const cap_alfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
                    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function convertStrInList(str){
    let index = 0;
    let listOfStrChar = [];
    while(index < str.length){
        listOfStrChar.push(str[index]);
        index += 1;
    }
    return listOfStrChar;
}

function indexOfStrChar(smallAlfa, capAlfa, userStr){
    let indexes = [];
    let index = 0;
    while(index < smallAlfa.length){
        let alfa_index = 0;
        while(alfa_index < smallAlfa.length){
            if(userStr[index] === smallAlfa[alfa_index]){
                indexes.push(alfa_index);
            }
            else if(userStr[index] === capAlfa[alfa_index]){
                indexes.push(alfa_index);
            }
            alfa_index += 1;
        }
        index += 1;
    }
    return indexes;
}

function shortingOfIndexes(array_indexes){
    let arrayOfindexes = array_indexes;
    let index = 0;
    let firstIndex;
    while(index < arrayOfindexes.length){
        let index2 = index+1;
        while(index2 < arrayOfindexes.length){
            if(arrayOfindexes[index2] < arrayOfindexes[index]){
                firstIndex = arrayOfindexes[index]
                arrayOfindexes[index] = arrayOfindexes[index2];
                arrayOfindexes[index2] = firstIndex
            }
            index2 += 1
        }
        index += 1
    }
    return arrayOfindexes;
}

let array_indexes = indexOfStrChar(smll_alfa, cap_alfa, userStr);
let shortOfIndexes = shortingOfIndexes(array_indexes);
let userStrInList = convertStrInList(userStr);

let element = 0;
while(element < userStr.length){
    var alfa_index = shortOfIndexes[element];
    if(userStrInList.includes(smll_alfa[alfa_index])){
        ascendingOrderStr += smll_alfa[alfa_index];
    }
    else if(userStrInList.includes(cap_alfa[alfa_index])){
        ascendingOrderStr += cap_alfa[alfa_index];
    }
    element += 1;
}

console.log(ascendingOrderStr);