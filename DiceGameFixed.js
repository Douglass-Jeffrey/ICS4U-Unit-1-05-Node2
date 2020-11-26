/*
* This Program runs a dice game where you guess a random number from a set of 
* numbers that you choose
*
* @author  Douglass Jeffrey
* @version 1.0
* @since   2020-11-25
* Class DiceGame.
*/


// Imports readline to allow for user input
const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Begins try statement
try {
  // Explains game to user
  console.log('This is the Dicegame program. You play by first '
               + 'entering the number of sides you wish the die '
               + 'to have, and then guessing numbers that would be '
               + 'located on the die until you get the right answer');

  // Accepts user input in str form
  rl.question('Enter number of sides: ', (numberofsidesstr) => {
    // Turns number of sides into an int value
    var numberofsides = parseInt (numberofsidesstr, 10);

    // Checks to see if a realistic number of sides has been chosen
    if (numberofsides < 1) {
      console.log('Invalid number of sides please pick real numbers.');
      return;
    }
    
    // Generates random number
    var randomint = (Math.ceil(Math.random() * numberofsides));
    var guesses = 0;
 
    // Process (Loop)
    function loop() {
      
      // Gets user input as a string
      rl.question('Guess a number between 1 and ' + numberofsides + ': ',
                  function saveInput(guessStr) {
        console.log();

        // Converts guess from a string to an integer
        var guessednum = parseInt(guessStr, 10);

        // Increases guess count and prints guess number
        guesses = guesses + 1;
        console.log('Guesses: ' + guesses);
        
        // Checks to see if input is valid
        if (isNaN(guessednum) == true) {
          console.log("Please input proper values.");
          rl.close();

          //Checks if user inputted number = random int
          } else if (guessednum == randomint) {
            // Outputs answer when user guesses correctly
            console.log ('You guessed correctly! The answer was: ' 
                         + randomint + '. It took you: ' + guesses
                         + ' guesses');
            rl.close();

          // If both other cases are untrue, do this instead
          } else {
            // Continues program if guess is wrong
            console.log("Wrong number, try again!");
            console.log();
            loop();
        }
      });
      return;
    }
    loop();
  });
  // Catches invalid values.
} catch (err) {
  console.log("Invalid input");
}