// rock paper scissors game

const computerPlay = () => {
  const odds = ["rock", "paper", "scissors"];
  return odds[Math.floor(Math.random() * 3)];
}

let playerPrompt = prompt("Choose between rock, paper, and scissors").toLowerCase();


while (playerPrompt !== "rock" && playerPrompt !== "paper" && playerPrompt !== "scissors") {
  alert("You must type rock, paper, or scissors");
  playerPrompt = prompt("Choose between rock, paper, and scissors").toLowerCase();
}

const winner = (computer, player) => {
  computer = computer.toLowerCase();
  player = player.toLowerCase();

  if (computer === player) {
    return "It's a tie!";
  }

  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "You win! " + player + " beats " + computer;
  } else {
    return "You lose! " + computer + " beats " + player;
  }
}

  console.log(`You chose ${playerPrompt}`);
  const computerChoice = computerPlay();
  console.log(`Computer chose ${computerChoice}`);

  const result = winner(computerChoice, playerPrompt);
  console.log(result);