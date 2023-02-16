// @ Function

// Syntax -->
function run() {
  console.log("running");
}

// function call or invoke

run();

// -----------------------------------------------------------------------------

// @ Named function assignment

let stand = function walk() {
  console.log("walking");
};

// @ Anonymousfunction assignment

let stand2 = function () {
  console.log("walking");
};

stand();
stand2();

// -----------------------------------------------------------------------------

// @ FUNCTIONS

let x = 1;
x = "a";

console.log(x);

function sum(a, b) {
  console.log(a + b);
}

sum(1, 2);
sum(1);
sum();
sum(1, 2, 3, 4, 5);

// -----------------------------------------------------------------------------

// @ Arguments

function sum(a, b) {
  console.log(arguments);
  console.log(a + b);
}

// Dynamic parameters

function sum(a, b) {
  let total = 0;
  for (let value of arguments) total = total + value;
  console.log(total);
}
sum(1, 2, 3, 4, 5, 6);

// -----------------------------------------------------------------------------

// @ Rest Operator  -> ...

function sum(...args) {
  console.log(args);
}

sum(1, 2, 3, 4, 5, 6);

// -----------------------------------------------------------------------------

// @ Default Parameters

function interest(p, r = 6, y = 2) {
  console.log((p * r * y) / 100);
}

interest(1000);

// -----------------------------------------------------------------------------

// @ Getter Setter

// getter -> access properties
// setter -> update or change properties

let person = {
  fname: "Pranav",
  lname: "Ashish",
  get fullName() {
    console.log(`${person.fname} ${person.lname} `);
  },

  set fullName(value) {
    if (typeof value !== String) {
      throw new Error("You have not sent a String");
    }
    let parts = value.split(" ");
    this.fname = parts[0];
    this.lname = parts[1];
  },
};

// calling getter

person.fullName;

console.log(person.fullName);

// calling setter

person.fullName = "Binod Singh";
console.log(person.fullName);

console.log(person);

function fullName() {
  console.log(`${person.fname} ${perlname} `);
}

fullname(person.fname, person.lname);

// -----------------------------------------------------------------------------

// @ Try and Catch <- Error Handling

try {
  person.fullName = 80;
} catch (e) {
  alert("You have sent a number in fullname");
}

try {
  person.fullName = true;
} catch (e) {
  alert("You have sent a boolean in fullname");
}

try {
  person.fullName = true;
} catch (e) {
  alert(e);
}

console.log(person.fullName);

// -----------------------------------------------------------------------------

// @ Scope Let < Var

function walk() {
  var a = 5;
}
console.log(a);

for (var i = 0; i < 10; i++) {}

console.log(i);

function a() {
  const ab = 5;
}
const ab = 5;
function b() {
  const ab = 5;
}

// -----------------------------------------------------------------------------

// @ REDUCING ARRAYS

let arr = [1, 2, 3, 4];
let total = 0;

for (let value of arr) {
  total += value;
}

console.log(total);

// let totalSum = arr.reduce(
//   (accumulator, currentValue) => accumulator + currentValue,
//   0
// );

let totalSum = arr.reduce((total, value) => total + value);

console.log(totalSum);
