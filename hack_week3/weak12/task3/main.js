
let dollarInput = document.querySelector("[name='dollar']");
let resultDiv = document.querySelector(".result");


dollarInput.addEventListener("input", function (e) {

  e.preventDefault();

  if (dollarInput.value === "" || dollarInput.value < 0) {
    resultDiv.innerHTML = `{0} USD Dollar = {0} Egyptian Pound`;
  } else {

    let egpValue = (dollarInput.value * 15.6).toFixed(2);
    

    resultDiv.innerHTML = `${dollarInput.value} USD Dollar = ${egpValue} Egyptian Pound`;
  }
});