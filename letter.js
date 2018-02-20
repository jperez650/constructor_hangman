function Letter(character){
	// A string value to store the underlying character for the letter
	this.character = character;
	//A boolean value that stores whether that letter has been guessed yet
	this.guessedCorrect = false;
	//show the letter if guessed/ hide if not
	this.changeChar = function(){
		if(this.guessedCorrect === true){
			return this.character
		}else{
			return "_";
		}
	}
	//check the user input to see if it matches our word
	this.checkCharacter = function(userGuess){
		if(this.character === userGuess){
			this.guessedCorrect = true;
			return true
		}else{
			return false
		}
	}
};


module.exports = Letter;