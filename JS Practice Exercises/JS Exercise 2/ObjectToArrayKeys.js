function convert(obj) {
  const keys = Object.keys(obj);
  return keys;
}

const person = {
  name: "John",
  age: 30,
  gender: "male",
  city: "New York",
};

console.log(convert(person));
// console.log(getKeys({}));
