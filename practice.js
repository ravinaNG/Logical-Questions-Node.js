var fs = require("fs");

fs.readFile('file.txt', (err, data) => {
   if (err) return console.error(err);
   console.log(data.toString());
});
console.log("file  reading in process");