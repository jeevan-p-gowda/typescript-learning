// types of var that can be initialized
var emplyoyeeName: string = "John";
console.log(emplyoyeeName)

var emplyoyeeName1: string;
emplyoyeeName1 = "David"
console.log(emplyoyeeName1)

var emplyoyeeName2;
emplyoyeeName2 = "Smith"
console.log(emplyoyeeName2)

// scope
var y = 200; //global
function someFn() {
    if (true) {
        var x = 100;//local
        console.log(x);
    }
    console.log(x)//if we declare variable as let then this statement doesnt work because its block scope not function scope
}
someFn();
console.log(y);

// update data type
var z=300;
console.log(z);

var z:string="Jeevan"
console.log(z);