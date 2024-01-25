const event = require("events"); //importing event module
const eventEmmiter = new event.EventEmitter();
const helloFunction = () => {
  console.log("The event that you triggered is present !!");
};
const sum = (a, b) =>
  console.log(`The sum of the given numbers are : ${a + b}`);

eventEmmiter.on("hello", helloFunction);
eventEmmiter.on("sum", sum);
eventEmmiter.emit("hello");
eventEmmiter.emit("sum", 1, 2);
