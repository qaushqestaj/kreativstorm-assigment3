const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1;

function getPlayerGuess() {
  while (true) {
    const input = prompt('Enter a random number from 1 to 100');

    if (input === null) {
      alert('Game cancelled, thanks for playing.');
      return;
    }

    const answer = Number(input.trim());

    if (isNaN(answer) || answer < 1 || answer > 100 || input.includes('.') ||
      (input.length > 1 && input[0] === '0') || /[-'/`~!#*$@_%+=,^&(){}[\]|;:"<>?\\]/g.test(input)) {
      alert('Invalid input! Please enter a whole number between 1 and 100.');
    } else {
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
  const maxAttempts = 10;

  // Fixed: Calculate score
  function calculateScore(attempts) {
    return Math.max(0, Math.floor(100 - (attempts - 1) * 7.5));
  }

  while (attempts < maxAttempts) {
    let playerGuess = getPlayerGuess();

    // Only check if the player didn't cancel the prompt
    if (playerGuess == undefined) {
      let score = 0;
      console.log(`You canceled the game. Your bonus score is ${score}.`);
      break;
    }

    attempts++;
    const result = checkGuess(playerGuess, randomNumber); // Store the result of checkGuess function
    console.log(result);

    //Updated score result
    const scoreResult = calculateScore(attempts);
    let gradeResult =
      scoreResult >= 90 ? 'Excellent 👏' :
        scoreResult >= 70 ? 'Very nice 👍' :
          scoreResult >= 50 ? 'Nice, at least you found it 😒' :
            'Really? You could not guess that earlier 🤦‍♂️?';

    // If the user win
    if (result === 'The number you entered is correct!') {
      alert(
        `Congratulations! You guessed the correct number in ${attempts} attempts. Your bonus score is ${scoreResult} and your grade is ${gradeResult}`
      );
      console.log(
        `Wohoo you have won! 🎉🎉. Your bonus score is ${scoreResult}. Your grade is ${gradeResult}`
      );
      return;
    } else {
      alert(result + ' Try again');
    }
  }

  // If the user lose by using all the attempts and not guessing the correct number
  if (attempts === maxAttempts && playerGuess !== randomNumber) {
    alert(
      `Sorry, you have used all ${attempts} attempts. The correct number was ${randomNumber}.`
    );
    let score = 0;
    console.log(
      `You lost! So sorry 😢😭. Your bonus score is ${score}. ${score == 0 ? 'Really? You could not guess that at all 🤦‍♂️?' : ''
      }`
    );
  }

  console.log(
    `Game over! You used ${attempts} attempts of total ${maxAttempts} attempts.`
  );
}

game();
