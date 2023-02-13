console.log("Let's start");

//object creation

// const rectangle = {
//   length: 1,
//   breadth: 2,

//   draw: function () {
//     console.log("draw");
//   },
// }

// let rectangleObj1 = createRectangle();

// factory function

function createRectangle(len, bre) {
  return (rectangle = {
    length: len,
    breadth: bre,

    draw() {
      console.log("drawing rectangle " + len * bre);
    },
  });
}

let rectangleObj1 = createRectangle(5, 2);
let rectangleObj2 = createRectangle(15, 12);
let rectangleObj3 = createRectangle(7, 22);
