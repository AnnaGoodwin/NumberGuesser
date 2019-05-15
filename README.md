# Number Guesser
**Partner: Jacob Ogren**

This project is a number guessing game that utilizes media queries for responsive design, as well as positioning using `flex-box` without `grid`

## Description
Using HTML, CSS, and JavaSccript, the application window responds to resizing down to 320px for mobile viewports. Semantic tags were heavily used in our CSS, which included the implementation of the `<output>` and `<template>` elements.

#### Original comp:

#### Our replicate:

#### Mobile:

## Features:
- Ability to change min and max range for random number to be generated between.
- Inputs for 2 players names and guesses.
- Error messages for empty or invalid inputs.
- Latest score display.
- Result card displaying the winner of the game.


### How to Play

To win the game, a player must guess a randomly generated number.  The range of this number can be changed manually, but is set between 1 and 100 by default. Players fill in their names and guesses. Upon submitting guesses, the game will display whether guesses are too high, too low, or will display a winner card if the correct number is guessed.  The input fields can be cleared when text is entered, and/or the game can be reset, which will generate a new random number.