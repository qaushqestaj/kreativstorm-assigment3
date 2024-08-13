const generateRandomNumber = () => Math.floor(Math.random() * 10) + 1;

function getPlayerGuess() {
  while (true) {
    const input = prompt('Enter a random number from 1 to 10');

    if (input === null) {
      alert('You cancelled the prompt.');
      break;
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

function checkGuess(plGuess, correctNum) {
  console.log(`Player Guess: ${plGuess}, Correct Number: ${correctNum}`);
  if (plGuess > correctNum) {
    return 'The number you entered is too high!';
  } else if (plGuess < correctNum) {
    return 'The number you entered is too low!';
  } else {
    return 'The number is correct';
  }
}

const randomNumber = generateRandomNumber();
// console.log('Generated number:', randomNumber);
const playerGuess = getPlayerGuess();

if (playerGuess !== undefined) {
  const result = checkGuess(playerGuess, randomNumber);
  console.log(result);
} else {
  console.log('No guess was made.');
}
