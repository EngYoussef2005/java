
let div = document.createElement("div");
div.id = "counter";
div.textContent = "10";
document.body.appendChild(div);


let counterTimer = setInterval(function () {
  let currentValue = parseInt(div.textContent);
  
  if (currentValue > 0) {
    div.textContent = currentValue - 1;

 
    if (currentValue - 1 === 5) {
      window.open("https://elzero.org", "_blank", "width=600,height=600");
    }
  } else {

    clearInterval(counterTimer);
  }
}, 1000);