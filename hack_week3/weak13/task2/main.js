
let addInput = document.querySelector(".classes-to-add");
let removeInput = document.querySelector(".classes-to-remove");
let currentElement = document.querySelector(".element");
let classesListDiv = document.querySelector(".classes-list div");


function showClasses() {
  classesListDiv.innerHTML = "";

  if (currentElement.classList.length === 0) {
    classesListDiv.innerHTML = "No Classes To Show";
    return;
  }

  let classesArray = Array.from(currentElement.classList).sort();

  classesArray.forEach(cls => {
    let span = document.createElement("span");
    span.textContent = cls;
    classesListDiv.appendChild(span);
  });
}

showClasses();

addInput.onblur = function () {
  if (addInput.value.trim() !== "") {

    let classesToAdd = addInput.value.trim().toLowerCase().split(/\s+/);
    
    currentElement.classList.add(...classesToAdd);

    showClasses();
    addInput.value = "";
  }
};


removeInput.onblur = function () {
  if (removeInput.value.trim() !== "") {

    let classesToRemove = removeInput.value.trim().toLowerCase().split(/\s+/);
    
    currentElement.classList.remove(...classesToRemove);

    showClasses();
    removeInput.value = "";
  }
};