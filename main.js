// main.js will contain the logic of your app. Running it in Terminal/Bash will start the game.
// The app should end when a player guesses the correct word or runs out of guesses.
var inquirer = require("inquirer");

var StartGame = require('./game.js');
var placeholder = require('./letter.js');
var word = require('./word.js');


var newWord = new StartGame();
var currentAnswer = newWord.StartGame;
var numberGuessesLeft = 10;

var letterGuessed = "a";

var wordCheck = new Word(currentAnswer, userInput)

console.log(wordCheck.word);

