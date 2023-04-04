// // Things we went over during the Tuesday support class - 04/04/2023.

// // EcmaScript 6 (ES6) 
// // Variable with nothing in the file it is within the global scope
// // var is slowly becoming redundant 


// // Variables 
var variable1 = '1'; // var s global 
let variable2 = '2'; // block scoped
const variable3 = '3'; // const variables cannot be re-assigned

function test() {
    console.log(variable1, variable2, variable3);
}

test();


// // Data Types 

let type1 = 'string';   // String
let type2 = 1;   // Number
let type3 = [1, 2, 3];   // Array
let type4 = 1.3;   // Decimal
let type5 = {  // This is an object 
    name: 'user'
}
let type6 = true;

console.log(typeof type5); // This command will tell you what is the data type of the assigned variable 


// // String Manipulation - There is various things you can do with string, you can put them together, like in the example below

let string1 = 'Hello';
let string2 = 'world';

// // Expected output - Hello, world!
console.log(string1+',',string2+'!'); // '!' - Is a string literal? ',' - This adds a comma to the string  
console.log(string1.concat(',', string2, '!')) // output - Hello, world! (same as the above code line)
console.log(`${string1}, ${string2}!`) // Hello, world!


// // Iterating over various data types 

let array1 = [1,2,3,4,5,6];
let string3 = 'Hello, world!';

for (let a = 1; a < 11; a++) {
    console.log(a)
} // Line 49-51 - this is a for loop (fixed iteration, specifying an endpoint this has no dynamics to it)

for (let i = 0; i < array1.length; i++) { // .length is a property on the array object (of the array class) 

}

// // to access array indexes you use square brackets i.e. [1] - you are accessing index 1 of a varaibale 
// // ) - Parenthesis
// // } - Curly Bracket
// // ] - Bracket

// // String Template