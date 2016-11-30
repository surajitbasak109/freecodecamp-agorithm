/* Chunky Monkey */
function chunkArrayInGroups(arr, size) {
  var newArr = [];
  var j = 0;
  for (var i = 0; i < Math.ceil(arr.length / size); i++) {
    newArr[i] = arr.slice(j, j + size);
    j = j + size;
  }
  return newArr;
}

chunkArrayInGroups(["a", "b", "c", "d"], 2);

