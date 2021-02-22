var fs = require('fs');

// run the code and see is it printing synchronously
// undertand the flow and relate with what you have read with callback
// callback we can understand by blocking code only
// if we will make simple code and apply callback concept it won't work
// like that because callback is the solution of blocking code 
// so our code should have blocking functions like setTimeout(), readfile etc.

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