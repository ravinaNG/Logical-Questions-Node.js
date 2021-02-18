var fs = require('fs');

// console.log("Program Started");

// function reading(err, data){
//     if(err){
//         return (console.log(err));
//     }
//     return (console.log(data));
// }

// fs.readFile('demo.txt', reading());
// console.log("Program Ended");




console.log("Program Started");

fs.readFile('demo.txt', function(err, data){
    if(err) return console.log(err);
    console.log("first----");
    console.log(data.toString());
});

console.log("Program Ended");

fs.readFile('demo.txt', function(err, data){
    if(err) return console.log(err);
    console.log("Second----");
    console.log(data.toString());
});

console.log("second end...");


// console.log("Process started");                //|
// var data = fs.readFileSync('demo.txt');        //|Syncronous
// console.log(data.toString());                  //|
// console.log("Program ended");                  //|