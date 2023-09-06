// Tuple is hetrogeneous collection of data
// var empID:number=101;
// var empName:string="John"
// var empSal:number=50000;

// Declare tuple
// var employee=[101,"John",50000]
var employee: [number, string, number] = [101, "John", 50000]
console.log(employee)

// Accessing tuple
console.log(employee[0]);
console.log(employee[1]);
console.log(employee[2]);

// Add elements in to tuple - push()
var employee: [number, string, number] = [101, "John", 10000]
console.log("Original tuple:" + employee);

employee.push(102, "Scott", 60000)
console.log("After adding:" + employee);

// remove the element
employee.pop()
console.log("After removing:" + employee);

// update the element in tuple
var student: [number, string] = [101, "Smith"];
student[1] = "Sukesh";
console.log(student);

// Tuple Array
var myTupple: [number, string][];
myTupple = [[101, "pavan"], [102, "Rajesh"], [103, "Mary"]]
console.log(myTupple[0]);
console.log(myTupple[1]);
console.log(myTupple[2]);