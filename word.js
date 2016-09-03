//CONSTRUCTOR

// word.js should contain all of the methods which will check the letters guessed versus the random word selected.

function Word (wordPicked, letterPicked) {

	this.word = wordPicked;
	this.letter = letterPicked;
	this.letterArr = this.word.split("");
	this.letterGuessed = [];
	this.alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

	this.checkLetters = function() {

		if(this.letterGuessed.indexOf(this.letter) > -1) {
			console.log("Letter already guessed!");
			return;
		}

		else {
			console.log("Letter Available to Pick")

			for (i = 0; i < this.letterArr.length; i++) {
				console.log(this.letterArr[i]);

				if (this.letterArr[i] === this.letter) {
				console.log("this is a word");
				this.trueOrfalse = true;
				}
			}
		
		this.letterGuessed.push(this.letter);

		}
	}

}


module.exports = Word;

// var currentAnswer = newWord.StartGame;
// var wordCheck = new Word(currentAnswer, letterGuessed)
// var letterGuessed = "a";