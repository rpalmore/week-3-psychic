// Our array of possible computer choices for psychic game:

var computerChoices = ("abcdefghijklmnopqrstuvwxyz").split("");

console.log(computerChoices);

// Define empty string to represent computer's random selection:

var letter = "";

// Our blank array of wrong guesses:

var wrongLetters = [];

// Our blank array for the winning letter:

var winningLetter = [];

// Define variables for tracking wins and losses: 

var wins = 0;
var losses = 0;

// Define variable for number of guesses player has:

var chances = 9;

// Generate random letter from computerChoices
function letComputerChoose() {
    letter = computerChoices[
        Math.floor(Math.random() * computerChoices.length)
    ];

    console.log("this is random letter generated " + letter);
}

letComputerChoose();

// Start game automatically using self-invoking function:

// (function () {
    document.getElementById("chances-left").innerHTML = chances;
    document.getElementById("letter-match").innerHTML = wins;
    document.getElementById("loss-counter").innerHTML = losses;
// }) ();


// Collect user input

document.onkeyup = function(event) {

// Determine which key was pressed and convert to lower case:
        
var userGuess = event.key.toLowerCase();

// Check this is working in console.log:

console.log("this is my guess " + userGuess);

// Check to see if userGuess matches letter

console.log(letter.includes(userGuess));

// Write if/then statement for action depending on match:

if (letter.includes(userGuess)) {
    wins++;
    chances = 9;
    wrongLetters = [];
    // Generate new letter
    letComputerChoose();
}

else {
    wrongLetters.push(userGuess);
    chances--;
}

if (chances === 0){
	losses++;
    chances = 9;
    wrongLetters = [];
    // Generate new letter
}

// Update wins, losses, chances, wrong letters to HTML:
	document.getElementById("loss-counter").innerHTML = losses;
    document.getElementById("letter-match").innerHTML = wins;
    document.getElementById("chances-left").innerHTML = chances;
    document.getElementById("wrong-letters").innerHTML = wrongLetters.join(" ");
}