// Function to randomly select rock, paper, or scissors for the computer
const computerPlay = () => {
  const choices = ["rock", "paper", "scissors"]
  return choices[Math.floor(Math.random() * 3)]
}

// Function to play a single round of Rock, Paper, Scissors
const playRound = (playerSelection, computerSelection) => {
  playerSelection = playerSelection.toLowerCase()
  computerSelection = computerSelection.toLowerCase()

  if (playerSelection === computerSelection) {
    return `It's a tie! Both chose ${playerSelection}`
  }

  if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    return `You win! ${
      playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    } beats ${computerSelection}`
  } else {
    return `You lose! ${
      computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1)
    } beats ${playerSelection}`
  }
}

// Main game function to play 5 rounds and keep score
const game = () => {
  let playerScore = 0
  let computerScore = 0
  const totalRounds = 5

  for (let round = 1; round <= totalRounds; round++) {
    let playerPrompt = ""

    // Ensure the player provides a valid input
    do {
      playerPrompt = prompt(
        "Choose between rock, paper, and scissors"
      ).toLowerCase()
      if (
        playerPrompt !== "rock" &&
        playerPrompt !== "paper" &&
        playerPrompt !== "scissors"
      ) {
        alert("You must type rock, paper, or scissors")
      }
    } while (
      playerPrompt !== "rock" &&
      playerPrompt !== "paper" &&
      playerPrompt !== "scissors"
    )

    const computerChoice = computerPlay()

    console.log(`Round ${round}:`)
    console.log(`You chose ${playerPrompt}`)
    console.log(`Computer chose ${computerChoice}`)

    const result = playRound(playerPrompt, computerChoice)
    console.log(result)

    if (result.startsWith("You win")) {
      playerScore++
    } else if (result.startsWith("You lose")) {
      computerScore++
    }

    console.log(`Score: Player ${playerScore} - Computer ${computerScore}`)
  }

  // Announce the final result after 5 rounds
  if (playerScore > computerScore) {
    console.log("Congratulations! You won the game!")
  } else if (playerScore < computerScore) {
    console.log("Sorry, the computer won the game.")
  } else {
    console.log("It's a tie overall!")
  }
}

game()