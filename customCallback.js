console.log("starting..");

function processThis(message, callbackFunc){
    console.log("Running function first with: " + message);

    if(typeof callbackFunc == "function")
        callbackFunc();
}

processThis("Hello World", function callFunction(){
    console.log("This is callback function.");
});

console.log("Ending..");