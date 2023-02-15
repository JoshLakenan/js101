// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

//create functions for each arithmatic operation
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let modulo = (num1, num2) => num1 % num2;
let power = (num1, num2) => num1 ** num2;

//create function for formatting prompts - Mine returns rather than using a
//console log since I am using the
//.question() readline-sync method to log the prompts
let prompt = message => `=> ${message}`;

//create function for returning the method names of the operations array
let opNames = arr => arr.map(element => element[1].name.toUpperCase());

//array of operations methods and strings with their arithmatic operators for
//use in formatting responses
const operations = [
  ['+', add],
  ['-', subtract],
  ['*', multiply],
  ['/', divide],
  ['%', modulo],
  ['**', power]
];

//create function for validating user number input
let invalidNumber = num => num.trimStart() === '' || Number.isNaN(Number(num));

console.log('Welcome to Calculator!');

//import readline-sync library
let rls = require('readline-sync');

//promt the user to enter the first number. Validate and make sure we get a vaid
//number
let fNum = rls.question(prompt("What's the first number? \n"));
while (invalidNumber(fNum)) {
  console.log(prompt(`Hmm... that doesn't look like a valid number.`));
  fNum = rls.question();
}

//promt the user to enter the second number. Validate and make sure we get a
//vaid number
let sNum = rls.question(prompt("What's the second number? \n"));
while (invalidNumber(sNum)) {
  console.log(prompt(`Hmm... that doesn't look like a valid number.`));
  sNum = rls.question();
}

//get the user's desired operation and store it in a way that it can be used to
//access the appropriate callback function stored in the operations array
//let selectedOperation = Number(rls.question(prompt('What operation would you like to perform? 1) Add 2) Subtract 3) Multiply 4) Divide: ')) - 1);
let selectedOperation = rls.keyInSelect(opNames(operations), prompt('Select an operation:'), { cancel: false }); //this way is cooler and eliminates the need for user validation on this step

//check user input to make sure that it is valid
/*
while (![0,1,2,3].includes(selectedOperation)) {
  console.log(prompt('Must choose 1, 2, 3, or 4'));
  selectedOperation = Number(rls.question()) - 1;
}
*/

//calculate the result of the operation using the callback stored in the
//operations array
let answer = operations[selectedOperation][1](fNum, sNum).toFixed(2);

//log the answer
console.log(prompt(`The result is: ${answer}`));


//Object.keys(opObject); mess with this later perhaps?
/*
const opObject = {
  'Add': ['+', add],
  'Subtract': ['-', subtract],
  'Multiply': ['*', multiply],
  'Divide': ['/', divide],
  'Remainder': ['%', modulo],
  'Exponent': ['**', power],
};
*/