const array = [3576,20,7];

function biggestNumberInArray(arr) {
  var a = -Infinity,
    i = 0,
    n = arr.length;
  for (i = 0; i != n; ++i) {
    if (arr[i] > a) {
      a = arr[i];
    }
  }
  return a;
}

console.log(biggestNumberInArray(array));