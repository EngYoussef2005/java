
let div = document.createElement("div");
div.id = "counter";
div.textContent = "10";
document.body.appendChild(div);

let counterTimer = setInterval(function () {
  let currentValue = parseInt(div.textContent);
  
  if (currentValue > 0) {
    div.textContent = currentValue - 1;
  } else {
  
    clearInterval(counterTimer);
  }
}, 1000);