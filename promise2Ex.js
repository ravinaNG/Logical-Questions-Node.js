const func = (time) => {
    var promise = new Promise(function(resolve, reject) {
      setTimeout(function() {
        resolve(`hello world after ${time}`);
      }, time);
    });
    return promise.then(function(data) {
      console.log(data);
    });
  }
  
  
  console.log(func(5000))
  console.log(func(3000))
  console.log(func(10000))