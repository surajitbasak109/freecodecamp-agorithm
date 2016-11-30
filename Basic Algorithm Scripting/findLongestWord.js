/* Find the Longest Word in a String */
function findLongestWord(str) {
  var newStr = str.split(' ');
  var longestWord = 0;
  for (var i = 0; i < newStr.length; i++)
  {
    if (newStr[i].length > longestWord)
    {
      longestWord = newStr[i].length;
    }
  }
  return longestWord;
}
findLongestWord("The quick brown fox jumped over the lazy dog");

