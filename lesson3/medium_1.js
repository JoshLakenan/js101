/* 1

let flint = 'The Flintstones Rock!';

for (let i = 0; i < 10; i += 1) {
  console.log(' '.repeat(i) + flint);
}
*/

/* 2

let munstersDescription = "The Munsters are creepy and spooky.";

let method1 = munstersDescription.split('').map(
  char => char === char.toLowerCase() ? 
  char.toUpperCase() : char.toLowerCase()).join('');

console.log(method1);
*/

/* 3

function factors(number) {
  let divisor = number;
  let factors = [];
  while (divisor > 0) {
    if (number % divisor === 0) { // checks that the number is divisible by the divisor with no remainder.
      factors.push(number / divisor);
    }
    divisor -= 1;
  }
  return factors;
}

console.log(factors(10));
*/

/* 4 - concat is slower than push since concat is creating a new array each time rather than mutating the original array.
*/

/* 5 - .8999... false. floating point numbers don't add up as cleanly as you expect them to.
*/

/* 6 - false - use Number.isNaN() to test if not a number.
*/

/* 7
let answer = 42; //answer = 42

function messWithIt(someNumber) {
  return (someNumber += 8); // does not mutate answer 
}

let newAnswer = messWithIt(answer); //newAnswer = 50

console.log(answer - 8); // logs 34
*/

/* 8 - Yes! using the values creates an array from the objects, then allows them to be mutated by accessing each element of the values array.
let munsters = {
  Herman: { age: 32, gender: "male" },
  Lily: { age: 30, gender: "female" },
  Grandpa: { age: 402, gender: "male" },
  Eddie: { age: 10, gender: "male" },
  Marilyn: { age: 23, gender: "female" }
};

function messWithDemographics(demoObject) {
  Object.values(demoObject).forEach(familyMember => {
    familyMember["age"] += 42;
    familyMember["gender"] = "other";
  });
}

messWithDemographics(munsters);

console.log(munsters);
*/

/* 9 - paper

function rps(fist1, fist2) {
  if (fist1 === "rock") {
    return fist2 === "paper" ? "paper" : "rock";
  } else if (fist1 === "paper") {
    return fist2 === "scissors" ? "scissors" : "paper";
  } else {
    return fist2 === "rock" ? "rock" : "scissors";
  }
}
//          paper
console.log(rps(rps(rps("rock", "paper"), rps("rock", "scissors")), "rock"));
*/

/* 10 returns "no"
*/

function foo(param = "no") { //returns "yes" regardless of parameter passed in
  return "yes";
}

function bar(param = "no") { //returns "yes" if called without passing any arguments, "no" if any arguments were passed.
  return param === "no" ? "yes" : "no";
}

console.log(bar(foo()));
