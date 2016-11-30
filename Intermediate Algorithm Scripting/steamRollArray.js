
function steamrollArray(arr) {
  // I'm a steamroller, baby
  var newArr = [];
  var func = function (args) {
    if (!Array.isArray(args)) {
        newArr.push(args);
    } else {
        for (var a in args) {
            func(args[a]);
        }
    }
  };

  arr.forEach(func);
  return newArr;
}

steamrollArray([[["a"]], [["b"]]]);