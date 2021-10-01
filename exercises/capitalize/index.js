// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// ? another solution that abstracts away the splitString bit,
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }
  return words.join(' ');
}

// ? another solution that uses slice instead of splitting up the while word again.
// function capitalize(str) {
//   let splitString = str.split(' ');
//   let newString = [];
//   for (let word of splitString) {
//     newString.push(word[0].toUpperCase() + word.slice(1));
//   }

//   return newString.join(' ');
// }

// ? first solution, uses multiple reassignments in forloop to create a new word that is capitalized. then pushes it onto a new array that is then joined with spaces.
// function capitalize(str) {
//   let splitString = str.split(' ');
//   let newStringArr = [];
//   for (word of splitString) {
//     word = word.split('');
//     word[0] = word[0].toUpperCase();
//     word = word.join('');

//     console.log(word);
//     newStringArr.push(word);
//   }
//   return newStringArr.join(' ');
// }

module.exports = capitalize;
