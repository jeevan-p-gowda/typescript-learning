// Primitive Data Type
// Number
var first: number = 12.0;
var second: number = 0x37CF;
var third: number = 0x37CF;
var forth: number = 0b111001;

console.log(first);
console.log(second);
console.log(third);
console.log(forth);

// String
var ename: string = "John";
var dept: string = "IT";

console.log(ename);
console.log(dept);

var stmnt = ename + " works in " + dept;
console.log(stmnt);

// boolean
var b: boolean = true;
console.log(b);

// void type 
function hello(): void {
    console.log("This is welcome message")
}

// Null:Null represents a variable whose value is undefined
var num1: number = null;
num1 = 100;
console.log(num1);

// Undefined
var num2: number = undefined;
num2 = 100;
console.log(num2);

// Any type
var val: any = "Hi";

val = 100; //ok
console.log(val);

val = false;
console.log(val);

function myFunction(x: any, y: any) {
console.log(x+y);
}

myFunction(100,200);
myFunction("Hi"," Welcome");