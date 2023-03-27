/*
Define a function that removes duplicates from an array of numbers.  Return the new array with the duplicates removed.  The order of the array should remain the same.
*/
// let newArr = [];

// function distinct(array) {
//   for (let idx = 0; idx = array.length;) {
//     newArr.push(array[0]);
//     if (newArr)
//     idx += 1;
//   }
// }

/*
Understand the [P]roblem
========================
Take this step to read the problem statement and have a thorough understanding. Then extract the following information:

Input:
- Array of numbers

Output:
- New array of numbers

Rules:
- New array should have duplicates removes
  - All elements of the new array are unique
- "Order of the array should remain the same"
  - Is it numerical order?
  - Is it the order in which it appears?
    - Asked interviewer to clarify, we mean the order in which it appears


[E]xamine the Test Cases
========================
For this step, we examine the test cases to:

1. Confirm our understanding our problem
2. Check for implicit requirements, which are implied requirements that are not explicitly stated in the problem statement

---Intermission---

Mental Model

We should have a mental model of what we have to do to solve this problem before moving onto the Data Structure step. If we have one, we can simply move on.

If we don't have a mental model yet, one way to develop one is to:
Take the input and output, and create a gradual set of steps in between, so that we have a high view of WHAT we have to do

[1, 1, 1, 2, 3, 4, 5] -> [] -> [1] -> [1, 2] -> [1, 2, 3] ->
[1, 2, 3, 4] ->  [1, 2, 3, 4, 5]


Our mental model:
- Create a new array that has the elements of the original array based on a condition


[D]ata Structure
================
Do I need a data structure (array or object) for my solution/mental model?

- We're going to need an array to house the unique values

[A]lgorithm
===========
- A series of steps, written in plain english, to get from input to output
- Getting the right amount of detail is key:
  - Has to be specific enough to implement in code
  - Has to be broad enough so you're not mentioning specific JavaScript syntax or methods
      X "Use the forEach method on the array"
      O "Iterate through the array"

The HOW:
--------
- declare a variable and initialize it to an empty array
- iterate through each element of the input array


[C]ode with Intent
==================
- We're sticking as close to possible to the algorithm
- Translate the algorithm into code
- If you run into a problem in the code, stop coding, go back to your algorithm
- Test your code often - run it frequently, log the values intermittently



Chase
-----
- create a new empty array
- iterate through each index value of the array passed to the
function distinct
- Move the first value from the argument array to the new array
- use an if statement to check if the the next array element in iteration is equal to the previous array element
- if the two array elements are equal, skip to the next element in iteration
- if the two array elements are not equal, push the element to the new array

OR
- create a new empty array
- iterate through each index value of the array passed to the
function distinct
- push the first element from the array passed to the function to the new array
- check if the next value in iteration is included in the new array 
- if the next value is included, skip the value
- if not, push the next value to the new array 

OR 
use new Set (arr) for each of the test cases



Josh
----
- declare a function with the variable name distinct that with a single parameter (which is expected to be an array)
  - create a new empty array
  - iterate through each element of the argument array
    - check if the new empty array already has the element of the argument 
      array at the current interation index.
    - if it does not, add the current element of the argument array to the end of the new array. (preserving the order of the argument array)
  - return the new array

function distinct (array) {
  let resultArray = [];

  for (let i = 0; i < array.length; i += 1) {
    if (!resultArray.includes(array[i])) resultArray.push(array[i]);
  }
  
  return resultArray;
}



David
-----
- declare a variable and initialize it to an empty array
- declare a function that has one parameter and uses a loop 
- pass an array argument into the function for iteration
- use a loop to iterate through the array argument
- push an element to the new array during each iteration
- if the element is already included in the new array, continue to next interation
- output the new array to the console



Hamdi
-----
 declare a variable and initialize it to an empty array
- iterate through each element of the input array
-Check if the current element is strictly equal to the previous element
-If it is NOT, then push this element onto the new array
--Return the new array with all duplicates removed



Lincoln
-------
-declare a variable, initialize to a new array
-iterate through each element of each array
-identify duplicate elements if any -> flesh out more 

-return a new array with no duplicates 
*/


// if you're reading this, Daniel, we're not upset, just disappointed...


//here's one way to do it! Thanks again, Grace! 
function distinct (array) {
  let resultArray = []; //[array[0]];

  for (let i = 0; i < array.length; i += 1) {
    
    let resultHasElement = false;
    
    for(let j = 0; j < resultArray.length; j += 1) {
      if (resultArray[j] === array[i]) resultHasElement = true;
    }
    
    if (!resultHasElement) resultArray.push(array[i]);
  }
  
  return resultArray;
}

console.log(distinct([1]));
// [1]
console.log(distinct([1, 2]));
// [1, 2]
console.log(distinct([1, 1, 2]));
// [1, 2]
console.log(distinct([1, 1, 1, 2, 3, 4, 5]));
// [1, 2, 3, 4, 5]
console.log(distinct([1, 2, 2, 3, 3, 4, 4, 5, 6, 7, 7, 7]));
// [1, 2, 3, 4, 5, 6, 7]

