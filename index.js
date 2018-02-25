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
console.log(`

...........,:...................................................................
...........,:...................................................................
...........,:...................................................................
...........,:...................................................................
...........,:...................................................................
...........,:.................=.....................,O...................=,.....
...........MM...MM.....7I....IM$...,MMM.....MD......MM=.....MN.....M.....MM.....
....7M.....MN...MMM....NM:...ZM...NMM$,.....MM,....,MMN....8MM+....MM....MM.....
....NM.....M8..DM.MN...OMM~..8M..MM.........MMM....MMNM....MM.M?...MMM...MM.....
....MM.....M8..MM..M:..7MNM..8M.MM..........MMMN...M.~M...+M:.?M...M7MM..MN.....
....MM,,,,,MN.DM=..:M:.?M.NM.DM,M..OMMMMMMM:MNNM..DM..M?..MM...ZM..MO.MM.MN.....
,,,,MMMMMMMMM,MMZMMMMM,IM,.MONM,M.,:MMMMM:,,M8.MM.MO,,MN,,MMNMMMM~,MO,7M~MD,,,,,
....?M~....MM.MMM8~.MM.IM..~MMM.M......,M...M$..MMM...MM.ZMMMZ..MM.M8..OMMD.....
....:M:....MM.MM.....M8$M...MMM.MM.....MM...M?..DMM...8M.MM~....=M=MN...MMZ.....
....~M,....8M,M$.....8M8M....M?..MMMMMMM....M=...=....?MIMM......MMMN....M,.....
....~M.....,:=M~......7DM..........$MM?....~M,........:MNMM......,+M$...........
,,,,,~,,,,,:~NM,,,,,,,,,,,,,,,,,,,,,,,,,,,,?M,,,,,,,,,,,,MM,,,,,,,,,,,,,,,,,,,,,
...........,:...................................................................
...........,:.................MNZNMMMMMMM?......................................
...........,:.................IM+?~:....M~......................................
...........,:.................~M........M.......................................
,,,,,,,,,,,:~,,,,,,,,,,,,,,,,,,M,,,,,,,,DDM,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
...........,:.................~M.......NM::.....................................
...........,:.................~M......NM.MM.....................................
...........,:.................~M...M..MM.MM.....................................
...........,:.................~M...:M.7MMMIIZ...................................
...........,:..................M....M?.MM,.M,...................................
...........,:..................M.....M N NM~....................................
...........,:..................M......OMMM......................................
...........,:..................M.......M .......................................
...........,:..................M......~M........................................
...........,:..................M......OM:.......................................
,,,,,,,,,,,:~,,,,,,,,,,,,,,,,,,M:,,,,:M,M,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,
...........,:.................,M.....MM..M......................................
...........,:.................~M.....M+..M......................................
...........,:.................IM.........8,.....................................
...........,:.................NM................................................
,,,,,,,,,,,,:,,,,,,,,,,,,,,,,,MM,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,



	`)

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



