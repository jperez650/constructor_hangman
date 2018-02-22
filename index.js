var Word = require("./word")
var inquirer = require("inquirer")

var chosenLetters = [];
var guessLeft = 10;
var wins = 0;
var loss = 0;

var animalsArray = ["dog", "elephant", "ants", "iguana", "snake"];

	var randomIndex = Math.floor(Math.random()*animalsArray.length)
	var currentWord = animalsArray[randomIndex];
	var newWord = new Word(currentWord);	
	newWord.letters()
	newWord.toStringWord()
function newGuess(){
	randomIndex = Math.floor(Math.random()*animalsArray.length)
	currentWord = animalsArray[randomIndex];
	newWord = new Word(currentWord);	
	newWord.letters()
	newWord.toStringWord()
}
function reset(){
    correct = false
    chosenLetters= []
    guessLeft = 10;
	newWord = new Word(currentWord);
	newGuess()	
}

function showStats(){
	console.log("Wins: "+ wins);
	console.log("Losses: "+ loss);
	console.log("Guesses Left: " + guessLeft);
	console.log(chosenLetters);
	console.log(newWord.toStringWord());
}

function wantToPlay() {
	inquirer.prompt([		
		{
			type: "confirm",
			message: "Are you ready for the Hang-Man game?",
			name: "play"
		}

	]).then(function (answers) {
	   console.log(answers.play)
		   if(answers.play){
		   		// randomWord();
		   		startGame();
		   }else{
		   	console.log("Come back when you're ready")
		   }
		})

}
wantToPlay()

function startGame(){
	showStats();
		inquirer.prompt([		
		{
			type: "input",
			message: "Guess a letter",
			name: "userInput"
		}

	]).then(function (answers) {
		var userGuess = answers.userInput[0].toLowerCase();
	   // console.log(answers.userInput)
		   if(chosenLetters.includes(userGuess)|| !userGuess){
			   	console.log(userGuess+" has already been guessed. Try a different one!")
			   	return startGame()
		   }
		   chosenLetters.push(userGuess);
		   var correctGuess = newWord.guessingArgument(userGuess)

		   if(correctGuess){
		   		if(newWord.beenGuessed()){
		   			wins ++;
		   			console.log("Congratulation! You Won!")
		   			reset();
		   		}
		   }
		   else{
		   		guessLeft --;
		   		if(guessLeft === 0){
		   			loss ++;
		   			console.log("You lost. Try again!")
		   			reset();
		   		}
		   }
		   newWord.guessingArgument(userGuess);
		   startGame();
		})

}



