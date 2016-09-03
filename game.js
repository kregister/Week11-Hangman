// Your game.js file will randomly select a word for the player.

function StartGame () {

this.randWords = ['banana', 'brocolli', 'dragon', 'dilemma', 'werewolf', 'werewolf', 'kingdom', 'ladybug', 'legend', 'coyotes', 'chimpanzee', 'clubhouse', 'fairytale', 'vampire', 'campfire'];

this.wordResult = this.randWords[Math.floor(Math.random() * this.randWords.length)];

};

module.exports = StartGame;
