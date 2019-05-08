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

var submitButton = document.querySelector('.submit-button');
var challenger1NameInput = document.getElementById('challenger1-name-input');
var challenger2NameInput = document.getElementById('challenger2-name-input');
var challenger1NameOutput = document.getElementById('challenger1-name-output');
var challenger2NameOutput = document.getElementById('challenger2-name-output');

submitButton.addEventListener('click', function () {
  event.preventDefault();
  challenger1NameOutput.innerText = challenger1NameInput.value;
  challenger2NameOutput.innerText = challenger2NameInput.value;
})