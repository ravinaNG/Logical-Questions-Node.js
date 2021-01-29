const readline = require('readline-sync');
const userStr = readline.question("Enter String you want to order:- ");

let ascendingOrderStr = "";

const smll_alfa = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p",
                    "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const cap_alfa = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
                    "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

function indexOfStrChar(smallAlfa, capAlfa, userStr){
    let indexes = [];
    let index = 0;
    while(index < smallAlfa.length){
        let alfa_index = 0;
        while(alfa_index < smallAlfa.length){
            if(userStr[index] === smallAlfa[alfa_index]){
                indexes.push(smallAlfa[alfa_index]);
            }
            else if(userStr[index] === capAlfa[alfa_index]){
                indexes.push(capAlfa[alfa_index]);
            }
            alfa_index += 1;
        }
        index += 1;
    }
    return indexes;
}

function shortingOfIndexes(array){
    let index = 0;
    while(index < array.length){
        let index2 = index+1;
        while(index2 < array.length){
            if(array[index2] < array[index]){
                array[index] = array[index2];
                array[index2] = array[index]
            }
        }
    }
    return array;
}