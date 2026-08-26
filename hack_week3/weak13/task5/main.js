
let allElements = document.querySelectorAll("*");

allElements.forEach(function (ele) {
  ele.onclick = function () {

    console.log(`This Is ${this.tagName}`);
  };
});