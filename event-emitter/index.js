const eventEmitter = require("events");
const { EventEmitter } = require("stream");


const myFirstEmitter = new EventEmitter();

myFirstEmitter.on("greet", (name) => {
    console.log("Hello", name)
});

myFirstEmitter.emit("greet", "Kwanele Ndaba")