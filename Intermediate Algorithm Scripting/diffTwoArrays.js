
function diffArray(arr1, arr2) {
  var newArr = [];
  // Same, same; but different.
  newArr = arr1.concat(arr2).filter(function (val) {
    if (!(arr1.indexOf(val) != -1 && arr2.indexOf(val) != -1)) return val; 
  });
  return newArr;
}

diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]);
diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]) // should return an array.
//~ ["diorite", "andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return ["pink wool"].
//~ ["andesite", "grass", "dirt", "pink wool", "dead shrub"], ["diorite", "andesite", "grass", "dirt", "dead shrub"] // should return ["diorite", "pink wool"].
//~ ["andesite", "grass", "dirt", "dead shrub"], ["andesite", "grass", "dirt", "dead shrub"] // should return [].
//~ [1, 2, 3, 5], [1, 2, 3, 4, 5] // should return [4].
//~ [1, "calf", 3, "piglet"], [1, "calf", 3, 4] // should return ["piglet", 4].
//~ [], ["snuffleupagus", "cookie monster", "elmo"] // should return ["snuffleupagus", "cookie monster", "elmo"].
//~ [1, "calf", 3, "piglet"], [7, "filly"] // should return [1, "calf", 3, "piglet", 7, "filly"].

