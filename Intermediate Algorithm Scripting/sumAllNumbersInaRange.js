function sumAll(arr) {
  // Creating an empty list(array)
  var list = [];
  // At first I need to determine max and min numbers in an array
  var max = Math.max(arr[0], arr[1]);
  var min = Math.min(arr[0], arr[1]);
  // looping until max number is reached
  for (var i = min; i <= max; i++) {
    list.push(i);
  }
  // Now making sum of all array item
  var total = list.reduce(function (a, b) {
    return a + b;
  });
  return total;
}

sumAll([5, 10]);
