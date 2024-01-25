const event = require("events"); //importing event module
const eventEmmiter = new event.EventEmitter();

// // Functions that triggered after
// const helloFunction = () => {
//   console.log("The event that you triggered is present !!");
// };
// const sum = (a, b) =>
//   console.log(`The sum of the given numbers are : ${a + b}`);

// eventEmmiter.on("hello", helloFunction); // listening the events
// eventEmmiter.on("sum", sum); // listening the events
// eventEmmiter.emit("hello"); // firing the events
// eventEmmiter.emit("sum", 1, 2); // firing the events

const discount = (percentage) => {
  console.log(`I heard ${percentage}% discount`);
  eventEmmiter.on("shopping", shopping);
  eventEmmiter.emit("shopping", percentage);
};

const shopping = (percent) => {
  console.log(`You got ${percent}% discount`);
};

eventEmmiter.on("discount", discount);

eventEmmiter.emit("discount", 50);

// import evengts
//create instance of EventEmmiter
// use EventEmmiter on method to listen whether the event exist or not if exist then call the realted function
// use emit method of EventEmmiter object to send the events that can be triggered
