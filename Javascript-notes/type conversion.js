//type conversions it is the process of converting one data type to another data type. it can be done implicitly or explicitly. implicit type conversion is done by the JavaScript engine automatically when it encounters an operation that requires a certain data type. explicit type conversion is done by the programmer using built-in functions or operators.

//Implicit type conversion
let a = "10";
let b = 20;
let c = a + b;
console.log(c); // Output: "1020" (string "10" is converted to number 10 and added to 20)

//Explicit type conversion
let x = "5";
let y = Number(x);
console.log(y); // Output: 5 (string "5" is explicitly converted to number 5)

let z = String(y);
console.log(z); // Output: "5" (number 5 is explicitly converted back to string "5")

//Another example of explicit type conversion using parseInt
let str = "42";
let num = parseInt(str);
console.log(num); // Output: 42 (string "42" is explicitly converted to number 42)
