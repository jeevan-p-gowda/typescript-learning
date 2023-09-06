// Single type array
var fruits: string[] = ["apple", "mango", "banana"]
var fruits2: Array<string>;
fruits2 = ["Muskmelon", "watermelon", "Strawberry"]

console.log(fruits);
console.log(fruits2);

// Multi Type Array
var value1: (string | number)[] = ["chikoo", "pomogranate", "pineapple", 100, 200]
var value2: Array<string | number> = ["jackfruit", "Kiwi", "Starfruit", 7, 5]

console.log(value1)
console.log(value2)

// Access array elements
console.log(fruits[1]);
console.log(fruits[3]);

console.log("for loop")
for (var i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}

console.log("in loop")
for (var j in fruits) {
    console.log(fruits[j]);
}

console.log("two dimensional array")
var myArray: number[][] = [[10, 20], [30, 40], [50, 60]]
console.log(myArray);

// 2D Multi Type Array
var myArray2: (number | string)[][] = [[10, "xyz"], [30, "abc"], [50, "def"]]
console.log(myArray2);
console.log(myArray2[0][0]);
console.log(myArray2[2][1]);

/* for(var i=0;i<myArray2.length;i++){
    for(var j=0;j<myArray2[i].length;j++){
        console.log(myArray2[i][j])
    }
} */
console.log("Reading array using for loop")
for (var x in myArray2) {
    for (var y in myArray2[x]) {
        console.log(myArray2[x][y])
    }
}