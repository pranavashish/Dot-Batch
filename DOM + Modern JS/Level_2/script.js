// document.addEventListener("click", function () {
//   console.log("I have clicked on the document");
// });

function eventFunction() {
  console.log("I have clicked on the document");
}

document.addEventListener("click", eventFunction);
// document.removeEventListener("click", eventFunction);

let content = document.querySelector("#wrapper");
content.addEventListener("click", function (event) {
  console.log(event);
});

let links = document.querySelectorAll("a");
let third = links[2];

third.addEventListener("click", function (event) {
  event.preventDefault();
  console.log("mazza aaya");
});

third.removeEventListener("click", function (event) {
  event.preventDefault();
  console.log("mazza aaya");
});
