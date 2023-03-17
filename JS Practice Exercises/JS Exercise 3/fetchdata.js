function fetchData(url, callback) {
  fetch(url)
    .then((response) => response.json())
    .then((data) => callback(null, data))
    .then((error) => callback(error, null));
}

fetchData("https://jsonplaceholder.typicode.com/todos/1", (error, data) => {
  if (error) {
    console.error(error);
  } else {
    console.log(data);
  }
});
