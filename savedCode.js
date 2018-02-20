var Letter = require("./letter")
//This creates an object representing the current word the user is attempting to guess. 
function Word(currentWord){
// An array of new Letter objects representing the letters of the underlying word
this.lettersArray = [];
// This is used to create an object representing the current word the user is attempting to guess. 
this.letters = currentWord.split("").map(function(character){
	return new Letter(character);
})
// console.log(this.letters)
// 	A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
this.toStringWord = function(){
	var showWord = "";
	for(var i = 0; i < this.lettersArray.length; i++){
		showWord += this.lettersArray[i].changeChar();
	}
	return currentWord.split("");
	// return showWord;
}
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
// this.guessingArgument = function(userGuess){
// 	for(var i = 0; i < this.lettersArray[i].checCharacter(userGuess));
// }
// 
}






module.exports = Word;