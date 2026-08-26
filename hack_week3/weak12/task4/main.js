let elOne = document.querySelector(".one");
let elTwo = document.querySelector(".two");


let titleOne = elOne.title;
let contentOne = elOne.textContent;

elOne.title = elTwo.title;
elOne.textContent = elTwo.textContent;

elTwo.title = titleOne;

elTwo.textContent = `${contentOne} ${elTwo.className.length - 1}`;