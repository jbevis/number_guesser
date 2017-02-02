
var userGuess = document.querySelector('#num-guess');
var guessBtn = document.querySelector('#guess');
var clearBtn = document.querySelector('#clear');
var resetBtn = document.querySelector('#reset');
var displayNum = document.querySelector('#last-guess')
var feedBack = document.querySelector('#results');
var maxNum = 100;
var minNum = 1;
var randomNumber;

//generate random number
function generateNum(min, max) {
  randomNumber = Math.floor(Math.random() * 100 + 1);
  console.log(randomNumber);
}

window.onload = function () {
  generateNum (minNum, maxNum);
}



// guess button and clear button need to be disabled.
//Set default in HTML to disabled.
//function to check if input has a value, and reactivates buttons
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

//user enters number and submits. Random # is generated, user number is displayed below.
// within each statement pass queryselector to change #results innertext to appropriate response.
// if inside of an if....test if number is in range...if it is then run results conditional else alert number is outside the range, try again...
//if time...new conditional if submittedNum == NaN...error, calls window reload.

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








// clear button clears user input field
clearBtn.addEventListener('click', function(){
  userGuess.value = "";
  checkInput();
  console.log("clear field")
})


//reset
// function to clear out user's submitted number
// generate new random number once clicked.
resetBtn.addEventListener('click', function(){
  window.onload();
  userGuess.value = "";
  displayNum.innerText ="?";
  feedBack.innerText = "Results";
  checkInput();
  console.log('Reset Game');
})
