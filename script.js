'use strict';

// Pseudocode
// Write a function getComputerChoice that will randomly return one of the following string values: "rock", "paper", or "scissors"
// user reloads and get a random word (rock,paper,scissors)

let randomChoice = Math.floor(Math.random() * 3 + 1);
let computerSelect = Math.floor(Math.random() * 3 + 1);
let user = 0;
let computer = 1;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  if (1 === computerSelect) {
    return 'rock';
  } else if (2 === computerSelect) {
    return 'Paper';
  } else if (3 === computerSelect) {
    return 'Scissors';
  }
}

let input1 = prompt('Your turn to play').toLowerCase();

function humanChoiceLogic(input1) {
  if (input1 === 'rock') {
    return 1;
  } else if (input1 === 'paper') {
    return 2;
  } else if (input1 === 'scissors') {
    return 3;
  }
}

let humanLogic = humanChoiceLogic(input1);

function getHumanChoice(input1) {
  if ('rock' === input1) {
    return 'rock';
  } else if ('paper' === input1) {
    return 'paper';
  } else if ('scissors' === input1) {
    return 'scissors';
  }
}

function playRound(humanChoice, computerChoice) {
  if (computerChoice === randomChoice && humanChoice === randomChoice) {
    console.log(
      `Computer guessed ${computerChoice} and user guessed ${humanChoice}, no winner`
    );
  } else if (computerChoice === randomChoice) {
    console.log(
      `Computer got ${computerChoice} and user got ${humanChoice}, computer won`
    );
  } else if (humanChoice === randomChoice) {
    console.log(
      `user got ${humanChoice} and computer got ${computerChoice}: user won`
    );
  } else if (humanChoice !== randomChoice && computerChoice !== randomChoice) {
    console.log('You both are itiboribo');
  }
}

let humanSelection = getHumanChoice(input1);
let computerSelection = getComputerChoice();
playRound(humanLogic, computerSelect);
// getComputerChoice();
// getComputerChoice(computerSelect);
getHumanChoice(input1);
// console.log(computerSelect);
// console.log(input1);
console.log(randomChoice);
console.log(computerSelect);
