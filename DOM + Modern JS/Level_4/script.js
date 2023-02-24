console.log("Pranav");

// Promise

let meraPromise = new Promise(function (resolve, reject) {
  setTimeout(function () {
    console.log("Im inside Promise");
  }, 5000);
  //   resolve(2000);
  reject(new Error("Error aa gaya bhai xD"));
});

console.log("Pehla");
