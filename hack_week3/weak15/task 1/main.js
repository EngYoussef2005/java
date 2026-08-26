
let fontSelect = document.getElementById("font-select");
let colorSelect = document.getElementById("color-select");
let sizeSelect = document.getElementById("size-select");
let testBox = document.querySelector(".test-box");

if (window.localStorage.getItem("font")) {
  testBox.style.fontFamily = window.localStorage.getItem("font");
  fontSelect.value = window.localStorage.getItem("font");
}

if (window.localStorage.getItem("color")) {
  testBox.style.color = window.localStorage.getItem("color");
  colorSelect.value = window.localStorage.getItem("color");
}

if (window.localStorage.getItem("size")) {
  testBox.style.fontSize = window.localStorage.getItem("size");
  sizeSelect.value = window.localStorage.getItem("size");
}


fontSelect.onchange = function () {
  testBox.style.fontFamily = fontSelect.value;
  window.localStorage.setItem("font", fontSelect.value);
};


colorSelect.onchange = function () {
  testBox.style.color = colorSelect.value;
  window.localStorage.setItem("color", colorSelect.value);
};

sizeSelect.onchange = function () {
  testBox.style.fontSize = sizeSelect.value;
  window.localStorage.setItem("size", sizeSelect.value);
};