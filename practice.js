function add(a,b){
  a()
  b()
}
function sub(){
  console.log("sub")
}
function divide(){
  console.log("devide");
}

console.log("start");
add(sub,divide)
console.log("End");




// var fs = require("fs");

// fs.readFile('file.txt', (err, data) => {
//    if (err) return console.error(err);
//    console.log(data.toString());
// });
// console.log("file  reading in process");