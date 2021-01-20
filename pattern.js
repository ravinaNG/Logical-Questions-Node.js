var readlineSync = require('readline-sync');
var userName = Number(readlineSync.question('May I have your name? '));
console.log(typeof(userName));
