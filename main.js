// MIN/MAX RANGE 

var updateButton = document.querySelector('.update-button');
var minRangeInput = document.getElementById('min-range-input');
var maxRangeInput = document.getElementById('max-range-input');
var minRangeField = document.querySelector('.min-current-range');
var maxRangeField = document.querySelector('.max-current-range');

updateButton.addEventListener('click', function () {
  event.preventDefault();
  minRangeField.innerText = minRangeInput.value;
  maxRangeField.innerText = maxRangeInput.value;
});

// CHALLENGER INPUTS/OUTPUTS

var submitButton = document.querySelector('.submit-button');
var challenger1NameInput = document.getElementById('challenger1-name-input');
var challenger2NameInput = document.getElementById('challenger2-name-input');
var challenger1NameOutput = document.getElementById('challenger1-name-output');
var challenger2NameOutput = document.getElementById('challenger2-name-output');

submitButton.addEventListener('click', function () {
  event.preventDefault();
  challenger1NameOutput.innerText = challenger1NameInput.value;
  challenger2NameOutput.innerText = challenger2NameInput.value;
});

var challenger1GuessInput = document.getElementById('challenger1-guess-input');
var challenger2GuessInput = document.getElementById('challenger2-guess-input');
var challenger1GuessOutput = document.getElementById('challenger1-guess-output');
var challenger2GuessOutput = document.getElementById('challenger2-guess-output');

submitButton.addEventListener('click', function () {
  event.preventDefault();
  challenger1GuessOutput.innerText = challenger1GuessInput.value;
  challenger2GuessOutput.innerText = challenger2GuessInput.value;
});

// CLEAR BUTTON

function ClearFields() {
     document.getElementById("challenger1-name-input").value = "";
     document.getElementById("challenger2-name-input").value = "";
     document.getElementById("challenger1-guess-input").value = "";
     document.getElementById("challenger2-guess-input").value = "";
};

// GENERATE NUMBER FUNCTIONS

window.addEventListener('load', generateNumberOnLoad);

function generateNumberOnLoad() {
  var firstRandom =  Math.floor(Math.random() * (100 - 1));
  console.log(firstRandom);
  return firstRandom;
};

updateButton.addEventListener('click', generateNumberOnClick);

function generateNumberOnClick() {
  var secondRandom =  Math.floor(Math.random() * (maxRangeInput.value - minRangeInput.value));
  console.log(secondRandom);
  return secondRandom;
};


