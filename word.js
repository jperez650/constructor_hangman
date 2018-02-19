var Letter = require("./letter")

function Word(currentWord){
//create a new array made up of current word thats being guessed
this.letters = currentWord.split("").map(function(character){
	return new Letter(character);
})
// console.log(this.letters)
// 	A function that returns a string representing the word. This should call the function on each letter object (the first function defined in Letter.js) that displays the character or an underscore and concatenate those together.
this.toStringWord = function(){
	// for(var i = 0; i < this.letters.length; i++){
		
	// }
	return currentWord.split("");
}
// A function that takes a character as an argument and calls the guess function on each letter object (the second function defined in Letter.js)
// 
}




module.exports = Word;