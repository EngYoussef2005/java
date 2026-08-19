let mystring = "EElllzzzzzzero";

let sol = mystring
  .split("")
  .filter(function (ele, index, arr) {
    return arr.indexOf(ele) === index;
  })
  .reduce(function (accumulator, current) {
    return `${accumulator}${current}`;
  });

console.log(sol);

// Elzero