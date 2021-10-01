// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

// ? in this one we set an index and chunked array. then while our index is less than the arraylength, we push a sliced array starting at index, up to index plus the size we want. At the end we then add on the size to the index and contune. at the end we return chunked.
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

// ? second solution, more concise, creates the subarray with an element before checking the length or pushing.
// function chunk(array, size) {
// const chunked = [];
// chunked will be the array we return
// for (element of array) {
// * last is an array that we begin at chunked.length -1. this represents a subarray created from the if statement below.
// const lastSubArray = chunked[chunked.length - 1];

// * if last does not exist OR its length is equal to the size limit on the array, we will create an array and push the element into the array.

// * if on the element we're iterating on, we see that there is no last (we're starting the function) or if the last array we pushed to chunked is not equal to the max size of the chunking array, we will push the element into the array at the end of the chunked array(this is what last represents, an array that is created by the first if statement.)
// if (!lastSubArray || lastSubArray.length === size) {
// debugger;
// chunked.push([element]);
// } else {
// lastSubArray.push(element);
// }
// }
// return chunked;
// }

// ? first solution, errors included using for in, inside of a for loop thats iterating over an array, checking array size being one less than that pf the size asked, and pushing subArr to fullArray in the case that there is a number left over inisde of the subArray after the for loop.
// function chunk(array, size) {
//   let subArr = [];
//   let fullArray = [];

//   for (let number of array) {
//     if (subArr.length === size - 1) {
//       subArr.push(number);
//       fullArray.push(subArr);
//       subArr = [];
//     } else {
//       subArr.push(number);
//     }
//   }
//   if (subArr.length > 0) {
//     fullArray.push(subArr);
//   }

//   return fullArray;
// }

chunk([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3);

module.exports = chunk;
