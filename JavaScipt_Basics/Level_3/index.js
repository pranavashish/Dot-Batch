// console.log("Level #3");

// let lastname = "Ashish";

// let firstname = new String("Pranav");

// console.log(typeof lastname);
// console.log(typeof firstname);

// console.log(lastname.charAt(2));

// console.log(
//   `Hello ${firstname},

// Thanks for learning MERN Stack

// Regards,
// ${lastname}`
// );
// let date = new Date();
// let date2 = new Date("Apr 01 2000 9:50");
// let date3 = new Date(2000, 3, 01, 9);

// date3.setFullYear(2004);

// console.log(date3);

// arrays

// let numbers = [1, 2, 3, 4];

// console.log(numbers);

// END       --> push
// Beginning --> unshift
// Middle    --> splice

// console.log(numbers.includes(30));

// SEARCHING

// Primitive --> indexOF, includes
// Object/Refrences --> callback functions

let courses = [
  { no: 1, name: "Pranav" },
  { no: 2, name: "Ashish" },
];

// console.log(courses);

// console.log(courses.includes({ no: 1, name: "Pranav" }));

// let course = courses.find(function (course) {
//   return course.name == "Pranav";
// });

// console.log(course);

//ARROW FUNCTIONS

let courseArrow = courses.find((course) => course.name === "Pranav");

console.log(courseArrow);
