let class10 = true;
let class12 = true;

const checkEligibility = (cb, errCb) => {
  if (!class10) {
    errCb({
      value: false,
      reason: "You are not eligible. You must be class 10 qualified",
    });
  } else if (!class12) {
    errCb({
      value: false,
      reason: "You are not eligible. You must be class 12 qualified",
    });
  } else {
    cb({
      value: true,
      reason: "Congrats! You are eligible",
    });
  }
};

checkEligibility(
  (message) => {
    console.log(`Success: ${JSON.stringify(message)}`);
  },
  (err) => {
    console.log(`Failed: ${JSON.stringify(err)}`);
  }
);
