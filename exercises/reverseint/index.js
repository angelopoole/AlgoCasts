// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // let intParsed = parseInt(n.toString().split('').reverse().join(''));
  // return intParsed * Math.sign(n);
  // * or
  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

// ! end personal solutions
// ? this solution first parses the int, then checks to see if the original numbe was negative. if so, it subtracts the parsed number from 0 and returns that, else return parsed number
// function reverseInt(n) {
//   let intParsed = parseInt(n.toString().split('').reverse().join(''));
//   if (n < 0) {
//     return 0 - intParsed;
//   }
//   return intParsed;
// }

// ? first solution, weird way of solving it, manual check for negative number
// function reverseInt(n) {
//   let nArr = n.toString().split('');
//   if (nArr[0] === '-') {
//     return parseInt('-' + nArr.reverse().join(''));
//   }
//   return parseInt(nArr.reverse().join(''));
// }

module.exports = reverseInt;
