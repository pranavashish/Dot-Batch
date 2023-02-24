// // Promise

// let meraPromise1 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Im inside Promise 1");
//   }, 5000);
//   //   resolve(2000);
//   //   reject(new Error("Error aa gaya bhai xD"));
// });

// let meraPromise2 = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Im inside Promise 2");
//   }, 3000);
//   //   resolve(2000);
//   //   reject(new Error("Error aa gaya bhai xD"));
// });

// let meraPromise = new Promise(function (resolve, reject) {
//   setTimeout(function () {
//     console.log("Im inside Promise");
//   }, 2000);
//   //resolve(2000);
//   reject(new Error("Error aa gaya bhai xD"));
// });

// meraPromise.then(
//   (value) => {
//     console.log(value);
//   },
//   (error) => {
//     console.log("error aaaya broo");
//   }
// );

// // meraPromise.catch();

// // console.log("pehla");

// let wada1 = new Promise(function (resolve, reject) {
//   setTimeout(() => {
//     console.log("setTimout 1 started");
//   }, 2000);
//   resolve(true);
// });

// let output = wada1.then(() => {
//   let wada2 = new Promise(function (resolve, reject) {
//     setTimeout(() => {
//       console.log("setTimout 1.5 started");
//     }, 3000);
//     resolve("Wada 2 to resolved");
//   });
//   return wada2;
// });
// output.then((value) => console.log(value));

// //  ASYNC AWAIT

// async function abcd() {
//   return 7;
// }

// abcd();

// async function utility() {
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Delhi mein bohot garmi hai");
//     }, 5000);
//   });

//   let mumbaiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("Mumbai is cool");
//     }, 7000);
//   });

//   let dM = await delhiWeather;
//   let mM = await mumbaiWeather;

//   return [dM, mM];
// }

//Fetch API
