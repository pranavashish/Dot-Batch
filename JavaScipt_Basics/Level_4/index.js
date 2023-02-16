// @ Function

// Syntax -->
// function run() {
//   console.log("running");
// }

// function call or invoke

// run();

// -----------------------------------------------------------------------------

// @ Named function assignment

// let stand = function walk() {
//   console.log("walking");
// };

// @ Anonymousfunction assignment

// let stand2 = function () {
//   console.log("walking");
// };

// stand();
// stand2();

// -----------------------------------------------------------------------------

// @ FUNCTIONS

// let x = 1;
// x = "a";

// console.log(x);

// function sum(a, b) {
//   console.log(a + b);
// }

// sum(1,2);
// sum(1);
// sum();
// sum(1, 2, 3, 4, 5);

// -----------------------------------------------------------------------------

// @ Arguments

// function sum(a, b) {
//   console.log(arguments);
//   console.log(a + b);
// }

// Dynamic parameters

// function sum(a, b) {
//   let total = 0;
//   for (let value of arguments) total = total + value;
//   console.log(total);
// }
// sum(1, 2, 3, 4, 5, 6);

// -----------------------------------------------------------------------------

// @ Rest Operator  -> ...

// function sum(...args) {
//   console.log(args);
// }

// sum(1, 2, 3, 4, 5, 6);

// -----------------------------------------------------------------------------

// @ Default Parameters

// function interest(p, r = 6, y = 2) {
//   console.log((p * r * y) / 100);
// }

// interest(1000);

// -----------------------------------------------------------------------------

// @ Getter Setter

// getter -> access properties
// setter -> update or change properties

// let person = {
//   fname: "Pranav",
//   lname: "Ashish",
//   get fullName() {
//     console.log(`${person.fname} ${person.lname} `);
//   },

//   set fullName(value) {
//     let parts = value.split(" ");
//     this.fname = parts[0];
//     this.lname = parts[1];
//   },
// };

//calling getter

// person.fullName;

// console.log(person.fullName);

//calling setter

// person.fullName = "Binod Singh";
// console.log(person.fullName);

// console.log(person);

// function fullName() {
//     console.log(`${person.fname} ${perlname} `);
//   }

// fullname(person.fname, person.lname);

// -----------------------------------------------------------------------------

// @ Try and Catch <- Error Handling
