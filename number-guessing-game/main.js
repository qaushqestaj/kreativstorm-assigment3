const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1; // Generate a random number between 1 and 10

// Get the number that player enters
function getPlayerGuess() {
  while (true) {
    const input = prompt('Enter a random number from 1 to 10');

    if (input === null) {
      alert('You cancelled the prompt.');
      return; // Exit the function if the user cancels the prompt
    }

    const answer = Number(input);

    if (isNaN(answer)) {
      alert('No number was entered! Please try again.');
    } else if (answer === 0) {
      alert('Input cannot be blank or 0. Please try again!');
    } else if (answer < 1 || answer > 10) {
      alert(
        'You entered a number outside the range of 1 to 10. Please try again!'
      );
    } else {
      alert('Valid number entered: ' + answer);
      return answer;
    }
  }
}

// Checks the player's guess and the random number based on three conditions
function checkGuess(playerGuess, randomNum) {
  if (playerGuess > randomNum) {
    return 'The number you entered is too high!';
  } else if (playerGuess < randomNum) {
    return 'The number you entered is too low!';
  } else {
    return 'The number you entered is correct!';
  }
}

// Main logic of the game
function game() {
  const randomNumber = generateRandomNumber(); // Store the generated random number in a variable
  let playerGuess;
  let attempts = 0;
  let score = 0;
  const maxAttempts = 10;

  while (attempts < maxAttempts) {
    let playerGuess = getPlayerGuess();
    attempts++;

    // Only check if the player didn't cancel the prompt
    if (playerGuess == undefined) {
      console.log('You canceled the game.');
      break;
    }

    const result = checkGuess(playerGuess, randomNumber); // Store the result of checkGuess function
    console.log(result);

    // If the user win
    if (result === 'The number you entered is correct!') {
      alert(
        `Congratulations! You guessed the correct number in ${attempts} attempts`
      );
      console.log('Wohoo you have won! 🎉🎉');
      break;
    } else {
      alert(result + ' Try again');
    }
  }

  // If the user lose by using all the attempts and not guessing the correct number
  if (attempts === maxAttempts && playerGuess !== randomNumber) {
    alert(
      `Sorry, you have used all ${attempts} attempts. The correct number was ${randomNumber}`
    );
    console.log('You lost! So sorry 😢😭');
  }

  console.log(
    `Game over! You used ${attempts} attempts of total ${maxAttempts} attempts`
  );
}

game();
