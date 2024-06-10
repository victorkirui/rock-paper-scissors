let humanScore = 0;
let computerScore = 0;

//Get computer input
function getComputerChoice() {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  return randomChoice;
}

//Get user input
function getHumanChoice() {
  let userInput = window.prompt("Enter any numbers between 1, 2 and 3:");

  if (userInput == 1) {
    return 1;
  } else if (userInput == 2) {
    return 2;
  } else if (userInput == 3) {
    return 3;
  } else {
    return "Invalid choice - choose numbers 1, 2 or 3";
  }
}
