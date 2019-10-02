<script type="text/javascript" src="..\assets\index.html"></script>

let computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];

let wins = 0;
let losses = 0;
let numGuesses = 9;
let guessChoices = [];

document.onkeyup = function(event) {

  let userGuess = event.key;

  let computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)];

  let options = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z",];
