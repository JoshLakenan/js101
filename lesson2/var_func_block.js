/* 1
    mutates the array colors by adding the string 'yellow' to it and then logs
    the new mutated array red green blue yello
*/

/* 2
    logs the array red green, blue, undefined
*/

/* 3
    log red green blue purple, pink
*/

/* 4
let color1 = 'purple';
let color2 = 'pink';
let colors = ['red', 'green', 'blue'];

function updateColors(colors, color) {
  colors.push(color);
  return colors;
}

let newColors = updateColors(colors, color1); // new colors = now points to the colors array purple
//color has been mutated to - red green blue purple
updateColors(newColors, color2);
// mutate newColors giving it the value of red green blue purple pink
console.log(colors);
//logs red green blue purple purple pink
*/


/* 5
let color = 'purple';
let colors = ['red', 'green', 'blue'];

function addColor(colors, color) {
  colors.push(color);
  return colors;
}

function removeColor(colors) {
  color = colors.pop();
  return colors;
}

let newColors = removeColor(colors); 
// references colors array which now equals red green
addColor(colors, color);
// mutates colors array adding blue
console.log(newColors);
// red green blue
*/


/* 6

function capitalize() {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim() {
  return word += '!!!'; // This reassigns word to hello!!!
}

let word = 'hello'; //hello
let capitalizedWord = capitalize(word); // Hello
let exclaimedWord = exclaim(capitalizedWord); //hello!!!

console.log(word); //logs hello!!!
console.log(capitalizedWord); //logs Hello
console.log(exclaimedWord); //logs hello!!!
*/

/* 7



function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1);
}

function exclaim(word) {
  return word += '!!!';
}

let word = 'hello';
let capitalizedWord = capitalize(word); //Hello
let exclaimedWord = exclaim(capitalizedWord);//Hello!!!

console.log(word); //hello
console.log(capitalizedWord);//Hello
console.log(exclaimedWord); // Hello!!!
*/