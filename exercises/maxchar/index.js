// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"

// ? first solution, frequency counter. runs through the values and creates an object that mapps each string and the ammount of times it's created to an object. this object then can be run through and the largest key/value pair can then be assigned to the largest value variable.
function maxChar(str) {
  let frequencyCounter = {};
  let largestValue;
  let localValue = 0;
  for (let char of str) {
    if (!frequencyCounter[char]) {
      frequencyCounter[char] = 1;
    } else {
      frequencyCounter[char]++;
    }
  }

  for (let value in frequencyCounter) {
    if (frequencyCounter[value] > localValue) {
      localValue = frequencyCounter[value];
      largestValue = value;
    }
  }

  return largestValue;
}

maxChar('iebvisdjfnaslidjfb');

module.exports = maxChar;
