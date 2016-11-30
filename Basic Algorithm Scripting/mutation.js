/* Mutations */

function mutation(arr) {
  var first_item = arr[0].toLowerCase().split("");
  var second_item = arr[1].toLowerCase().split("");
  var count = 0;
  for (var i = 0; i < second_item.length; i++)
  {
    if (first_item.indexOf(second_item[i]) > -1)
    {
      count++;
    }
  }
  
  if (count == second_item.length)
  {
    return true;
  } else {
    return false;
  }
}

mutation(["zyxwvutsrqponmlkjihgfedcba", "qrstu"]);
