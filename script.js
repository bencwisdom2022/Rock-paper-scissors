'use strict';

// Pseudocode
// Write a function getComputerChoice that will randomly return one of the following string values: "rock", "paper", or "scissors"
// user reloads and get a random word (rock,paper,scissors)

let randomChoice = Math.floor(Math.random() * 3 + 1);
let computerSelect = Math.floor(Math.random() * 3 + 1);
let rock = 1;
let paper = 2;
let scissors = 3;

function getComputerChoice() {
  if (rock === randomChoice && rock === computerSelect) {
    console.log('rock, computer guessed right, play again');
  } else if (paper === randomChoice && paper === computerSelect) {
    console.log('Paper, computer guessed right, play again');
  } else if (scissors === randomChoice && scissors === computerSelect) {
    console.log('Scissors, computer guessed rightly, play again');
  } else {
    console.log('You lose');
  }
}

let input1 = parseInt(prompt('Your turn to play'));
console.log(input1);

function getHumanChoice(input1) {
  if (rock === input1 && rock === randomChoice) {
    console.log('rock, User guessed right, play again');
  } else if (paper === input1 && paper === randomChoice) {
    console.log('Paper, user guessed right, play again');
  } else if (scissors === input1 && scissors === randomChoice) {
    console.log('Scissors, user guessed rightly, play again');
  } else {
    console.log('You lose');
  }
}

// getComputerChoice();
getHumanChoice(input1);
getComputerChoice(computerSelect);
console.log(computerSelect);
console.log(randomChoice);

// console.log randomChoice);
// getComputerChoice();
