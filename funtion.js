//function in javascript

//A function is a reusable block of code that performs a specific task. It can take input parameters, perform operations, and return a value. Functions help in organizing code, improving readability, and promoting code reusability.
//Function declaration it is a named function that can be called before its declaration due to hoisting.
//es6 introduced function expressions and arrow functions, which provide more concise syntax and different behavior regarding the 'this' keyword.
function add(a, b) {
  return a + b;
}

console.log(add(5, 3)); // Output: 8
console.log(add(10, 7)); // Output: 17

//Function expression it anonymous function assigned to a variable
//es6 introduced arrow functions, which provide a more concise syntax and do not have their own 'this' context.
const add = function(a, b) {
  return a + b;
};

console.log(add(4, 6)); // Output: 10

//Arrow function it is a concise syntax for writing functions, introduced in ES6. It does not have its own 'this' context and is often used for shorter functions.
//es6 introduced arrow functions, which provide a more concise syntax and do not have their own 'this' context.
const add = (a, b) => a + b;
const divide = (a, b) => {
    return a / b;
};
console.log(add(4, 6)); // Output: 10
console.log(divide(20, 5)); // Output: 4

//Function with no parameters
//es6 introduced function expressions and arrow functions, which provide more concise syntax and different behavior regarding the 'this' keyword.
function greet() {
  console.log("Hello, World!");
}
greet(); // Output: Hello, World!

//Function with default parameters
//es6 introduced default parameters, allowing you to specify default values for function parameters if no arguments are provided.
function power(base, exponent = 2) {
  return base ** exponent;
}

console.log(power(5)); // Output: 25 (5 raised to the power of 2)
console.log(power(5, 3)); // Output: 125 (5 raised to the power of 3)

//Function with rest parameters
//es6 introduced rest parameters, allowing you to represent an indefinite number of arguments as an array.
function sum(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}

console.log(sum(1, 2, 3)); // Output: 6
console.log(sum(4, 5, 6, 7)); // Output: 22 




//callback function
//A callback function is a function that is passed as an argument to another function and is executed after a certain event or condition is met. It allows for asynchronous programming and helps in handling events, such as user interactions or API responses.
function add(a, b ) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function calculate(a, b, operation) {
    return operation(a, b);
} // Output: 8
console.log(calculate(5, 3, add)); // Output: 8
console.log(calculate(5, 3, multiply)); // Output: 15