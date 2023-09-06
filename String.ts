var myString: string = "Welcome to TypeScript"
let myString1: string = "Hello World!   "

// string functions
console.log(myString.charAt(2));
console.log(myString.concat(myString1));
console.log(myString.replace(" ", ""))
console.log(myString.split(" "))
console.log(myString.split(" ", 2)) //['Welcome','to']
console.log(myString.substring(0, 2))
console.log(myString.substring(5))
console.log(myString.toLowerCase());
console.log(myString1.toUpperCase());
console.log(myString1.trim());