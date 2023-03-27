/* 1

let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.replace('important', 'urgent'));
*/

/* 2

let numbers = [1, 2, 3, 4, 5];
console.log(numbers.slice().reverse()); // [ 5, 4, 3, 2, 1 ]

console.log([...numbers].sort((num1, num2) => num2 - num1));

let backwards = [];
numbers.forEach(element => backwards.unshift(element));

console.log(backwards);

console.log(numbers); // [ 5, 4, 3, 2, 1 ]
*/

/* 3

let numbers = [1, 2, 3, 4, 5, 15, 16, 17, 95, 96, 99];

let number1 = 8;  // false
let number2 = 95; // true

console.log(numbers.includes(number1));
console.log(numbers.includes(number2));
*/

/* 4

let famousWords = "seven years ago...";

console.log("Four score and " + famousWords);

famousWords = "Four score and ".concat(famousWords);

console.log(famousWords);
*/

/* 5

let arr = [1, 2, 3, 4, 5];

arr.splice(2,1);

console.log(arr);
*/

/* 6

let flintstones = ["Fred", "Wilma"];
flintstones.push(["Barney", "Betty"]);
flintstones.push(["Bambam", "Pebbles"]);


let newflint = [];
//manual.
flintstones.forEach(element => {
  if (Array.isArray(element)) {
    newflint.push(...element);
  }
  else {
    newflint.push(element);
  }
});

flintstones = [].concat(...flintstones);

//newflint = flintstones.flat();

console.log(newflint);
*/


/* 7

let flintstones = { Fred: 0, Wilma: 1, Barney: 2, Betty: 3, Bambam: 4, Pebbles: 5 };

let arr = Object.entries(flintstones).filter(element => element[0] === 'Barney').shift();

console.log(arr);
*/

/* 8

let numbers = [1, 2, 3, 4]; // true
let table = { field1: 1, field2: 2, field3: 3, field4: 4 }; // false

Array.isArray(numbers);
Array.isArray(table);
*/

/* 9

let title = "Flintstone Family Members"; // length 25

let tableWidth = 40;

let pad = Math.floor((tableWidth - title.length) / 2); // 7

title = title.padStart(pad + title.length, ' ');


console.log(title);
console.log('*'.repeat(40));
*/

/* 10
*/
let statement1 = "The Flintstones Rock!";
let statement2 = "Easy come, easy go.";

let counter = [...statement1, ...statement2].reduce((acc, cur) => cur === 't' ? acc += 1 : acc, 0);

console.log(counter);
