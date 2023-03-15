function removes(element, className) {
  const element = document.getElementById("elementID");
  element.addEventListener("scroll", () => {
    {
      element.classList.remove(className);
    }
  });
}
