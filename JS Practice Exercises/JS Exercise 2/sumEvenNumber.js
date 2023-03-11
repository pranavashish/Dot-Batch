function sumEvenNumber(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let arr = [
  1, 56, 8498, 1261, 894, 12, 49, 84, 1, 58, 94, 31, 11, 238, 894, 5198,
];

console.log(sumEvenNumber(arr));
