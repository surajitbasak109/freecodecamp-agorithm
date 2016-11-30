/* Trancate a string */
function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (str.length > num && num > 3)
  {
    return str.slice(0, (num - 3)) + '...';
  }
  else if (str.length > num && num <= 3)
  {
    return str.slice(0, num) + '...';
  }
  return str;
}

truncateString("Absolutely Longer", 2);
