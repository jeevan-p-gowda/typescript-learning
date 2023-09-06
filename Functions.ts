// Named function
function display() {
    console.log("Welcome To TypeScript");
}
display();

// Named function include parameter type and return type
function sum(x: number, y: number): number {
    return x + y;
}
var result = sum(2, 2)
console.log(result);

// Anonymous function
console.log("Anonymous function")
var greeting = function () {
    console.log("Welcome to JavaScript");
}
greeting();

// Anonymous function with return type
console.log("Anonymous function with return type")
var sumation = function (x: number, y: number): number {
    return x + y;
}
console.log(sum(10, 20));

function greet(greeting: string, name: string): string {
    return greeting + " " + name;
}
console.log(greet("Welcome", "David"));
console.log(greet("Welcome", "Satish"));

// optional parameters
function greets(greeting: string, name?: string): string {
    return greeting + " " + name;
}
console.log(greets("Welcome", "Boy"));
console.log(greets("Welcome"));

// Default parameters
console.log("Default Parameters")
function sample(greeting: string, name: string = "Girl"): string {
    return greeting + " " + name;
}
console.log(sample("Hi", "Boy"));
console.log(sample("Hi"));

// Arrow Functions
console.log("Arrow Functions")

// Fat arrow function
console.log("Fat Arrow function")
var bodmas = (x: number, y: number): number => {
    return x + y;
}
console.log(bodmas(20, 30));

// Parameterless Arrow Function
var prints = () => {
    console.log("Welcome to VSC")
}
var prints1 = () => console.log("Welcome to World")
prints1()
prints()

console.log("can write without return and statement")
var bodmas_1 = (x: number, y: number) => x + y;
console.log(bodmas_1(1, 2))

// Function overloading
console.log("Function overloading")
function addition(a: number, b: number): number;
function addition(a: string, b: string): string;

function addition(a: any, b: any): any; {
    return a + b;
}
console.log(addition(10,40));
console.log(addition("WELCOME","JOHN"));