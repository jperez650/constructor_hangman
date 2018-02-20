var Letter = require("./letter")
//This creates an object representing the current word the user is attempting to guess. 
function Word(currentWord){
	// An array of new Letter objects representing the letters of the underlying word
	this.currentWord = currentWord;
	this.lettersArray = [];
	// This is used to create an object representing the current word the user is attempting to guess. 

	// console.log(this.letters)
	// 	A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
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
	// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
	this.guessingArgument = function(userGuess){
		for(var i = 0; i < this.lettersArray.length; i++){
			this.lettersArray[i].checkCharacter(userGuess);
		}
	}
	// 
	
}

var word = new Word("chicken")

word.letters()

word.guessingArgument("c")
// word.("a")

console.log(word.toStringWord())

// module.exports = Word;