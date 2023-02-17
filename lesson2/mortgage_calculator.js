/*
  Inputs - Loan Amount, Annual Percentage Rate, Duration

  Calculate - monthly interest rate, loan duration in months

  Output - payment amount Dollar and cents

  Hints - convert APR into Monthly interest rate for use in formula
        - be careful with units of time
        - Think about edge cases
          - No interest loans?
          - duration that isn't an integer?
*/

//import readline-sync library
let rls = require('readline-sync');

//import json messages file
let MESSAGES = require('./mortgage_calculator_messages.json');

//message formatting
function prompt(message) {
  console.log(`\n\n${message}`);
}

//check that numbers are valid
function isInvalidNumber(number) {
  return number < 0 || !isFinite(number);
}

//create function for loan payment calculation
let monthlyPayment = (loanAmount, monthlyInterestRate, loanMonths) => {
  //0 interest loan handling
  if (monthlyInterestRate === 0) {
    return loanAmount / loanMonths;
  }
  return loanAmount * (monthlyInterestRate /
                    (1 - Math.pow((1 + monthlyInterestRate), (-loanMonths))));
};

//Get and validate loan amount from user
let getLoanAmount = () => {
  prompt(MESSAGES.loanAmount);
  let rawLoanAmount = parseFloat(rls.question());

  while (isInvalidNumber(rawLoanAmount)) {
    prompt(MESSAGES.loanAmountError);
    rawLoanAmount = parseFloat(rls.question());
  }
  return rawLoanAmount;
};

//Get valid APR function
//-use parseFloat in case they enter 5% instead of the intended .05
let getApr = () => {
  prompt(MESSAGES.aPr);
  let rawAPR = parseFloat(rls.question());
  //check that a period is the second character of the string, which should be
  //true of all valid interest rates when entered as decimals
  while (String(rawAPR).slice(1, 2) !== '.') {
    prompt(MESSAGES.aPrError);
    rawAPR = parseFloat(rls.question());
  }
  return rawAPR;
};

//Get and validate loan duration in years from user
let getLoanYears = () => {
  prompt(MESSAGES.loanYears);
  let rawLoanYears = parseFloat(rls.question());

  while (isInvalidNumber(rawLoanYears)) {
    prompt(MESSAGES.loanYearsError);
    rawLoanYears = parseFloat(rls.question());
  }
  return rawLoanYears;
};

//boolean value for breaking out of the calculation loop
let continueCalculating = true;

//welcome message
prompt(MESSAGES.welcome);

//while continueCalculating boolean is true, continue calculating in a loop.
while (continueCalculating) {

  //get loanAmount from user using the getLoanAmount method
  let loanAmount = getLoanAmount();

  //get aPr from user using the getApr method
  let aPr = getApr();

  //loanYears from user using the getLoanYears method
  let loanYears = getLoanYears();

  //create variables to store calculated values
  let monthlyInterestRate = aPr / 12;
  let loanMonths = loanYears * 12;

  //calculate monthly payment
  let calculatedPayment = monthlyPayment(loanAmount,
    monthlyInterestRate,
    loanMonths);

  //format and output the calculated monthly payment.
  prompt(MESSAGES.output + calculatedPayment.toFixed(2));

  //update boolean value for use in continuing the loop, or exiting.
  continueCalculating = rls.keyInSelect(['Yes', 'No'], MESSAGES.continue,
    { cancel: false }) === 0;
}
//closing program message
prompt(MESSAGES.goodbye);