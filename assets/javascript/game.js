<!DOCTYPE html>
<html lang="en-us">
<head>
	<meta charset="utf-8">
	<title>Psychic Game</title>
</head>
<body>

	<div id="game">
		<h1> The Psychic Game </h1>
		<p>Guess what letter I'm thinking of!</p>
		<p>Wins:</p>
		<p>Losses:</p>
		<p>Guesses Left:</p>
		<p>Your Guesses so far:</p>
	</div>

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

           if (options.indexOf(userGuess) > -1) {

            if (userGuess === computerGuess) {
                wins++;
                numGuesses = 9;
                guessChoices = [];
             }

            if (userGuess != computerGuess) {
                numGuesses --;
                guessChoices.push(userGuess);
             }

             if (numGuesses === 0) {

                numGuesses = 9;
                losses ++;
                guessChoices = [];


        }
    
    
    </script>

</body>
</html>