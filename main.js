
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


//user enters number and submits. Random # is generated, user number is displayed below.
// within each statement pass queryselector to change #results innertext to appropriate response.
// if inside of an if....test if number is in range...if it is then run results conditional else alert number is outside the range, try again...

guessBtn.addEventListener('click', function(){
  var submittedNum = userGuess.value;
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
})


// clear button clears user input field
clearBtn.addEventListener('click', function(){
  userGuess.value = null;
  console.log("clear field")
})


//reset
// function to clear out user's submitted number
// generate new random number once clicked.
resetBtn.addEventListener('click', function(){
  window.onload();
  userGuess.value = null;
  displayNum.innerText ="Enter a number between 1 and 100";
  feedBack.innerText = "Results";
  console.log('Reset Game');
})


//clearBtn and resetBtn should be inactive IF nothing entered in the input field.
