// // document.addEventListener("click", function () {
// //   console.log("I have clicked on the document");
// // });

// function eventFunction() {
//   console.log("I have clicked on the document");
// }

// document.addEventListener("click", eventFunction);
// // document.removeEventListener("click", eventFunction);

// let content = document.querySelector("#wrapper");
// content.addEventListener("click", function (event) {
//   console.log(event);
// });

// let links = document.querySelectorAll("a");
// let third = links[2];

// third.addEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("mazza aaya");
// });

// third.removeEventListener("click", function (event) {
//   event.preventDefault();
//   console.log("mazza aaya");
// });

// let myDiv = document.createElement("div");
// function paraStatus(event) {
//   console.log("I have clicked on para" + event.target.textContent);
// }

// myDiv.addEventListener("click", paraStatus);
// for (let i = 1; i <= 100; i++) {
//   let newElement = document.createElement("p");
//   newElement.textContent = "This is para " + i;

//   myDiv.appendChild(newElement);
// }

// document.body.appendChild(myDiv);

let element = document.querySelector("#wrapper");

element.addEventListener("click", function (event) {
  if (event.target.nodeName === "SPAN") {
    console.log("span par click kiya hai" + event.target.textContent);
  }
});
