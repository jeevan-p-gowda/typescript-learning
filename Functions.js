// Named function
function display() {
    console.log("Welcome To TypeScript");
}
display();
// Named function include parameter type and return type
function sum(x, y) {
    return x + y;
}
var result = sum(2, 2);
console.log(result);
// Anonymous function
console.log("Anonymous function");
var greeting = function () {
    console.log("Welcome to JavaScript");
};
greeting();
// Anonymous function with return type
console.log("Anonymous function with return type");
var sumation = function (x, y) {
    return x + y;
};
console.log(sum(10, 20));
function greet(greeting, name) {
    return greeting + " " + name;
}
console.log(greet("Welcome", "David"));
console.log(greet("Welcome", "Satish"));
// optional parameters
function greets(greeting, name) {
    return greeting + " " + name;
}
console.log(greets("Welcome", "Boy"));
console.log(greets("Welcome"));
// Default parameters
console.log("Default Parameters");
function sample(greeting, name) {
    if (name === void 0) { name = "Girl"; }
    return greeting + " " + name;
}
console.log(sample("Hi", "Boy"));
console.log(sample("Hi"));
// Arrow Functions
console.log("Arrow Functions");
// Fat arrow function
console.log("Fat Arrow function");
var bodmas = function (x, y) {
    return x + y;
};
console.log(bodmas(20, 30));
// Parameterless Arrow Function
var prints = function () {
    console.log("Welcome to VSC");
};
var prints1 = function () { return console.log("Welcome to World"); };
prints1();
prints();
console.log("can write without return and statement");
var bodmas_1 = function (x, y) { return x + y; };
console.log(bodmas_1(1, 2));
// Function overloading
console.log("Function overloading");
{
    return a + b;
}
console.log(addition(10, 40));
console.log(addition("WELCOME", "JOHN"));
