let humanScore = 0;
let computerScore = 0;

//Get computer input
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  let result;
  switch (randomChoice) {
    case 1:
      result = "Rock";
      break;
    case 2:
      result = "paper";
      break;
    case 3:
      result = "Scissors";
      break;
  }
  return result;
}

console.log(getComputerChoice());

//Get user input
function getHumanChoice() {
  let userInput = window.prompt("Enter 'Rock', 'Paper' or 'Scissors':");
  //   let result;
  if (userInput.toLowerCase() == "rock") {
    // result = "Rock";
    return "Rock";
  } else if (userInput.toLowerCase() == "paper") {
    // result = "Paper";
    return "Paper";
  } else if (userInput.toLowerCase() == "scissors") {
    // result = "Scissors";
    return "Scissors";
  } else {
    return "Invalid choice - choose numbers 1, 2 or 3";
  }
}

console.log(getHumanChoice());

//Logic to play a single round
function playRound(humanChoice, computerChoice) {}
