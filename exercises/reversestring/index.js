// --- Directions
// Given a string, return a new string with the reversed
// order of characters
// --- Examples
//   reverse('apple') === 'leppa'
//   reverse('hello') === 'olleh'
//   reverse('Greetings!') === '!sgniteerG'

// ? This solution is the easy cheat solution.

// function reverse(str) {
//   return str.split('').reverse().join('');
// }

// ? this solution is the iterator solution
// function reverse(str) {
//   let newString = [];
//   for (let letter of str) {
//     newString.unshift(letter);
//   }

//   return newString.join('');
// }

// ? solution uses iterator and addition to add each letter to the beginning of the new string.
// function reverse(str) {
//   let reversed = '';
//   for (let letter of str) {
//     reversed = letter + reversed;
//   }
//   return reversed;
// }

function reverse(str) {
  // reduce will return one value
  // reversedString(the first argument(the accumulator)) will be what is outputted
  // current letter is the currentValue, and will be what we add onto the reversedString value

  return str.split('').reduce((reversedString, currentLetter) => {
    return currentLetter + reversedString;
  });
}

reverse('asdf');
// this is to use debugger inside of vscode, or node inspect.

module.exports = reverse;
