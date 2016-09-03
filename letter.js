//CONSTRUCTOR

// letter.js should control whether or not a letter appears as a "_" or as itself on-screen.

function Letter (letter) {

    this.isGuessed = false;
    this.letter = letter;

    this.display = function()
    {
        if(this.isGuessed)
            return this.letter;
        else
            return '_';
    };
};

var letter = new Letter('a');
console.log(letter.display());
letter.isGuessed = true;
console.log(letter.display());

module.exports = Letter;