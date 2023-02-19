/* 1
 logs 10 to the console. the statement num = 10 inside the function body reassigns 
 the global variable num to 10 before when the function is invoked on line 7. 
 The console.log num on line 8 logs 10 to the console.
*/ 

/*2
  logs 5 to the console, reassigns global num to 10, then logs new num 10 to the console.
*/

/*3 
  logs 5
*/

/*4
  Logs 5 to the console twice. The new num declared in the function can not be accessed
  wrong. Actually a reference error! Inside the block want's to access the new shadow num 
  but can not since it has not been initialized yet.
*/

/*5
  will either log 5 or an error! No argument is passed and no value is returned in the myfunc function

*/

/*6
  logs 3 to the console
*/

/*7
  Infinite loop. New num declared in the loop just increments forever. Looping condition references global num
  
*/