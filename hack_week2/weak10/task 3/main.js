let myArray = ["E", "l", ["z", "e", "r"], "o"];

let sol = myArray.reduce(function (accumulator, current) {
  return accumulator.concat(current);
}, []);

let fR = sol.reduce(function (accumulator, current) {
  return `${accumulator}${current}`;
});

console.log(fR);

// Elzero