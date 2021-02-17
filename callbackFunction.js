var fs = require('fs');
console.log("Process started");
var data = fs.readFileSync('demo.txt');
console.log(data.toString());
console.log("Program ended");