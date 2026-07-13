// Add Variables Here
let NumberOne = 10;
let NumberTwo = 20;

// Output
console.log(NumberOne + "" + NumberTwo); // Normal Concatenate => 1020
console.log(typeof (NumberOne + "" + NumberTwo)); // Normal Concatenate => String
console.log(`${NumberOne}${NumberTwo}`); // Template Literals Way => 1020
console.log(typeof `${NumberOne}${NumberTwo}`); // Template Literals Way => String

console.log(NumberTwo + "\n" + NumberOne);

/* 
Normal Concatenate
20
10
*/

console.log(`${NumberTwo}\n${NumberOne}`);

/* 
Template Literals Way
20
10
*/