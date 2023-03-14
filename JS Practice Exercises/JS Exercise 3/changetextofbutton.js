const button = document.querySelector("button");
function change() {
  if (button.textContent === "Click Me") {
    button.textContent = "clicked";
  } else {
    button.textContent = "Click Me";
  }
  button.addEventListener("clicked", change);
}
