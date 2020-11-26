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

  // Accepts user input
  rl.question('Enter number of sides: ', (numberofsides) => {

    // Checks to see if a realistic number of sides has been chosen
    if (numberofsides < 1) {
      console.log('Invalid number of sides please pick real numbers.');
      return;
          
    // If a proper integer has been chosen:
    } else {
  
      // Generates random number
      var randomint = (Math.ceil(Math.random() * numberofsides));
  
      // Displays random integer (for debugging) usually commented out
      //console.log(randomint);
  
      // Defines guess counter
      var guesses = 0;
      
      // Beginning of guessing loop
      while (true) {
  
        // Recieves user input
        rl.question('Guess a number between 1 and' + numberofsides), (guessednum) => {
  
          // Counts and prints amount of guesses
          guesses = guesses + 1;
          console.log('Guesses: ' + guesses);
    
          // Determines if guessed number is equivalent to random number
          if (guessednum == randomint) {
            console.log();
            console.log('You guessed correctly! The answer was: ' 
                        + randomint + '. it took you: ' + guesses
                        + ' guesses');
            return; // Ends loop if user guesses correctly
          } else {
            console.log();
            console.log('Wrong guess. Try again.');
          }
        };
      }
    }
  });
// Catches invalid inputs
} catch(err) {
console.log();
console.log();
console.log('Invalid input. Please try again');
}
