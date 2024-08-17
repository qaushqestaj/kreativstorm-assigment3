// Generate a random number between 1 and 100
const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

/**
 * Prompts the user to enter a guess and validates the input
 * @returns {number|null} The valid guess as a number, or null if the user cancels
 */
function getPlayerGuess() {
  while (true) {
    const input = prompt('Enter a number between 1 and 100');

    // Check if user cancelled the prompt
    if (input === null) {
      return null;
    }

    // Validate input: no spaces, no leading zeros, digits only
    if (/\s/.test(input) || input.length > 1 && input[0] === '0' || /[^\d]/.test(input)) {
      alert('Invalid input. Please enter a number between 1 and 100 without spaces or leading zeros.');
      continue;
    }

    const answer = Number(input);

    // Ensure the number is within the valid range
    if (isNaN(answer) || answer < 1 || answer > 100) {
      alert('Please enter a valid number between 1 and 100.');
    } else {
      return answer;
    }
  }
}

/**
 * Checks if the player's guess matches the random number
 * @param {number} playerGuess - The player's guess
 * @param {number} randomNum - The random number to guess
 * @returns {string} Feedback on the guess
 */
function checkGuess(playerGuess, randomNum) {
  if (playerGuess > randomNum) {
    return 'The number you entered is too high!';
  } else if (playerGuess < randomNum) {
    return 'The number you entered is too low!';
  } else {
    return 'Correct! You guessed the number!';
  }
}

/**
 * Calculates the score based on the number of attempts
 * @param {number} attempts - Number of attempts taken
 * @returns {number} The score
 */
function getScore(attempts) {
  const scoreMapping = {
    1: 100, 2: 90, 3: 80, 4: 70, 5: 60,
    6: 50, 7: 40, 8: 30, 9: 20, 10: 10
  };
  return scoreMapping[attempts] || 0;
}

/**
 * Determines the grade based on the score
 * @param {number} score - The player's score
 * @returns {string} A grade and emoji based on the score
 */
function getGrade(score) {
  if (score === 100) return 'Excellent 👏';
  if (score >= 70) return 'Very good 👍';
  if (score >= 40) return 'Good, at least you found it 😊';
  if (score > 0) return 'You can do better 🙂';
  return 'Really? You could not guess it at all? 🤔';
}

/**
 * Main game function
 */
function game() {
  const randomNumber = generateRandomNumber();
  let attempts = 0;
  const maxAttempts = 10;

  while (attempts < maxAttempts) {
    const playerGuess = getPlayerGuess();

    // Handle game cancellation
    if (playerGuess === null) {
      console.log('You cancelled the game. Your score is 0.');
      return;
    }

    attempts++;
    const result = checkGuess(playerGuess, randomNumber);
    console.log(result);

    // Check if the player guessed correctly
    if (result.includes('Correct')) {
      const score = getScore(attempts);
      const grade = getGrade(score);
      const message = `Congratulations! You guessed the number in ${attempts} attempts. Your score is ${score} and your grade is: ${grade}`;
      alert(message);
      console.log(message);
      return;
    } else {
      alert(result + ' Try again.');
    }
  }

  // Player used all attempts without guessing correctly
  alert(`Sorry, you've used all ${maxAttempts} attempts. The correct number was ${randomNumber}.`);
  console.log(`You lost. The correct number was ${randomNumber}. Your score is 0.`);
}

// Start the game
game();