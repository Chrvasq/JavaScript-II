// Create a higher order function and invoke the callback function to test your work. You have been provided an example of a problem and a solution to see how this works with our items array.  Study both the problem and the solution to figure out the rest of the problems.

const items = ['Pencil', 'Notebook', 'yo-yo', 'Gum'];

/* 

  //Given this problem: 
  
  function firstItem(arr, cb) {
    // firstItem passes the first item of the given array to the callback function.
  }

  // Potential Solution:

  // Higher order function using "cb" as the call back
  function firstItem(arr, cb) {
    return cb(arr[0]);
  }

  // Function invocation 
  firstItem(items, function(first) {
    console.log(first)
  });

*/


function getLength(arr, cb) {
  // getLength passes the length of the array into the callback.
  return cb(arr.length);
}

getLength(items, item => console.log(item));

function last(arr, cb) {
  // last passes the last item of the array into the callback.
  return cb(arr[arr.length - 1]);
}

last(items, item => console.log(item));

function sumNums(x, y, cb) {
  // sumNums adds two numbers (x, y) and passes the result to the callback.
  return cb(x + y);
}

sumNums(2, 3, sum => console.log(sum)); // 5

function multiplyNums(x, y, cb) {
  // multiplyNums multiplies two numbers and passes the result to the callback.
  return cb(x * y);
}

multiplyNums(2, 3, product => console.log(product)); // 6


function contains(item, list, cb) {
  // contains checks if an item is present inside of the given array/list.
  // Pass true to the callback if it is, otherwise pass false.
  return cb(list.includes(item));
}

contains('Notebook', items, bool => console.log(bool)); // True
contains('Pie', items, bool => console.log(bool)); // False

/* STRETCH PROBLEM */

/* USING SET DATA STRUCTURE */
function removeDuplicates(array, cb) {
  // removeDuplicates removes all duplicate values from the given array.
  // Pass the duplicate free array to the callback function.
  // Do not mutate the original array.
  const unique_set = new Set(array);
  const unique_arr = [...unique_set];

  return cb(unique_arr);
}
const test_array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8];
removeDuplicates(test_array, arr => console.log(arr)); // array without dupes
console.log("Original array", test_array); // original array not mutated

/* USING REDUCE METHOD */
// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   const unique_arr = array.reduce((unique, item) => unique.includes(item) ? unique : [...unique, item], []) // initial value of accumulator is empty array

//   return cb(unique_arr);
// }
// const test_array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8];
// removeDuplicates(test_array, arr => console.log(arr)); // array without dupes
// console.log("Original array", test_array); // original array not mutated

/* USING FILTER METHOD */
// function removeDuplicates(array, cb) {
//   // removeDuplicates removes all duplicate values from the given array.
//   // Pass the duplicate free array to the callback function.
//   // Do not mutate the original array.
//   const unique_arr = array.filter((item, index) => array.indexOf(item) === index);

//   return cb(unique_arr);
// }
// const test_array = [1, 2, 3, 4, 4, 5, 6, 7, 8, 8, 8];
// removeDuplicates(test_array, arr => console.log(arr)); // array without dupes
// console.log("Original array", test_array); // original array not mutated