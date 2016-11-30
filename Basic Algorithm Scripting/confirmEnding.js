/* Confirm the Ending */

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  return target == str.substring(str.indexOf(target));
}

confirmEnding("Bastian", "n");

