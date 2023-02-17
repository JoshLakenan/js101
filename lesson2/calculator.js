// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform.
// Perform the operation on the two numbers.
// Print the result to the terminal.

//import readline-sync library
let rls = require('readline-sync');

//load file into our program as an object
let MESSAGES = require('./calculator_messages.json');

//set initial language 
let language = 'en';

//create functions for each arithmatic operation
let add = (num1, num2) => num1 + num2;
let subtract = (num1, num2) => num1 - num2;
let multiply = (num1, num2) => num1 * num2;
let divide = (num1, num2) => num1 / num2;
let modulo = (num1, num2) => num1 % num2;
let power = (num1, num2) => num1 ** num2;


function messages(message, lang = 'en') {
  return MESSAGES[lang][message];
}

//create function for formatting prompts - Mine returns rather than using a
//console log since I am using the
//.question() readline-sync method to log the prompts
function prompt(key) {
  let message = messages(key, language);
  return(`=> ${message}`);
}


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

//set variable to true to before entering into the program loop.
let anotherCalculation = true;

//welcome message
console.log(prompt('welcome'));

while(anotherCalculation) {
  
  //promt the user to enter the first number and validate
  let fNum = rls.question(prompt('fNum'));
  while (invalidNumber(fNum)) {
    console.log(prompt('invalidError'));
    fNum = rls.question();
  }
  
  //promt the user to enter the second number and validate
  let sNum = rls.question(prompt('sNum'));
  while (invalidNumber(sNum)) {
    console.log(prompt('invalidError'));
    sNum = rls.question();
  }
  
  //get the user's desired operation and store it in a way that it can be used to
  //access the appropriate callback function stored in the operations array
  let selectedOperation = rls.keyInSelect(MESSAGES[language]['operators'], prompt('select'), { cancel: false }); //this way is cooler and eliminates the need for user validation on this step
  
  //calculate the result of the operation using the callback stored in the
  //operations array
  let answer = operations[selectedOperation][1](Number(fNum), Number(sNum)).toFixed(2);
  
  //log the answer
  console.log(prompt('answer') + answer);
  
  anotherCalculation = rls.keyInSelect(MESSAGES[language]['yesNo'], prompt('again'), {cancel: false}) === 0 ? true : false;
  
  //log a goodbye message if they are done.
  if (!anotherCalculation) console.log(prompt('goodbye'));
}

// "yesNo" : ["Yes", "No"]