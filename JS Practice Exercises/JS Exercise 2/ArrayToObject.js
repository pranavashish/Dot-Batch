function getPropertyValues(arr, propName) {
  const values = arr.map((obj) => obj[propName]);
  return values;
}

// Test cases
const people = [
  { name: "Pranav", age: 22, gender: "male" },
  { name: "Amit", age: 21, gender: "male" },
  { name: "Soumya", age: 20, gender: "female" },
];

console.log(getPropertyValues(people, "name"));
console.log(getPropertyValues(people, "age"));
console.log(getPropertyValues(people, "gender"));
console.log(getPropertyValues(people, "address"));
