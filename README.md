# number_guesser
Turing FEE Mod1 Project: Number Guess (HTML, CSS and JS files)

## Synopsis
In the this project I was tasked with creating a number guessing game. The game required a random number to be generated on the screen load, then asking the using to enter their guess for that number. After submitting their guess, the game returned the results. Reset button allows user to start game over again.

User is prompted to input a number between 1 and 100 in the field. Options at this point are to guess (submit) their choice, clear the input or reset the game, creating a new random number. If correct number is guessed, user wins, otherwise he will be informed that guess is either too high or too low.

##Code
I have submitted the index.html, styles.css, and main.js files. 

js snippet:

function generateNum(min, max) {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
}
window.onload = function () {
  generateNum (minNum, maxNum);
}

## Motivation
This project is part of the Turing School Front-End Engineering module 1.

##Contributors
jbevis is the only contributor at the moment.
