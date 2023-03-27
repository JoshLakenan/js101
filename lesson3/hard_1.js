/* 1 no, second will return undefined instead of the intended object since it implicitly puts a semi colon behind the return statement on line 8.

function first() {
  return {
    prop1: "hi there"
  };
}

function second() {
  return
  {
    prop1: "hi there"
  };
}


console.log(first());
console.log(second());
*/

/* 2 logs { first: [1, 2] }
*/

/* 3
A)  shadowing means that the re-assignment has no effect outside the function
  "one is: ["one"]"
  "two is: ["two"]"
  "three is: ["three"]"
B)  shadowing means that the re-assignment has no effect outside the function
  "one is: ["one"]"
  "two is: ["two"]"
  "three is: ["three"]"
C)  despite shadowing, the splice method mutates the calling array which will also be in effect outside the function
  "one is: ["two"]"
  "two is: ["three"]"
  "three is: ["one"]"

*/

/* 4


function isDotSeparatedIpAddress(inputString) {
  let dotSeparatedWords = inputString.split("."); 
  
  if (dotSeparatedWords.length !== 4) return false; // fixed by returning false if array is not 4 elements long
  
  while (dotSeparatedWords.length > 0) {
    let word = dotSeparatedWords.pop();
    if (!isAnIpNumber(word)) {
      return false; // fixed by returning false rather than breaking the while loop.
    }
  }

  return true;
}
*/

function replace(str, value) {
  while (true) {
    break;
  }

  str = value;
}

let greet = 'Hey!'
replace(greet, 'Hello')
console.log(greet);

/*
The function myFunc is delcared using a function declaration on line 2 - 4. when invoked, myfunc invokes the gobal object method, Console.log and passes the global
variable hello as argument, resulting in the variable's value (the string "Hello, world!") being logged to the console. This simple
function shows that functions can call other functions, and that variables from global scope are accessable and can be used from inner function body scope.

*/