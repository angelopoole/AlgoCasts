// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False
// !come back here
// function anagrams(stringA, stringB) {
  
// }
// anagrams('One one', 'One one c');

module.exports = anagrams;


// ? first solution, makes usage of objectMapper helper, a type of frequency counter. we then check if the length of one object is equal to the length of another object. if it is note then we return false. we then go and check through each key value of one object and compare it to the key values of another object. if there is a discrepency we return false. otherwise we return true.
// function anagrams(stringA, stringB) {
//   const objectMapper = string => {
//     string = string.replace(/[^\w]/g, '').toLowerCase();
//     let frequency = {};
//     for (let character of string) {
//       frequency[character] = ++frequency[character] || 1;
//     }
//     return frequency;
//   };

//   let object1 = objectMapper(stringA);
//   let object2 = objectMapper(stringB);

//   if (Object.keys(object1).length !== Object.keys(object2).length) {
//     return false;
//   }

//   for (let key in object1) {
//     if (object1[key] !== object2[key]) {
//       return false;
//     }
  // }

  // ! code below not needed as we run a check before in the if statement.
  //// for (key in object2) {
  ////   if (object2[key] !== object1[key]) {
  ////     return false;
  ////   }
  //// }
  return true;
}
