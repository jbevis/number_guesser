//elements by id
var userGuess = document.querySelector('#num-guess');
var displayNum = document.querySelector('#last-guess')
var feedBack = document.querySelector('#results');
document.querySelector('#prompt-text')

//button variables
var guessBtn = document.querySelector('#guess');
var clearBtn = document.querySelector('#clear');
var resetBtn = document.querySelector('#reset');

//Other globals
var maxNum = 100;
var minNum = 1;
var randomNumber;

//generates random number on window load
function generateNum(min, max) {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
}
window.onload = function () {
  generateNum (minNum, maxNum);
}


//Checks value of input field. If value entered, enables buttons.
function checkInput () {
  var inputValue = document.getElementById('num-guess').value
  if (inputValue === ""){
    clearBtn.disabled = true;
    guessBtn.disabled = true;
    resetBtn.disabled = true;
  };
};
userGuess.addEventListener('keyup', function(){
  clearBtn.disabled = false;
  guessBtn.disabled = false;
  resetBtn.disabled = false;
})


//guessBtn event listener. runs game.
guessBtn.addEventListener('click', function(){
  checkInput();
  var submittedNum = userGuess.value;
  parseInt(submittedNum, 10);
  displayNum.innerText = submittedNum;
  console.log('You have guessed ' + submittedNum)
  var feedBack = document.querySelector('#results');
  if (submittedNum == randomNumber) {
    feedBack.innerText = 'BOOM!';
  } else if (submittedNum < randomNumber && submittedNum >= minNum) {
    feedBack.innerText =  "That's too low, try again";
  } else if (submittedNum > randomNumber  && submittedNum <= maxNum) {
    feedBack.innerText = "That's too high, try again"
  } else if (submittedNum < minNum || submittedNum > maxNum) {
    alert("Your guess is outside the range!")
    feedBack.innerText =  "Your guess is outside the range, reset and try again"
    }
  });


//clears input field, but won't reset game.
clearBtn.addEventListener('click', function(){
  userGuess.value = "";
  checkInput();
  console.log("clear field")
})


//resets the game and generates new randomNum
resetBtn.addEventListener('click', function(){
  window.onload();
  userGuess.value = "";
  displayNum.innerText ="?";
  feedBack.innerText = "(...Results...)";
  checkInput();
  console.log('Reset Game');
})
