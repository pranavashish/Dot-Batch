//adding 100 para

const t1 = performance.now();

for (let i = 0; i <= 100; i++) {
  let newElement = document.createElement("p");
  newElement.textContent = "This is para " + i;

  document.body.appendChild(newElement);
}
const t2 = performance.now();
console.log("This took: " + (t2 - t1) + " ms");

// optimizing a bit

let myDiv = document.createElement("div");
const t3 = performance.now();
for (let i = 0; i <= 100; i++) {
  let element = document.createElement("p");
  element.textContent = "This is para " + i;

  myDiv.appendChild(element);
}
const t4 = performance.now();

document.body.appendChild(myDiv);
console.log("This took: " + (t4 - t3) + " ms");

//refresh and repaint

const to1 = performance.now();
let fragment = document.createDocumentFragment();
for (let i = 0; i <= 10; i++) {
  let newElements = document.createElement("p");
  newElements.textContent = "This is para " + i;

  fragment.appendChild(newElements);
}

document.body.appendChild(fragment);
const to2 = performance.now();
console.log("This took: " + (to2 - to1) + " ms");

function addPara() {
  let para = document.createElement("p");
  para.textContent = "Js is single";
  document.body.appendChild(para);
}

function newMessage() {
  let para = document.createElement("p");
  para.textContent = "Kya haal hain";
  document.body.appendChild(para);
}

addPara();
newMessage();

document.addEventListener("click", function () {
  console.log("hello");
});

// Async Code --> JS event loop
// Handling --> Browser

// Cycling --> Async load -> call stack -> browser -> queue -> when stack is entry

setTimeout(function () {
  console.log("Hi");
}, 4000);
