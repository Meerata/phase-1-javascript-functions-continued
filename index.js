// Define a function using a function declaration
function razzle() {
  console.log("You've been razzled!");
}

// Define hoisting
// Hoisting is JavaScript's behavior of moving declarations to the top of the current scope before code execution.

// Define function expression
// A function expression is when a function is assigned to a variable. It doesn't require a function name.
const fnExpression = function () {
  console.log("Function expression");
};

// Define anonymous function
// An anonymous function is a function without a name.
const anonymousFn = function () {
  console.log("Anonymous function");
};

// Define a function using a function expression
const mondayWork = function (activity = "go to the office") {
  return `This Monday, I will ${activity}.`;
};

// Define an IIFE: Immediately-Invoked Function Expression
// An IIFE is a function that is executed immediately after it's created.
(function (baseNumber) {
  console.log(baseNumber + 3);
})(2);

// Define function-level scope
// Function-level scope means that variables declared inside a function are only accessible within that function.
function outer() {
  const x = 10;

  function inner() {
    console.log(x); // Accessible here
  }

  inner();
}

// Define scope chain
// Scope chain is the mechanism that allows inner functions to access variables from their outer (enclosing) functions.
function outerScope() {
  const outerVar = "Outer";

  function innerScope() {
    console.log(outerVar); // Accessing outerVar from the outer scope
  }

  innerScope();
}

// Define closure
// A closure is a function that retains access to variables from its lexical scope even after the outer function has finished executing.
function createClosure() {
  const x = 20;

  function innerFunction() {
    console.log(x); // Accessing x from the outer function's scope
  }

  return innerFunction;
}

// Call the closure function
const closureFn = createClosure();
closureFn();

// Implement a function called saturdayFun
function saturdayFun(activity = "roller-skate") {
  return `This Saturday, I want to ${activity}!`;
}

// Implement a function called wrapAdjective
function wrapAdjective(flair = "*") {
  return function (adjective = "special") {
    return `You are ${flair}${adjective}${flair}!`;
  };
}

// Testing the wrapAdjective function
const encouragingPromptFunction = wrapAdjective("!!!");
console.log(encouragingPromptFunction("a dedicated programmer")); //=> "You are !!!a dedicated programmer!!!"
