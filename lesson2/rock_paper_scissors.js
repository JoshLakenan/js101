const rls = require('readline-sync');
const VALID_CHOICES = ['rock', 'paper', 'scissors'];

const prompt = (msg) => console.log(`\n\n=> ${msg}`);

const isValidAnswer = (answer) => VALID_CHOICES.includes(answer);

function getComputerChoice () {
  let answerIndex =  Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[answerIndex];
}

function determineWinner (uChoice, cChoice) {
  let user = VALID_CHOICES.indexOf(uChoice);
  let comp = VALID_CHOICES.indexOf(cChoice);
  switch (true) {
    case user === comp - 1 : return "Computer Wins! Better luck next time.";
    case user === 2 && comp === 0 : return "Computer Wins! Better luck next time.";
    case user === comp : return "Looks like it's a tie.";
    default : return "User Wins!";
  }
}

while (true) {
  //get and validate user choice
  let userChoice = '';
  while (true) {
    prompt(`Choose one: ${VALID_CHOICES.join(', ')}`);
    userChoice = rls.question().toLowerCase();
    if (isValidAnswer(userChoice)) break;
    prompt('Error! enter valid choice!');
  }
  //get computer choice
  let computerChoice = getComputerChoice();
  //get outcome
  let outcome = determineWinner(userChoice, computerChoice);
  //output
  prompt(`Nice! You chose: ${userChoice}.`);
  prompt(`The Supercomputor chose: ${computerChoice}.`);
  prompt(`So, drumroll please... ${outcome}`);
  //break loop or play again?
  prompt('Do you want to play again (y/n)?');
  let answer = rls.question().toLowerCase();
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = rls.question().toLowerCase();
  }
  if (answer[0] !== 'y') break;
}
prompt('Thanks for playing!\n\n');