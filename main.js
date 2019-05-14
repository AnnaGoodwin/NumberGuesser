// GLOBAL VARIABLES

var random =  Math.ceil(Math.random() * (100 - 1));
console.log(random);
var updateButton = document.querySelector('.update-button');
var minRangeInput = document.getElementById('min-range-input');
var maxRangeInput = document.getElementById('max-range-input');
var minRangeField = document.querySelector('.min-current-range');
var maxRangeField = document.querySelector('.max-current-range');
var form = document.querySelector('.set-range-feature');
var submitButton = document.querySelector('.submit-button');
var challenger1NameInput = document.getElementById('challenger1-name-input');
var challenger2NameInput = document.getElementById('challenger2-name-input');
var challenger1NameOutput = document.getElementById('challenger1-name-output');
var challenger2NameOutput = document.getElementById('challenger2-name-output');
var challenger1GuessInput = document.getElementById('challenger1-guess-input');
var challenger2GuessInput = document.getElementById('challenger2-guess-input');
var challenger1GuessOutput = document.getElementById('challenger1-guess-output');
var challenger2GuessOutput = document.getElementById('challenger2-guess-output');
var challengerGuessField = document.querySelector('.challenger-guess-feature');
var challenger1Feedback = document.getElementById('guess-response1');
var challenger2Feedback = document.getElementById('guess-response2');
var cardTemplate = document.querySelector('.result-card-template');
var cardArea = document.querySelector('.card-container');
var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');

// EVENT LISTENERS

updateButton.addEventListener('click', inputRangeValues)
updateButton.addEventListener('click', inputRangeError)
updateButton.addEventListener('click', generateNumberOnClick);
submitButton.addEventListener('click', returnSubmitError);
submitButton.addEventListener('click', addFeedback1AndWinner);
submitButton.addEventListener('click', addFeedback2AndWinner);
submitButton.addEventListener('click', populateNamesOnCard)
clearButton.addEventListener('click', disableButtons);
resetButton.addEventListener('click', disableButtons);
clearButton.addEventListener('click', clearFields);
resetButton.addEventListener('click', generateNumberOnClick);
resetButton.addEventListener('click', clearFields);
challenger1NameInput.addEventListener('keyup', enableButtons);
challenger2NameInput.addEventListener('keyup', enableButtons);
challenger1GuessInput.addEventListener('keyup', enableButtons);
challenger2GuessInput.addEventListener('keyup', enableButtons);

// NAMED FUNCTION

function inputRangeValues() {
  event.preventDefault();
  if (minRangeInput.value > maxRangeInput.value) {
    var errorMessage = 
    `<div class="error-message">
      <img src="images/error-icon (1).svg" width=15 height=15 alt='error message icon' />
      <p class="error-text">Your min range is greater than your max. Please adjust.</p>
    </div>`
    form.classList.add('error-message-class');
    form.innerHTML += errorMessage;
  } else {
  minRangeField.innerText = minRangeInput.value;
  maxRangeField.innerText = maxRangeInput.value;
  };
};

function inputRangeError() {
  event.preventDefault();
  if (minRangeInput.value === "" || maxRangeInput.value === "") {
    var errorMessage = 
    `<div class="error-message">
      <img src="images/error-icon (1).svg" width=15 height=15 alt='error message icon' />
      <p class="error-text">Please enter values for all fields above.</p>
    </div>`
    form.classList.add('error-message-class');
    form.innerHTML += errorMessage;
  };
};

// CHALLENGER NAME INPUTS/OUTPUTS

function populateNameGuessOutputs() {
  challenger1NameOutput.innerText = challenger1NameInput.value;
  challenger2NameOutput.innerText = challenger2NameInput.value;
  challenger1GuessOutput.innerText = challenger1GuessInput.value;
  challenger2GuessOutput.innerText = challenger2GuessInput.value;
};

// CHALLENGER GUESS INPUTS/OUTPUTS

function returnSubmitError() {
  event.preventDefault();
  if(challenger1NameInput.value === "" || challenger2NameInput.value === "" || challenger1GuessInput.value === "" || challenger2GuessInput.value === "") {
    var errorMessage = 
    `<div class="error-message2">
      <img src="images/error-icon (1).svg" width=15 height=15 alt='error message icon' />
      <p class="error-text">Please enter values for all fields above.</p>
    </div>`
    challengerGuessField.classList.add('error-message-class');
    challengerGuessField.innerHTML += errorMessage;
  } else {
    populateNameGuessOutputs();
  };
};

// GENERATE NUMBER FUNCTIONS

function generateNumberOnClick() {
  random =  Math.floor(Math.random() * (Number(maxRangeInput.value) - Number(minRangeInput.value) + 1) ) + Number(minRangeInput.value);
  console.log(random);
  return random;
};

// GUESS FEEDBACK

function addFeedback1AndWinner() {
  event.preventDefault();
  if (challenger1GuessInput.value < random) {
    challenger1Feedback.innerText = "That's too low";
  } else if (challenger1GuessInput.value > random) {
    challenger1Feedback.innerText = "That's too high";
  } else {
    challenger1Feedback.innerText = "BOOM!";
    addCard(challenger1NameInput.value);
  };
};

function addFeedback2AndWinner() {
  event.preventDefault();
  if (challenger2GuessInput.value < random) {
    challenger2Feedback.innerText = "That's too low";
  } else if (challenger2GuessInput.value > random) {
    challenger2Feedback.innerText = "That's too high";
  } else {
    challenger2Feedback.innerText = "BOOM!";
    addCard(challenger2NameInput.value);
  };
};

// APPEND CARD with Names

function addCard(winner) {
  var clone = cardTemplate.content.cloneNode(true);
  cardArea.prepend(clone);
  var winnerField = document.querySelector('.result-card-winner-name');
  winnerField.innerText = winner;
  console.log(winner);
};

function populateNamesOnCard() {
  var challenger1NameOnCard = document.querySelector('.result-card-challenger-1-name');
  var challenger2NameOnCard = document.querySelector('.result-card-challenger-2-name');
  challenger1NameOnCard.innerText = challenger1NameInput.value;
  challenger2NameOnCard.innerText = challenger2NameInput.value;
};

// DISABLE BUTTONS

function enableButtons() {
    clearButton.disabled = false;
    resetButton.disabled = false;
};

function disableButtons() {
  clearButton.disabled = true;
  resetButton.disabled = true;
};

function clearFields() {
  challenger1NameInput.value = "";
  challenger2NameInput.value = "";
  challenger1GuessInput.value = "";
  challenger2GuessInput.value = "";
};

