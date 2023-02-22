const rls = require('readline-sync');
const MSG = require('./messages.json');
const VALID_CHOICES = ['Rock', 'Paper', 'Scissors', 'Spock', 'Lizard'];
const LOSS_POSITIONS = [1, 3];
const WINNING_SCORE = 3;


const prompt = (msg) => console.log(`\n=> ${msg}`);

function displayGameIntro () {
  console.clear();
  prompt(MSG.intro);
  prompt(MSG.rules);
  prompt(MSG.begin);
  rls.question(prompt(MSG.continue));
  console.clear();
}

function displayMatchScore (matchStatus, additionalString = '') {
  console.log("User - " + matchStatus.uWinCount + " | " +
  matchStatus.cWinCount  + " - Supercomputer" + additionalString);
}

function displayMatchStatus (matchStatus) {
  prompt(`Round: ${matchStatus.round} - Current Score:\n`);
  displayMatchScore(matchStatus);
}

function getUserChoice () {
  return VALID_CHOICES[rls.keyInSelect(VALID_CHOICES,
    prompt(MSG.choice),
    { cancel: 'Give Up?' })];
}

function getComputerChoice () {
  let choiceIndex =  Math.floor(Math.random() * VALID_CHOICES.length);
  return VALID_CHOICES[choiceIndex];
}

/*
Converts and returns negative number arguments to the correct number to access
array elements from the back of an array like the .slice() method does, aka
circular-ly.
*/
function getCircleIndex (index) {
  return index < 0 ? VALID_CHOICES.length + index : index;
}
/*
Determines the VALID_CHOICES index of the user's choice and checks if the
computer's choice was the array element before it, or the array element 3 before
it in the array using the circularIndex method.

Each element of the VALID_CHOICES array beats the element right before it, and
the element 3 before it.
S
This, in theory makes the game scalable so that you could enter tons of valid
choices and and math comparison rules while not having to spell out each winning
case.
*/
function getRoundOutcome (uChoice, cChoice) {
  function userWins () {
    let uIndex = VALID_CHOICES.indexOf(uChoice);
    let cIndex = VALID_CHOICES.indexOf(cChoice);
    
    /*Return true if the computer's choice is in a any of the losing positions
    relative to the user's choice.*/
    return LOSS_POSITIONS.some(pos => cIndex === getCircleIndex(uIndex - pos));
  }
  
  if (uChoice === cChoice) {
    return MSG.tie;
  } else if (userWins()) {
    return MSG.userWins;
  } else {
    return MSG.computerWins;
  }
}

function updateMatchStatus (matchStatus, roundOutcome) {
  matchStatus.round += 1;
  if (roundOutcome === MSG.userWins) {
    matchStatus.uWinCount += 1;
  } else if (roundOutcome === MSG.computerWins) {
    matchStatus.cWinCount += 1;
  }
}

function displayRoundResult (userChoice, computerChoice, roundOutcome) {
  prompt(`You chose: ${userChoice} - Supercomputor chose: ${computerChoice}`);
  prompt(`${roundOutcome}`);
  rls.question(prompt(MSG.continue));
  console.clear();
}

function displayMatchResult (matchStatus) {
  if (matchStatus.gameOn()) {
    prompt(MSG.quit);
  } else {
    prompt(matchStatus.getWinner());
    prompt(`Final Score:\n`);
    displayMatchScore(matchStatus, '\n');
  }
}

//game flow control and method calling
function playGame () {
  displayGameIntro();
  
  //Create object for tracking the current status of the match
    let matchStatus = {
      uWinCount : 0,
      cWinCount : 0,
      round : 1,
      gameOn () {
        return (this.uWinCount < WINNING_SCORE && this.cWinCount < WINNING_SCORE);
      },
      getWinner () {
        return (this.uWinCount > this.cWinCount) ? MSG.matchWin : MSG.matchLoss;
      }
    };

  while (matchStatus.gameOn()) {
    
    displayMatchStatus(matchStatus);

    //Get user choice and computer choice
    let userChoice = getUserChoice();
    if (userChoice === undefined) break; //End the match if the user gives up
    let computerChoice = getComputerChoice();

    //determine round outcome and update game status
    let roundOutcome = getRoundOutcome(userChoice, computerChoice);
    updateMatchStatus(matchStatus, roundOutcome);

    displayRoundResult(userChoice, computerChoice, roundOutcome);
  }
  displayMatchResult(matchStatus);
}

playGame();