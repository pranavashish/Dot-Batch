function commonNum(arr1, arr2) {
  let arr3 = [];
  let k = 0;
  for (let i = 0; i < arr1.length; i++) {
    for (let j = 0; j < arr2.length; j++) {
      if (arr1[i] === arr2[j]) {
        arr3[k] = arr1[i];
        k++;
      }
    }
  }
  return arr3;
}

console.log(commonNum([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]));
