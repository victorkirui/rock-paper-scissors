let humanScore = 0;
let computerScore = 0;

//Get dom elements
const rockBtn = document.querySelector("#rock");
const paperBtn = document.querySelector("#paper");
const scissorBtn = document.querySelector("#scissors");
const results = document.querySelector(".results");

//Add click event listener to the buttons
rockBtn.addEventListener("click", playRound);
paperBtn.addEventListener("click", playRound);
scissorBtn.addEventListener("click", playRound);

//Get computer input
const getComputerChoice = () => {
  let randomChoice = Math.floor(Math.random() * 3) + 1;
  let computerChoice;
  switch (randomChoice) {
    case 1:
      computerChoice = "Rock";
      break;
    case 2:
      computerChoice = "Paper";
      break;
    case 3:
      computerChoice = "Scissors";
      break;
  }
  return computerChoice;
};

function playRound(e) {
  //User's choice
  let userChoice = e.target.textContent;
  //Computer's choice
  let computerChoice = getComputerChoice();

  //Creating html elements
  let para1 = document.createElement("p");
  let para2 = document.createElement("p");

  //Adding classes to the paragraphs
  para1.className = "para1";
  para2.setAttribute("class", "para2");

  if (userChoice == "Rock" && computerChoice == "Rock") {
    para1.textContent = `Computer's Pick: ${computerChoice}, Your Pick: ${userChoice}`;
    para2.textContent = "This is a tie; go again!";
    appendChild(para1, para2);
  } else if (userChoice == "Rock" && computerChoice == "Paper") {
    para1.textContent = `Computer's Pick: ${computerChoice}, Your Pick: ${userChoice}`;
    computerScore += 1;
    para2.textContent = `Computer Score: ${computerScore}`;
    appendChild(para1, para2);
  } else if (userChoice == "Rock" && computerChoice == "Scissors") {
    para1.textContent = `Computer's Pick: ${computerChoice}, Your Pick: ${userChoice}`;
    humanScore += 1;
    para2.textContent = `Your Score: ${humanScore}`;
    appendChild(para1, para2);
  } else if (userChoice == "Paper" && computerChoice == "Rock") {
    para1.textContent = `Computer's Pick: ${computerChoice}, Your Pick: ${userChoice}`;
    humanScore += 1;
    para2.textContent = `Your Score: ${humanScore}`;
    appendChild(para1, para2);
  } else if (userChoice == "Paper" && computerChoice == "Paper") {
    para1.textContent = `Computer's Pick: ${computerChoice},Your Pick: ${userChoice}`;
    appendChild(para1, para2);
  } else if (userChoice == "Paper" && computerChoice == "Scissors") {
    para1.textContent = `Computer's Pick: ${computerChoice}, Your Pick: ${userChoice}`;
    computerScore += 1;
    para2.textContent = `Computer Score: ${computerScore}`;
    appendChild(para1, para2);
  } else if (userChoice == "Scissors" && computerChoice == "Rock") {
    para1.textContent = `Computer's Pick: ${computerChoice}, Your Pick: ${userChoice}`;
    computerScore += 1;
    para2.textContent = `Computer Score: ${computerScore}`;
    appendChild(para1, para2);
  } else if (userChoice == "Scissors" && computerChoice == "Paper") {
    para1.textContent = `Computer's Pick: ${computerChoice}, Your Pick: ${userChoice}`;
    humanScore += 1;
    para2.textContent = `Your Score: ${humanScore}`;
    appendChild(para1, para2);
  } else if (userChoice == "Scissors" && computerChoice == "Scissors") {
    para1.textContent = `Computer's Pick: ${computerChoice}, Your Pick: ${userChoice}`;
    appendChild(para1, para2);
  } else {
    console.log("Invalid input");
  }

  removeClickEventListeners();
}

//function that appends user and computer inputs to the DOM
function appendChild(para1, para2) {
  results.appendChild(para1);
  results.appendChild(para2);
}

//Function to display the winner
function displayWinner() {
  let para3 = document.createElement("p");
  para3.textContent =
    humanScore === 5
      ? `You have: ${humanScore} points, The Computer has: ${computerScore} points - Therefor YOU WIN!!!`
      : `The computer has: ${computerScore} points, You have: ${humanScore} points - Therefore the COMPUTER WINS!!! `;
  para3.setAttribute("class", "para3");
  results.appendChild(para3);
}

//Remove click event listener to the buttons once a player reaches 5 points
function removeClickEventListeners() {
  if (humanScore === 5 || computerScore === 5) {
    displayWinner();
    const buttons = document.querySelectorAll(".buttons");
    Array.from(buttons).forEach((button) => {
      button.removeEventListener("click", playRound);
    });
  }
}
