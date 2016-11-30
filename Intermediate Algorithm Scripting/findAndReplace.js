
function myReplace(str, before, after) {
  var _after;
  if (before.charCodeAt(0) === before.toUpperCase().charCodeAt(0)) {
    _after = after.charAt(0).toUpperCase() + after.slice(1);
  }
  else {
    _after = after;
  }
  
  return str.replace(before, _after);
}

myReplace("He is Sleeping on the couch", "Sleeping", "sitting");
