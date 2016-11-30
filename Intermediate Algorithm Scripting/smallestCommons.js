
function smallestCommons(arr) {
  arr.sort(function (a, b) {
    return b - a;
  });
  
  var newArr = [];
  for (var i = arr[0]; i >= arr[1]; i--) {
    newArr.push(i);
  }
  
  var quot = 0,
  loop = 1,
  n;
  
  do {
    quot = newArr[0] * loop * newArr[1];
    for (n = 0; n < newArr.length; n++) {
      if (quot % newArr[n] !== 0) {
        break;
      }
    }
    loop++;
  } while (n !== newArr.length);
  
  return quot;
}


smallestCommons([1,13]);
