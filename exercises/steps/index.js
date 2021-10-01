// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// ? recursive
function steps(n, row = 0, stair = '') {
  // identify a base case.
  if (n === row) {
    return;
  }
  if (stair.length === n) {
    console.log(stair);
    return steps(n, row + 1);
  }

  // if the length of the stair string is <= row, add a pound otherwise add a space

  if (stair.length <= row) {
    stair += '#';
  } else {
    stair += ' ';
  }
  steps(n, row, stair);
}

steps(10);

// ? same as bottom but instead we're using for loops since they're safer and auto reset value of column
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }
//     console.log(stair);
// once the forloop hits here^ it increments and moves on!
//   }
// }

// ? this solution visualizes the matrix as a row and column setup. here we will iterate through the rows and while inside of a row we will iterate through the columns. after we iterate through all of the columns we will set colum back to zero and run through the second row with the same thought process.
// function steps(n) {
// let row = 0;
// let column = 0;

// while (row < n) {
//   let stair = '';
//   while (column < n) {
//     debugger;
//     if (column <= row) {
//       stair += '#';
//     } else {
//       stair += ' ';
//     }
//     column++;
//   }
//   console.log(stair);
//   column = 0;
//   row++;
// }
// }
steps(3);

// ? first solution, uses two while loops inside of a while loop to create spaces per number of spaces and #'s per number n on iteration i
// function steps(n) {
// calculate number of spaces, and number of #'s
//spaces first, then #
/* 
  in the case of n = 2
  we want to output 
  '# '
  '##'

  so that would be space = n - i
  i = 1, 
  n = 2
  n - i
  =1 space
  remainder should be #
  */

// let i = 1;
// while (i <= n) {
//   let stairCase = [];
//   let numberOfSpaces = n - i;
//   let spaceCounter = 0;
//   let x = 0;
//   debugger;
//   while (x < i) {
//     stairCase.push('#');
//     x++;
//   }
//   while (spaceCounter < numberOfSpaces) {
//     stairCase.push(' ');
//     spaceCounter++;
//   }
//   console.log(stairCase.join(''));
//   i++;
// }
// }

// steps(5);

module.exports = steps;
