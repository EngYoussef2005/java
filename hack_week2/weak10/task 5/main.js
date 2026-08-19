let nums = [2, 12, 11, 5, 10, 1, 99];

let sol = nums.reduce(function (accumulator, current) {
  return current % 2 !== 0 ? accumulator + current : accumulator * current;
}, 1);

console.log(sol);

// 500