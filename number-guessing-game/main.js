const generateRandomNumber = () => Math.floor(Math.random() * 100) + 1; // Generate a random number between 1 and 100

// Get the number that player enters
function getPlayerGuess() {
  while (true) {
    const input = prompt('Enter a random number from 1 to 100');

    if (input === null) {
      alert('You cancelled the prompt.');
      return; // Exit the function if the user cancels the prompt
    }

    // ********** Check for spaces ************
    if (/\s/.test(input)) {
      alert('Invalid input! Please enter a number without any spaces.');
      continue;
    }

    // ******* Check for leading zeros ********
    if (input.length > 1 && input[0] === '0') {
      alert('Invalid input! Please enter the number without leading zeros.');
      continue;
    }

    if (/[-'/`~!#*$@_%+=.,^&(){}[\]|;:"<>?\\]/g.test(input)) {
      alert(
        'Invalid input! Only number between 1 and 100 are allowed. Try again!'
      );
      continue;
    }

    const answer = Number(input);

    if (isNaN(answer)) {
      alert('No number was entered! Please try again.');
      continue;
    } else if (answer === 0) {
      alert('Input cannot be 0. Please try again!');
    } else if (answer < 1 || answer > 100) {
      alert(
        'You entered a number outside the range of 1 to 100. Please try again!'
      );
      continue;
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
  const maxAttempts = 10;

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

    const scoreMapping = {
      1: 100,
      2: 90,
      3: 80,
      4: 70,
      5: 60,
      6: 50,
      7: 40,
      8: 30,
      9: 20,
      10: 10,
    };

    const scoreResult = scoreMapping[attempts];
    let gradeResult =
      scoreResult === 100
        ? 'Excellent 👏'
        : scoreResult <= 50 && scoreResult != 10
        ? 'Nice, at least you found it 😒'
        : scoreResult > 50
        ? 'Very nice 👍'
        : 'Really? You could not guess that at all 🤦‍♂️?';

    // If the user win
    if (result === 'The number you entered is correct!') {
      alert(
        `Congratulations! You guessed the correct number in ${attempts} attempts. Your bonus score is ${scoreResult} and your grade is ${gradeResult}`
      );
      console.log(
        `Wohoo you have won! 🎉🎉. Your bonus score is ${scoreResult}. Your grade is ${gradeResult}`
      );
      break;
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
      `You lost! So sorry 😢😭. Your bonus score is ${score}. ${
        score == 0 ? 'Really? You could not guess that at all 🤦‍♂️?' : ''
      }`
    );
  }

  console.log(
    `Game over! You used ${attempts} attempts of total ${maxAttempts} attempts.`
  );
}

game();
