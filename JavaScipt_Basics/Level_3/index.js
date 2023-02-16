console.log("Level #3");

let lastname = "Ashish";

let firstname = new String("Pranav");

console.log(typeof lastname);
console.log(typeof firstname);

console.log(lastname.charAt(2));

// -----------------------------------------------------------------------------

// @@@ BACKTICK

console.log(
  `Hello ${firstname},

Thanks for learning MERN Stack

Regards,
${lastname}`
);
let date = new Date();
let date2 = new Date("Apr 01 2000 9:50");
let date3 = new Date(2000, 3, 01, 9);

date3.setFullYear(2004);

console.log(date3);

// -----------------------------------------------------------------------------

// @@@ arrays

let numberz = [1, 2, 3, 4];

console.log(numberz);

// -----------------------------------------------------------------------------

// @@@ ADDING ELEMENT

// END       --> push
// Beginning --> unshift
// Middle    --> splice

console.log(numbers.includes(30));

// -----------------------------------------------------------------------------

// @@@ SEARCHING

// Primitive --> indexOF, includes
// Object/Refrences --> callback functions

let courses = [
  { no: 1, name: "Pranav" },
  { no: 2, name: "Ashish" },
];

console.log(courses);

console.log(courses.includes({ no: 1, name: "Pranav" }));

let course = courses.find(function (course) {
  return course.name == "Pranav";
});

console.log(course);

// -----------------------------------------------------------------------------
// @@@ ARROW FUNCTIONS

let courseArrow = courses.find((course) => course.name === "Pranav");

console.log(courseArrow);

// -----------------------------------------------------------------------------

// @@@ Removing element

// END       --> pop
// Beginning --> shift
// Middle    --> splice(index, count(no of element u want to delete),)

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

numbers.pop();

numbers.shift();

numbers.splice(1, 3);

console.log(numbers);

let numberss = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let numbers2 = numberss;

numbers = [];

console.log(numberss);

console.log(numbers2);

// -----------------------------------------------------------------------------

// @@@ COMBINING & SLICING ARRAYS  -> concat() , slice()

let nums1 = [1, 2, 3, 4, 5];
let nums2 = [6, 7, 8, 9, 10];

let num3 = num1.concat(num2);

console.log(num3);

let num4 = num3.slice(0, 5);

console.log(num4);

// FULL SLICING -->  slice()

// -----------------------------------------------------------------------------

// @ Spread Operator

let num1 = [1, 2, 3, 4, 5];
let num2 = [6, 7, 8, 9, 10];

let combinedd = [...num1, ...num2];

let combined = [...num1, "a", false, "b", ...num2];

console.log(combined);

// -----------------------------------------------------------------------------

// @ Iterating an ARRAY

// for of

let ar = [10, 20, 30, 40, 50];

for (let value of arr) {
  console.log(value);
}

forEach;

arr.forEach((number) => console.log(number));

// -----------------------------------------------------------------------------

// @ Joining ARRAY

let a = [10, 20, 30, 40, 50];

const joinedd = arr.join(" ");

console.log(joinedd);

// -----------------------------------------------------------------------------

// @ Split ARRAY

let message = "This is my first message";
let parts = message.split(" ");

console.log(parts);

let joined = parts.join(" ");
console.log(joined);

// -----------------------------------------------------------------------------

// @ Sorting ARRAY

let arra = [40, 80, 10, 30, 20, 35, 50, 40];

let fin1 = arr.sort();

let fin = fin1.reverse();

console.log(fin);

let arrr = [
  { id: 1, name: "Pranav" },
  { id: 2, name: "Ashish" },
];

arr.sort((a1, a2) => a1.name > a2.name);
console.log(arr);

// -----------------------------------------------------------------------------

// @ filtering ARRAY .filter(callback)

let array = [1, 2, -3, -5];

let filteredd = arr.filter((value) => value >= 0);

console.log(filteredd);

// -----------------------------------------------------------------------------

// @  Mapping ARRAY *(.map)  => Map each element of array to something else

let arr = [7, 8, 9, 10];

console.log(arr);

let itemss = arr.map((value) => "student_no " + value);

console.log(itemss);

// -----------------------------------------------------------------------------

// @  Mapping OBJECTS *(.map)

let number = [1, 2, -6, -9];

let filtered = number.filter((value) => value >= 0);

// let items = filtered.map(function (num) {
//   return { value: num };
// });

//chaining

let items = number
  .filter((value) => value >= 0)
  .map(function (num) {
    return { value: num };
  });

console.log(items);
