// //adding 100 para

// const t1 = performance.now();

// for (let i = 0; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;

//   document.body.appendChild(newElement);
// }
// const t2 = performance.now();
// console.log("This took: " + (t2 - t1) + " ms");
// // optimizing a bit

// let myDiv = document.createElement("div");
// const t3 = performance.now();
// for (let i = 0; i <= 100; i++) {
//   let element = document.createElement("p");
//   element.textContent = "This is para " + i;

//   myDiv.appendChild(element);
// }
// const t4 = performance.now();

// document.body.appendChild(myDiv);
// console.log("This took: " + (t4 - t3) + " ms");

// const t1 = performance.now();
// let fragment = document.createDocumentFragment();
// for (let i = 0; i <= 1000000; i++) {
//   let newElements = document.createElement("p");
//   newElements.textContent = "This is para " + i;

//   fragment.appendChild(newElements);
// }

// document.body.appendChild(fragment);
// const t2 = performance.now();
// console.log("This took: " + (t2 - t1) + " ms");

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
