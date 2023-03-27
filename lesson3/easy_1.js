/* 1.  No error. Bonus - returns undefined despite the slots being empty
*/

/* 2.  
let str1 = "Come over here!"; // true
let str2 = "What's up, Doc?"; // false

console.log(str1.charAt(str1.length - 1) === "!");

console.log(str2.charAt(str2.length - 1) === "!");

//this function doe the above for you! And can specify end index to search before as an optional second parameter
console.log(str1.endsWith('!'));
console.log(str2.endsWith('!'));
*/

/* 3.  


let ages = { Herman: 32, Lily: 30, Grandpa: 402, Eddie: 10 };

console.log(ages.hasOwnProperty('Spot')); //method 1

console.log(Object.keys(ages).includes('Herman')); //method 2
*/

/* 4.  
let munstersDescription = "the Munsters are CREEPY and Spooky.";
// => The munsters are creepy and spooky.

console.log(munstersDescription.charAt(0).toUpperCase() + 
  munstersDescription.slice(1).toLowerCase());
*/

/* 5.   True and then False
*/

/* 6.  

let ages = { Herman: 32, Lily: 30, Grandpa: 5843, Eddie: 10 };

let additionalAges = { Marilyn: 22, Spot: 237 };

ages = Object.assign(ages, additionalAges);

console.log(ages);
*/

/* 7.  
let str1 = "Few things in life are as important as house training your pet dinosaur.";
let str2 = "Fred and Wilma have a pet dinosaur named Dino.";

console.log(str1.search('Dino') > 0);
console.log(str2.search('Dino') > 0);

str2.match('Dino') !== null;
str2.indexOf('Dino') > -1;
str2.includes('Dino');  //This one is best.
*/

/* 8.  

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino");

console.log(flintstones);
*/

/* 9.  

let flintstones = ["Fred", "Barney", "Wilma", "Betty", "Bambam", "Pebbles"];
flintstones.push("Dino", "Hoppy");

console.log(flintstones);
*/

/* 10.  
*/
let advice = "Few things in life are as important as house training your pet dinosaur.";

console.log(advice.substring(0,(advice.indexOf('house'))));

// Expected return value:
// => 'Few things in life are as important as '
