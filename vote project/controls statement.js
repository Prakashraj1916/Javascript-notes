/* JavaScript supports the following forms of if...else statement −
1) if statement
2) if...else statement
3) if...else if... statement.
4) nested if...else statement.

/* 1. if statement:-
    Syntax:
    if (expression) {
    Statement(s) to be executed if expression is true
    }


/* 2. if...else statement:-
    Syntax:
    if (expression) {
    Statement(s) to be executed if expression is true
    } 
    else {
    Statement(s) to be executed if expression is false
    }


/* 3. if...else if... statement
    Syntax:
    if (expression 1) {
    Statement(s) to be executed if expression 1 is true
    } 
    else if (expression 2) {
    Statement(s) to be executed if expression 2 is true
    } 
    else if (expression 3) {
    Statement(s) to be executed if expression 3 is true
    } 
    else {
    Statement(s) to be executed if no expression is true
    }
*/

/* 4. nested if...else statement:-
    Syntax:
    if (expression 1) {
    Statement(s) to be executed if expression 1 is true
        if (expression 2) {
        Statement(s) to be executed if expression 2 is true
        } 
        else {
        Statement(s) to be executed if expression 2 is false
        }
    } 
    else {
    Statement(s) to be executed if expression 1 is false
    }
*/

//code for if statement
var a = 10;
if (a > 5) {
    console.log("a is greater than 5");
}

//code for if...else statement
var b = 20;
if (b > 5) {
    console.log("b is greater than 5");
} else {
    console.log("b is not greater than 5");
}

//code for if...else if... statement
var c = 15;
if (c > 10) {
    console.log("c is greater than 10");
} else if (c > 5) {
    console.log("c is greater than 5 but not greater than 10");
} else {
    console.log("c is not greater than 5");
}
//code for nested if...else statement
var d = 25;
if (d > 20) {
    console.log("d is greater than 20");
    if (d > 30) {
        console.log("d is greater than 30");
    } else {
        console.log("d is not greater than 30");
    }
} else {
    console.log("d is not greater than 20");
}

//Example of if statement
const age1 = 18;
if (age >= 18) {
    console.log("You are eligible to vote.");
}

//Example of if...else statement
const age2 =18;
if (age <= 18) {
    console.log("You are eligible ro vote.");
}
else{
    console.log("You are not eligible to vote.");
}

//Example of if...else if... statement
const ageInput3 = prompt("Enter your age:");
const age3 = parseInt(ageInput3);
if (age3 < 13){
    console.log("You are a child not eligible to vote.");
} else if (age3 < 18) {
    console.log("You are a teenager not eligible to vote.");
} else {
    console.log("You are an adult eligible to vote.");
}

//Example of nested if...else statement
const ageInput4 = prompt("Enter your age:");
const age4 = parseInt(ageInput4);
if (age4 >= 18) {
    console.log("You are eligible to vote.");
    if (age4 >= 65) {
        console.log("You are a senior citizen.");
    } else {
        console.log("You are an adult.");
    }   
} else {
    console.log("You are not eligible to vote.");
}
