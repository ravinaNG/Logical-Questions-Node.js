console.log("starting..");

function processThis(callbackFunc, anything){
    if(typeof callbackFunc == "function")
        callbackFunc();
    console.log("Running function first with: " + anything);
}

processThis(function callFunction(){
    console.log("This is callback function.");
}, 9);

console.log("Ending..");