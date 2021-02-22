const { resolve } = require("path");

let class10 = true;
let class12 = true;

const checkEligibility = new Promise((resolve, reject) => {
  if (!class10) {
    reject({
      value: false,
      reason: "You are not eligible. You must be class 10 qualified",
    });
  } else if (!class12) {
    reject({
      value: false,
      reason: "You are not eligible. You must be class 12 qualified",
    });
  } else {
    resolve({
      value: true,
      reason: "Congrats! You are eligible",
    });
  }
});

checkEligibility.then("Ravina"){
  console.log(`Success: ${JSON.stringify(message)}`);
}
checkEligibility.catch("Ravina");


// checkEligibility(
//   (message) => {
//     console.log(`Success: ${JSON.stringify(message)}`);
//   },
//   (err) => {
//     console.log(`Failed: ${JSON.stringify(err)}`);
//   }
// );
