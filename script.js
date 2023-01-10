const buttons = document.querySelectorAll('button');
let playerScore = 0;
let computerScore = 0;

buttons.forEach(button => {
  button.addEventListener('click', e => {
    const playerSelection = e.target.id;
    const computerSelection = getComputerSelection();
    const result = getResult(playerSelection, computerSelection);
    displayResult(result, playerSelection, computerSelection);
    updateScore(result);
    checkForWinner();
  });
});

function getComputerSelection() {
  const choices = ['rock', 'paper', 'scissors'];
  const randomIndex = Math.floor(Math.random() * 3);
  return choices[randomIndex];
}

function getResult(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return 'draw';
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'scissors' && computerSelection === 'paper')
  ) {
    return 'win';
  } else {
    return 'lose';
  }
}

function displayResult(result, playerSelection, computerSelection) {
  const resultElement = document.querySelector('#result');
  if (result === 'win') {
    resultElement.innerHTML = `You win! ${playerSelection} beats ${computerSelection}.`;
  } else if (result === 'lose') {
    resultElement.innerHTML = `You lose! ${computerSelection} beats ${playerSelection}.`;
  } else {
    resultElement.innerHTML = `It's a draw! You both chose ${playerSelection}.`;
  }
}

function updateScore(result) {
  const playerScoreElement = document.querySelector('#player-score');
  const computerScoreElement = document.querySelector('#computer-score');
  if (result === 'win') {
    playerScore++;
    playerScoreElement.innerHTML = playerScore;
  } else if (result === 'lose') {
    computerScore++;
    computerScoreElement.innerHTML = computerScore;
  }
}

function checkForWinner() {
  if (playerScore === 5) {
    alert('You win the game!');
  } else if (computerScore === 5) {
    alert('The computer wins the game!');
  }
}