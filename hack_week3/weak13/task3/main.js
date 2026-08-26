
let ourElement = document.querySelector(".our-element");
let myParagraph = document.querySelector("p");

myParagraph.remove();

let startElement = document.createElement("div");
startElement.className = "start";
startElement.title = "Start Element";
startElement.setAttribute("data-value", "Start");
startElement.textContent = "Start";

let endElement = document.createElement("div");
endElement.className = "end";
endElement.title = "End Element";
endElement.setAttribute("data-value", "End");
endElement.textContent = "End";

ourElement.before(startElement);

ourElement.after(endElement);