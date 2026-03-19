let arr = ["prakash", "sasi", "giri", "amar","praveen"];
console.log(arr);  // Output: ["prakash", "sasi", "giri", "amar", "praveen"]

//push() method is used to add an element at the end of the array
arr.push("kumar");
console.log(arr);  // Output: ["prakash", "sasi", "giri", "kumar"]

//pop() method is used to remove the last element of the array
arr.pop();
console.log(arr);  // Output: ["prakash", "sasi", "giri"]

//shift() method is used to remove the first element of the array
arr.shift();
console.log(arr);  // Output: ["sasi", "giri"]

//unshift() method is used to add an element at the beginning of the array
arr.unshift("prakash");
console.log(arr);  // Output: ["prakash", "sasi", "giri"]

//includes() method is used to check if an element is present in the array or not
console.log(arr.includes("sasi"));  // Output: true
console.log(arr.includes("kumar"));  // Output: false

//indexOf() method is used to find the index of an element in the array
console.log(arr.indexOf("sasi"));     // Output: 1
console.log(arr.indexOf("prakash"));  // Output: 0
console.log(arr.indexOf("kumar"));    // Output: -1 (not found)

// ============ slice() ==============
//slice() method is used to extract a portion of the array without modifying the original
let newArr = arr.slice(0, 2);
console.log(newArr);  // Output: ["prakash", "sasi"]
console.log(arr);     // Original array unchanged

// ============ splice() ==============
//splice() method is used to add or remove elements from the array (modifies original)
let arr2 = ["a", "b", "c", "d"];
arr2.splice(1, 1, "x");  // Remove 1 element at index 1 and add "x"
console.log(arr2);  // Output: ["a", "x", "c", "d"]

//reduce() method applies a function to reduce array to a single value
let numbers = ["paaa", "pa", "sin", "raj"];
let sum = numbers.reduce(function(total, num) {
    return String(total) + String(num);
}, "");  // Empty string is the starting value
console.log(sum);  // Output: "paaapa sin raj"

//some and every methods
//some() method checks if at least one element in the array passes the test
let hasEven = numbers.some(function(num) {
    return num % 2 === 0;
});
console.log(hasEven);  // Output: true
//every() method checks if all elements in the array pass the test
let allEven = numbers.every(function(num) {
    return num % 2 === 0;
});
console.log(allEven);  // Output: false


// ============ reverse() ==============
//reverse() method is used to reverse the order of elements in the array
let arr3 = [1, 2, 3, 4, 5];
arr3.reverse();
console.log(arr3);  // Output: [5, 4, 3, 2, 1]

// ============ forEach() ==============
//forEach() method is used to loop through each element and execute a function
let fruits = ["apple", "banana", "orange"];
fruits.forEach(function(fruit, index) {
    console.log(index + ": " + fruit);
});
/* Output: 
giri
sasi
prakash
*/

//map() method is used to create a new array by applying a function to each element of the original array
let newArr1 = arr.map(function(element) {
    return element.toUpperCase();
});
console.log(squared);  // Output: [1, 4, 9, 16]

// ============ filter() ==============
//filter() method creates a new array with elements that pass the test
let ages = [10, 18, 25, 16, 30];
let adults = ages.filter(function(age) {
    return age >= 18;
});
console.log(adults);  // Output: [18, 25, 30]

// ============ reduce() ==============
//reduce() method applies a function to reduce array to a single value
let nums = [1, 2, 3, 4, 5];
let total = nums.reduce(function(sum, num) {
    return sum + num;
}, 0);  // 0 is the starting value
console.log(total);  // Output: 15



//sir notes
let prices = [100, 250, 75, 300, 50];
console.log("Prices:", prices);
// Output: [100, 250, 75, 300, 50]


// map() → Transform each → new array (same length)
let withTax = prices.map(p => p * 1.1);   // 10% tax
console.log("Prices with 10% tax:", withTax);
// Output: [110, 275, 82.5, 330, 55]


// filter() → Keep only if condition true → new array
let expensive = prices.filter(p => p > 100);
console.log("Prices greater than 100:", expensive);
// Output: [250, 300]


// reduce() → Squash all into one value (e.g. total)
let totalBill = prices.reduce((sum, p) => sum + p, 0);
console.log("Total bill:", totalBill);
// Output: 775


// some() → "At least one passes?" → true/false
console.log("Any item above 200?", prices.some(p => p > 200));
// Output: true


// every() → "All pass?" → true/false
console.log("All prices positive?", prices.every(p => p > 0));
// Output: true


// forEach() → Do something for each (no new array)
prices.forEach(p => console.log("Price:", p));
// Output:
// Price: 100
// Price: 250
// Price: 75
// Price: 300
// Price: 50