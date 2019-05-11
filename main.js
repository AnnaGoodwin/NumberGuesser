// GLOBAL VARIABLES

var random =  Math.ceil(Math.random() * (100 - 1));
console.log(random);
var challenger1Name, challenger2Name;

// MIN/MAX RANGE 

var updateButton = document.querySelector('.update-button');
var minRangeInput = document.getElementById('min-range-input');
var maxRangeInput = document.getElementById('max-range-input');
var minRangeField = document.querySelector('.min-current-range');
var maxRangeField = document.querySelector('.max-current-range');
var form = document.querySelector('.set-range-feature');

updateButton.addEventListener('click', inputRangeValues)

function inputRangeValues() {
  event.preventDefault();
  if (minRangeInput.value > maxRangeInput.value) {
    var errorMessage = 
    `<div class="error-message">
      <img src="images/error-icon (1).svg" width=15 height=15 alt='error message icon' />
      <p class="error-range-text">Your min range is greater than your max. Please adjust.</p>
    </div>`
    form.classList.add('error-message-class');
    form.innerHTML += errorMessage;
  } else {
  minRangeField.innerText = minRangeInput.value;
  maxRangeField.innerText = maxRangeInput.value;
  }
};


// CHALLENGER NAME INPUTS/OUTPUTS

var submitButton = document.querySelector('.submit-button');
var challenger1NameInput = document.getElementById('challenger1-name-input');
var challenger2NameInput = document.getElementById('challenger2-name-input');
var challenger1NameOutput = document.getElementById('challenger1-name-output');
var challenger2NameOutput = document.getElementById('challenger2-name-output');

submitButton.addEventListener('click', function () {
  event.preventDefault();
  challenger1Name = challenger1NameInput.value;
  challenger2Name = challenger2NameInput.value;
  challenger1NameOutput.innerText = challenger1Name;
  challenger2NameOutput.innerText = challenger2Name;
});

// CHALLENGER GUESS INPUTS/OUTPUTS

var challenger1GuessInput = document.getElementById('challenger1-guess-input');
var challenger2GuessInput = document.getElementById('challenger2-guess-input');
var challenger1GuessOutput = document.getElementById('challenger1-guess-output');
var challenger2GuessOutput = document.getElementById('challenger2-guess-output');

submitButton.addEventListener('click', function () {
  event.preventDefault();
  challenger1GuessOutput.innerText = challenger1GuessInput.value;
  challenger2GuessOutput.innerText = challenger2GuessInput.value;
});

// GENERATE NUMBER FUNCTIONS

updateButton.addEventListener('click', generateNumberOnClick);

function generateNumberOnClick() {
  random =  Math.ceil(Math.random() * (maxRangeInput.value - minRangeInput.value + 1));
  console.log(random);
  return random;
};

// GUESS FEEDBACK

var challenger1Feedback = document.getElementById('guess-response1');
var challenger2Feedback = document.getElementById('guess-response2');

submitButton.addEventListener('click', function () {
  event.preventDefault();
  if (challenger1GuessInput.value < random) {
    challenger1Feedback.innerText = "That's too low";
  } else if (challenger1GuessInput.value > random) {
    challenger1Feedback.innerText = "That's too high";
  } else {
    challenger1Feedback.innerText = "BOOM!";
    addCard(challenger1Name);
  }});

submitButton.addEventListener('click', function () {
  event.preventDefault();
  if (challenger2GuessInput.value < random) {
    challenger2Feedback.innerText = "That's too low";
  } else if (challenger2GuessInput.value > random) {
    challenger2Feedback.innerText = "That's too high";
  } else {
    challenger2Feedback.innerText = "BOOM!";
    addCard(challenger2Name);
  }});

var cardTemplate = document.querySelector('.result-card-template');
var cardArea = document.querySelector('.card-container');

function addCard(winner) {
  var clone = cardTemplate.content.cloneNode(true);
  cardArea.prepend(clone);
  var winnerField = document.querySelector('.result-card-winner-name');
  winnerField.innerText = winner;
};

submitButton.addEventListener('click', function () {
  var challenger1NameOnCard = document.querySelector('.result-card-challenger-1-name');
  var challenger2NameOnCard = document.querySelector('.result-card-challenger-2-name');
  challenger1NameOnCard.innerText = challenger1NameInput.value;
  challenger2NameOnCard.innerText = challenger2NameInput.value;
});

// DISABLE BUTTONS

var clearButton = document.getElementById('clear-button');
var resetButton = document.getElementById('reset-button');

challenger1NameInput.addEventListener('keyup', enableClearButton);
challenger2NameInput.addEventListener('keyup', enableClearButton);
challenger1GuessInput.addEventListener('keyup', enableClearButton);
challenger2GuessInput.addEventListener('keyup', enableClearButton);

function enableClearButton() {
    clearButton.disabled = false;
}

clearButton.addEventListener('click', function() {
  clearButton.disabled = true;
})

clearButton.addEventListener('click', function() {
  document.getElementById("challenger1-name-input").value = "";
  document.getElementById("challenger2-name-input").value = "";
  document.getElementById("challenger1-guess-input").value = "";
  document.getElementById("challenger2-guess-input").value = "";
});
