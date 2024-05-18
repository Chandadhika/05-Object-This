// TODO: What is `this` referring to here?
// console.log(this);

// // TODO: What is `this` referring to here?
// function helloThis() {
//   console.log('Inside this function, this is ' + this);
// }

// // TODO: What is `this` referring to here? What will be logged in the console?
// var child = {
//   age: 10,
//   ageTenYears: function() {
//     console.log(this.age + 10);
//   }
// };

// // TODO: What is `this` referring to here? What will be logged in the console?
// var investor = {
//   name: 'Cash Saver',
//   investment: {
//     initialInvestment: 5000,
//     investmentGrowth: function() {
//       console.log(this.initialInvestment * 1.15);
//     }
//   }
// };

// Global variable declared in the global scope
var globalMessage = "This is a global message";

// Function to log both global and local messages
var logMessages = function() {
    // Local variable declared within the logMessages function
    var localMessage = "This is a local message";
    
    // Log the global message to the console
    console.log(globalMessage);
    
    // Log the local message to the console
    console.log(localMessage);
};

// Function to log only the global message
var logGlobalMessage = function() {
    // Log the global message to the console
    console.log(globalMessage);
};

// Call the logMessages function to log both global and local messages
logMessages();

// Call the logGlobalMessage function to log only the global message
logGlobalMessage();

// Global variable
var name = "Global Name";

// Object with a method that uses `this`
var person = {
    name: "Alice",
    sayName: function() {
        console.log(this.name);
    }
};

// Function that uses `this`
var sayNameGlobal = function() {
    console.log(this.name);
};

// Call method of the object
person.sayName(); // Logs "Alice"

// Call standalone function (non-strict mode)
sayNameGlobal(); // Logs "Global Name" (this refers to the global object)