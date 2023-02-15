/*
Formal
START

SET tripleTargetIndexChecker to a function expression that receives two string arguments 'target' and 'str'
  SET counter = 0
  WHILE iterator < length of str
    IF character value at iterator index  === target
      counter = counter + 1
      IF counter === 3
        PRINT iterator
  IF counter < 3
    PRINT Null
*/

let tripleTargetIndexChecker = (target, str) => {
  let counter = 0;
  for (let i = 0; i < str.length; i += 1) {
    if (str.charAt(i) === target) {
      counter += 1;
      if (counter === 3) return i;
    }
  }
  if (counter < 3) return null;
};

console.log(tripleTargetIndexChecker('b', 'bbbaxbxcdxex'));      

