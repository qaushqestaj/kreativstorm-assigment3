// Function to randomly select rock, paper, or scissors for the computer
const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
};

// Function to play a single round of Rock, Paper, Scissors
const Round = (playerSelection, computerSelection) => {
  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose ${playerSelection}`;
  }

  return (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
    ? `You win! ${
        playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
      } beats ${computerSelection}`
    : `You lose! ${
        computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
      } beats ${playerSelection}`
};

// Function to get a valid player input
const getPlayerChoice = () => {
  let playerPrompt = "";

  do {
    playerPrompt = prompt("Choose between rock, paper, and scissors");
    if (playerPrompt === null) {
      alert("You canceled the game.");
      return null; // Exit the function if the player cancels
    }

    playerPrompt = playerPrompt.trim().toLowerCase();
    if (
      playerPrompt !== "rock" &&
      playerPrompt !== "paper" &&
      playerPrompt !== "scissors"
    ) {
      alert("You must type rock, paper, or scissors");
    }
  } while (
    playerPrompt !== "rock" &&
    playerPrompt !== "paper" &&
    playerPrompt !== "scissors"
  );

  return playerPrompt;
};

// Main game function to play 5 rounds and keep score
const game = () => {
  alert("You should open the console to play, Right-click on the page and select Inspect from the context menu, or press F12 key.");
  let playAgain = true;

  while (playAgain) {
    let playerScore = 0;
    let computerScore = 0;
    const totalRounds = 5;

    for (let round = 1; round <= totalRounds; round++) {
      const playerChoice = getPlayerChoice();

      if (playerChoice === null) {
        return; // Exit the game if the player cancels
      }

      const computerChoice = computerPlay();
      console.log(`Round ${round}:`);
      console.log(`You chose ${playerChoice}`);
      console.log(`Computer chose ${computerChoice}`);

      const result = Round(playerChoice, computerChoice);
      console.log(result);

      if (result.startsWith("You win")) {
        playerScore++;
      } else if (result.startsWith("You lose")) {
        computerScore++;
      }

      console.log(`Score: Player ${playerScore} - Computer ${computerScore}`);
    }

    // Announce the final result after 5 rounds
    if (playerScore > computerScore) {
      console.log("Congratulations! You won the game!");
    } else if (playerScore < computerScore) {
      console.log("Sorry, the computer won the game.");
    } else {
      console.log("It's a tie overall!");
    }

    // Ask if the player wants to play again
    let replay = prompt("Do you want to play again? Type 'yes' to replay, or anything else to quit.")
    if (replay !== null && replay.trim().toLowerCase() === "yes") {
      playAgain = true
    } else {
      playAgain = false
      console.log("Thanks for playing!");
    }
  }
}

game();