
let compChoice;
let playerChoice;
let result;


const computerChoice = () => {
  let getComputerChoice = Math.floor(Math.random()*3)
    if (getComputerChoice === 2 ){
      compChoice = "paper";
    }
    else if (getComputerChoice === 1) {
      compChoice = "rock";
    }
    else {
      compChoice = "scissors";
    }
    return compChoice  
}
const playRound = (playerChoice, computerChoice) => {
  let endGame;
  if (computerChoice == "scissors"){
  endGame = "Win"
  }
  else if (computerChoice == "paper"){
  endGame = "Lose"
  }
  else  {
  endGame = "Tie"
  }
  console.log(computerChoice)
  console.log(endGame)
  return endGame
}

const populateBoard = (compChoice) => {
  const container = document.querySelector('#container');

  const content = document.createElement('div');
  content.classList.add('content');
  content.textContent = `Computer choice is ${computerChoice}`;
  container.appendChild(content);

}
  playRound("rock", computerChoice());
  populateBoard(compChoice);
