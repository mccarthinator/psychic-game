//VARIABLES 

  // wins amount.
    var wins = 0;

  // losses amount.
    var losses = 0;

  // num of possible guesses.
    var guesses = 9;

  // num of guesses left
    var guessesLeft = 9;

  // The array of letter choices
    var computerChoices = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

  // The guessed letters
    var guessedLetters = [];
    var letterToGuess = null;

//FUNCTIONS 

  //Lets the computer select a random letter from the array
  var computerGuess = computerChoices[Math.floor(Math.random() * computerChoices.length)]
  console.log(computerGuess);

  //User gets 9 guesses
  var updateguessesLeft = function() {
    
  //taking the HTML element and setting it equal to the guessesLeft. 
  document.querySelector('#guessesLeft').innerHTML = "Guesses left: " + guessesLeft;
  };

  var updateLetterToGuess = function() {
    this.letterToGuess = this.computerChoices[Math.floor(Math.random() * this.computerChoices.length)];
  };
  var updateGuessesSoFar = function() {
    // Here we display the user's guesses as letters separated by commas. 
    document.querySelector('#lets').innerHTML = "Your Guesses so far: " + guessedLetters.join(', ');
  };
  // Function will be called when we reset everything
  var reset = function() {
    totalGuesses = 9;
    guessesLeft = 9;
    guessedLetters = [];



//Users guess function
document.onkeyup = function(event) {
  var userGuess = String.fromCharCode(event.keyCode).toLowerCase();



    // Indicates a win, loss, guess count and reset.
        if (guessesLeft > 0){
            if (userGuess === computerGuess){
                wins++;
                document.querySelector('#wins').innerHTML = "Wins: " + wins;
                alert("Well done, young padawan.");
                reset();
            }
        else if(guessesLeft > 0){
          guessesLeft--;
          document.querySelector("#guessLeft").innerHTML = "Guesses Left: " + guessesLeft;

        }

        else if(guessesLeft === 0){
            losses++;
            document.querySelector('#losses').innerHTML = "Losses: " + losses;
            alert("Not so hot."); 
            reset();
        }
};