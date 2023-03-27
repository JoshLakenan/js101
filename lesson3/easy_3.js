/* 1

let numbers = [1, 2, 3, 4];

numbers.splice(0, numbers.length);

console.log(numbers);

numbers = [1, 2, 3, 4];

while (numbers.length) {
  numbers.pop();
}

console.log(numbers);

numbers = [1, 2, 3, 4];

numbers.length = 0;

console.log(numbers);
*/

/* 2
"1,2,34,5"
*/

/* 3 'hello there'
*/

/* 4 

//WRONG - logs the initial value of arr1. arr2 was created by returning a shallow copy of the arr1 array through the slice method so the two variables are pointing
to distinct arrays.

//arr2 IS a shallow copy and a new array, but the copied object in element 1 was copied by reference, so the new array does stil have a pointer to the 
initial array's objects. So line 2 DOES mutate the objects in both arrays.
*/

/* 5
*/

function isColorValid(color) {
  return (color === "blue" || color === "green");
}

let  isCValid = color => ["blue", "green"].includes(color);

console.log(isColorValid('blue'));
console.log(isColorValid('yellow'));

console.log(isCValid('green'));
console.log(isCValid('yellow'));
