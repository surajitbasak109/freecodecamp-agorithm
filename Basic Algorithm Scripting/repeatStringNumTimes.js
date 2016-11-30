/* Repeat a string repeat a string */
function repeatStringNumTimes(str, num) {
  // repeat after me
  if (num > 0) {
    return str.repeat(num);
  }
  return '';
}

repeatStringNumTimes("abc", 3);
