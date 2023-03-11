function returnString(arr) {
  let finarr = [];
  let j = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > 5) {
      finarr[j] = arr[i];
      j++;
    }
  }
  return finarr;
}

let arr = ["apple", "banana", "kiwi", "watermelon", "orange"];

console.log(returnString(arr));
