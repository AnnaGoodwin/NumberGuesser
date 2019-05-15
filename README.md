# Number Guesser
**Partner: Jacob Ogren**

This project is a number guessing game that utilizes media queries for responsive design, as well as positioning using `flex-box` without `grid`

## Description
Using HTML, CSS, and JavaScript, the application window responds to resizing down to 320px for mobile viewports. Semantic tags were strategically placed in our HTML, which included the implementation of the `<output>` and `<template>` elements. Most JavaScript functions are under 10 lines long.

#### Original comp:

![Original comp](http://frontend.turing.io/assets/images/projects/number-guesser/week2-numberguesser-01.jpg)

#### Our replicate:

![Our replicate](https://user-images.githubusercontent.com/19739235/57812555-9f82ec00-772a-11e9-9bd5-a3be6ac6301b.png)

#### Mobile:

![Mobile](https://user-images.githubusercontent.com/19739235/57812606-c6d9b900-772a-11e9-8297-a91898c5e100.png)

## Features:
- Ability to change minimum and maximum range.
- Ability to generate a random number on load or between the chosen range on click.
- Inputs for 2 players names and guesses.
- Error messages for empty or invalid inputs.
- Latest score displaying too high, too low or just right ("BOOM").
- Result card displaying the winner of the game.
- Ability to delete individual winner cards based on the use of event delegation and bubbling concepts.


### How to Play

To win the game, a player must guess a randomly generated number.  The range of this number can be changed manually, but is set between 1 and 100 by default. Players fill in their names and guesses. Upon submitting guesses, the game will display whether guesses are too high, too low, or will display a winner card with the winners name if the correct number is guessed.  The input fields can be cleared when text is entered, and/or the game can be reset, which will generate a new random number.