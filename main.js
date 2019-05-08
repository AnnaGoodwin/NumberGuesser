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