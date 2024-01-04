//import built-module called events
const eventEmitter = require("node:events");

//create an instance of the module
const emitter = new eventEmitter();

//event listener
emitter.on("make-a-call", (provider)=>{
    console.log("Phone calling Abiud through ${provider}");
})
emitter.on("make-a-call", (provider) => {
    if (provider==="Safaricom"){
        console.log("This is an executive call!");
    }
   
})
//emit
emitter.emit("make-a-call","Safaricom");