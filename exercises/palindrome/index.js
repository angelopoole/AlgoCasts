// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

// ? this soluton does 2x more work because it cross checks the array. it checks till the middle of the array, then it continues past that. This causes 2x more work since the array is already confirmed to be true or false in terms of being a palindrome.
function palindrome(str) {
  return str.split('').every((val, index) => {
    return val === str[str.length - index - 1];
  });
}
palindrome('acebeca');

// ? first solution before watching, uses easy reverse from reverseString challenge and compares it to string to see if they're palindrome's of eachother.
// function palindrome(str) {
//   let reversedString = str.split('').reverse().join('');
//   if (str === reversedString) {
//     return true;
//   }
//   return false;
// can also return str === reversedString
// }

module.exports = palindrome;
