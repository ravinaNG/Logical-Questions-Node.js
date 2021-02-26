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

checkEligibility.then((resolveVal) => {
  console.log(`Success: ${JSON.stringify(resolveVal)}`);
}).catch((rejectedVal) => {
  console.log(`Failed: ${JSON.stringify(rejectedVal)}`);
});
