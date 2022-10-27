const quickSort = (arr) => {
  let left = [];
  right = [];
  equals = [];

  for (let i in arr) {
    arr[i] < arr[0]
      ? left.push(arr[i])
      : arr[i] > arr[0]
      ? right.push(arr[i])
      : equals.push(arr[0]);
  }
  return left.concat(equals).concat(right);
};
