var Letter = require("./letter")

function Word(currentWord){
	
	this.currentWord = currentWord;
	this.lettersArray = [];

	this.toStringWord = function(){
		var showWord = "";
		for(var i = 0; i < this.lettersArray.length; i++){
			showWord += this.lettersArray[i].changeChar();
		}
		// return currentWord
			return showWord;
	}
	this.letters = function(){
		var letterString = this.currentWord.split("")
		for(var i = 0; i < letterString.length; i++){
			var letter = new Letter(letterString[i])
			this.lettersArray.push(letter)
		}
	}

	this.guessingArgument = function(userGuess){
		for(var i = 0; i < this.lettersArray.length; i++){
			this.lettersArray[i].checkCharacter(userGuess);
		}
	}
	this.beenGuessed = function(){
		var wordGuessed = true;
		for (var i = 0; i < this.lettersArray.length; i++){
			if(!this.lettersArray[i].guessedCorrect){
				wordGuessed = false;
			}
		}return wordGuessed;
	}
	
}

// var newWord = new Word("chicken");

// newWord.letters()


// console.log("show this")
// newWord.guessingArgument("c")
// console.log(newWord.toStringWord())

module.exports = Word;