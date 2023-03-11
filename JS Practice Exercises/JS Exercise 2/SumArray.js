function arraySum(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum;
}

let arr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(arraySum(arr1));
