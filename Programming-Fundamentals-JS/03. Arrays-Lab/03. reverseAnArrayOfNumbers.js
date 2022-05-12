function reverse(n, inputArr) {

  let arr = [];
  let result = '';

  for (let i = 0; i < n; i++) {
    arr.push(inputArr[i]);
  }

  for (let i = n - 1; i >= 0; i--) {
    result += arr[i] + ' ';
  }

  console.log(result);
}
reverse(3, [10, 20, 30, 40, 50]);
reverse(4, [-1, 20, 99, 5]);
reverse(2, [66, 43, 75, 89, 47]);