function bouncer(arr) {
  let newArr = arr.filter(item => Boolean(item)===true);
  console.log(newArr);

  return newArr;
}
