// insert arr1 into arr2 at index n without modifying both
// starting arrays

function frankenSplice(arr1, arr2, n) {
  var newArr = arr2.slice();
  newArr.splice(n, 0, ...arr1);
  console.log(newArr, arr2);
  return newArr;
}
