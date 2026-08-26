// 1.getElementById
let element1 = document.getElementById("elzero");

// 2.getElementsByClassName
let element2 = document.getElementsByClassName("element")[0];

// 3.getElementsByTagName
let element3 = document.getElementsByTagName("div")[0];

// 4.getElementsByName
let element4 = document.getElementsByName("js")[0];

// 5.querySelector (1)
let element5 = document.querySelector("#elzero");

// 6.querySelector (2)
let element6 = document.querySelector(".element");

// 7.querySelector (3)
let element7 = document.querySelector("div");

// 8.querySelector (4)
let element8 = document.querySelector("[name='js']");

// 9.querySelectorAll (1)
let element9 = document.querySelectorAll("#elzero")[0];

// 10.querySelectorAll (2)
let element10 = document.querySelectorAll(".element")[0];

// 11.querySelectorAll (3)
let element11 = document.querySelectorAll("div")[0];

// 12.querySelectorAll (4)
let element12 = document.querySelectorAll("[name='js']")[0];

// 13. firstElementChild of body
let element13 = document.body.firstElementChild ;

// 14. childNodes of body
let element14 = document.body.childNodes[1];

// 15. children of body
let element15 = document.body.children[0];


console.log(element1); 