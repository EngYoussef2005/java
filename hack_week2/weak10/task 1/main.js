let mix = [1, 2, 3, "E", 4, "l", "z", "e", "r", 5, "o"];

let sol = mix
  .map(function (ele) {
    return isNaN(ele) ? ele : "";
  })
  .reduce(function (accumulator, current) {
    return `${accumulator}${current}`;
  });

console.log(sol);

// Elzero