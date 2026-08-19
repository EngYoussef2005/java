function multiply(...args) {
  let result = 1;
  for (let i = 0; i < args.length; i++) {
    if (typeof args[i] === "string") {
      continue;
    }
    result *= parseInt(args[i]);
  }
  console.log(result);
}

// Needed Output
multiply(10, 20); // 200
multiply("A", 10, 30); // 300
multiply(100.5, 10, "B"); // 1000