function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "It's a tie!";
    } else if (playerSelection === "rock") {
        if (computerSelection === "scissors") {
            return "You win! Rock beats Scissors";
        } else {
            return "You lose! Paper beats Rock";
        }
    } else if (playerSelection === "paper") {
        if (computerSelection === "rock") {
            return "You win! Paper beats Rock";
        } else {
            return "You lose! Scissors beats Paper";
        }
    } else if (playerSelection === "scissors") {
        if (computerSelection === "paper") {
            return "You win! Scissors beats Paper";
        } else {
            return "You lose! Rock beats Scissors";
        }
    } else {
        return "Invalid selection. Please choose Rock, Paper, or Scissors";
    }
}

function playGame() {
    let playerWins = 0;
    let computerWins = 0;

    for (let i = 0; i < 5; i++) {
        const choices = ["rock", "paper", "scissors"];
        const computerSelection = choices[Math.floor(Math.random() * choices.length)];

        let playerSelection = prompt("Rock, Paper, or Scissors?");

        let result = playRound(playerSelection, computerSelection);
        alert(result);

        if (result.startsWith("You win")) {
            playerWins++;
        } else if (result.startsWith("You lose")) {
            computerWins++;
        }
    }

    alert("The final score is: You ${playerWins} - ${computerWins} Computer");
}

playGame();