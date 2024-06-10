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
      result = "Paper";
      break;
    case 3:
      result = "Scissors";
      break;
  }
  return result;
}

//Get user input
function getHumanChoice() {
  let userInput = window.prompt("Enter 'Rock', 'Paper' or 'Scissors':");

  if (userInput.toLowerCase() == "rock") {
    return "Rock";
  } else if (userInput.toLowerCase() == "paper") {
    return "Paper";
  } else if (userInput.toLowerCase() == "scissors") {
    return "Scissors";
  } else {
    return "Invalid choice";
  }
}

//Logic to play a single round
function playRound(humanChoice, computerChoice) {
  console.log(humanScore);
  if (humanChoice == "Rock" && computerChoice == "Rock") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("This is a tie; go again!");
  } else if (humanChoice == "Rock" && computerChoice == "Paper") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("You Lose! Paper beats Rock");
    computerScore += 1;
  } else if (humanChoice == "Rock" && computerChoice == "Scissors") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("You Win! Rock beats Scissors");
    humanScore += 1;
  } else if (humanChoice == "Paper" && computerChoice == "Rock") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("You Win! Paper beats Rock");
    humanScore += 1;
  } else if (humanChoice == "Paper" && computerChoice == "Paper") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("This is a tie; go again!");
  } else if (humanChoice == "Paper" && computerChoice == "Scissors") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("You Lose! Scissors beats Paper");
    computerScore += 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Rock") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("You Lose! Rock beats Paper");
    computerScore += 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Paper") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("You Win! Scissors beats Paper");
    humanScore += 1;
  } else if (humanChoice == "Scissors" && computerChoice == "Scissors") {
    console.log(`COMPUTER CHOICE: ${computerChoice}`);
    console.log(`YOUR CHOICE: ${humanChoice}`);
    console.log("This is a tie; go again!");
  } else {
    console.log("Invalid input");
  }
}

playRound(getHumanChoice(), getComputerChoice());

// function test() {
//   console.log(`HUMAN SCORE: ${humanScore}`);
//   console.log(`COMPUTER SCORE: ${computerScore}`);
// }
