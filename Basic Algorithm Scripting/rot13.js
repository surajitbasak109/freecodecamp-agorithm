
function palindrome(str) {
  // Good luck!
  var newStr = str.toLowerCase().replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "");
  var newRevStr = str.split('').reverse().join('').toLowerCase().match(/\w+/gi).join('').replace(/[^a-z0-9]/gmi, "").replace(/\s+/g, "");
  return newStr == newRevStr;
}

palindrome("_eye");
