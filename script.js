'use strict';

// Pseudocode
// Write a function getComputerChoice that will randomly return one of the following string values: "rock", "paper", or "scissors"
// user reloads and get a random word (rock,paper,scissors)

let randomChoice = Math.floor(Math.random() * 3 + 1);
let computerSelect = Math.floor(Math.random() * 3 + 1);
let rock = 1;
let paper = 2;
let scissors = 3;

let user = 0;
let computer = 1;
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  if (rock === randomChoice && rock === computerSelect) {
    console.log('rock');
  } else if (paper === randomChoice && paper === computerSelect) {
    console.log('Paper');
  } else if (scissors === randomChoice && scissors === computerSelect) {
    console.log('Scissors');
  }
}

let input1 = parseInt(prompt('Your turn to play'));

function getHumanChoice(input1) {
  if (rock === input1 && rock === randomChoice) {
    console.log('rock');
  } else if (paper === input1 && paper === randomChoice) {
    console.log('Paper');
  } else if (scissors === input1 && scissors === randomChoice) {
    console.log('Scissors');
  }
}

function playRound(humanChoice, computerChoice) {}

// getComputerChoice();
getComputerChoice(computerSelect);
getHumanChoice(input1);
console.log(computerSelect);
console.log(input1);
console.log(randomChoice);
