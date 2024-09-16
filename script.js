'use strict';

// Pseudocode
// Write a function getComputerChoice that will randomly return one of the following string values: "rock", "paper", or "scissors"
// user reloads and get a random word (rock,paper,scissors)

// another code

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice, magicChoice) {
  if (humanChoice === magicChoice && humanChoice !== computerChoice) {
    console.log(`${humanChoice} beats ${computerChoice}: User wins`);
    humanScore++;
  } else if (computerChoice === magicChoice && computerChoice !== humanChoice) {
    console.log(`${computerChoice} beats ${humanChoice}: Computer wins`);
    computerScore++;
  } else if ((computerChoice === humanChoice) === magicChoice) {
    console.log(`It's a draw game both got the same answer`);
  } else if ((humanChoice !== magicChoice) !== computerChoice) {
    console.log(`Both of you failed`);
  }
}

function playGame() {
  for (let i = 1; i <= 5; i++) {
    console.log(`Round ${i}`);
    console.log('\n');

    let randomChoi = Math.floor(Math.random() * 3 + 1);
    let computerSelect = Math.floor(Math.random() * 3 + 1);

    function getRandomChoice() {
      if (randomChoi === 1) {
        return 'rock';
      } else if (randomChoi === 2) {
        return 'paper';
      } else if (randomChoi === 3) {
        return 'scissors';
      }
    }

    function getComputerChoice() {
      if (1 === computerSelect) {
        return 'rock';
      } else if (2 === computerSelect) {
        return 'paper';
      } else if (3 === computerSelect) {
        return 'scissors';
      }
    }

    function getHumanChoice() {
      let input1 = prompt('Your turn to play').toLowerCase();

      return input1;
    }

    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    const magicSelection = getRandomChoice();
    console.log(
      `User chose ${humanSelection}\nComputer chose ${computerSelection}\nCorrect answer is ${magicSelection}`
    );

    playRound(humanSelection, computerSelection, magicSelection);
    // console.log(humanSelection, computerSelection, magicSelection);

    function verifyWinner(humanScore, computerScore) {
      if (humanScore > computerScore) {
        console.log(`${humanScore}:${computerScore}, User is leading`);
      } else if (computerScore > humanScore) {
        console.log(`${computerScore}:${humanScore}, Computer is leading`);
      } else if (computerScore === humanScore) {
        console.log(`${computerScore}:${humanScore}, It's a tie`);
      }
    }
    verifyWinner(humanScore, computerScore);
    console.log('\n');
  }
}

playGame();
