var Word = require("./word")
var inquirer = require("inquirer")

var animalsArray = ["dogs", "cats", "frogs"];

var randomIndex = Math.floor(Math.random()*animalsArray.length)
// console.log(randomIndex)

var currentWord = animalsArray[randomIndex];
// console.log(currentWord)

var newWord = new Word(currentWord);

console.log(newWord.toStringWord())



inquirer.prompt([		
	{
		message: "Guess a letter",
		name: "letterGuessed"
	}

]).then(function (answers) {
   console.log(answers.letterGuessed)
})
