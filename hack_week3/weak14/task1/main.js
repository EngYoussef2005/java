let userInput = prompt("Print Number From – To", "5-20");

if (userInput) {
  let parts = userInput.split("-");
  let num1 = parseInt(parts[0]);
  let num2 = parseInt(parts[1]);

  let start = Math.min(num1, num2);
  let end = Math.max(num1, num2);

  for (let i = start; i <= end; i++) {
    document.write(i + "<br>");
  }
}