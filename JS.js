let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  let number = getRandomInt(3);
  switch (number) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function playRound(e) {
  const computerSelection = getComputerChoice();
  let playerSelection = e.target.dataset.value;
  let outcome = checkWinner(playerSelection, computerSelection);
  updateScore(outcome);
  console.log(
    typeof playerSelection + typeof computerSelection + typeof outcome + outcome
  );
  if (outcome === "draw") {
    roundOutcome.textContent = "It's a draw";
  } else if (outcome === "lose") {
    roundOutcome.textContent =
      "You Lose!" + ` ${computerSelection} beats ${playerSelection}`;
  } else {
    roundOutcome.textContent =
      "You Win!" + ` ${playerSelection} beats ${computerSelection}`;
  }
}

function checkWinner(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "draw";
  } else if (
    (playerSelection === "rock" && computerSelection === "paper") ||
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors")
  ) {
    return "lose";
  }
  return "win";
}

function updateScore(outcome) {
  if (outcome === "win") {
    playerScore += 1;
  } else if (outcome === "lose") {
    computerScore += 1;
  }
  if (playerScore === 5) {
    runningScore.textContent = "Player wins the game!";
    playerScore = 0;
    computerScore = 0;
  } else if (computerScore === 5) {
    runningScore.textContent = "Computer wins the game!";
    playerScore = 0;
    computerScore = 0;
  }
  runningScore.textContent = `Player: ${playerScore} Computer: ${computerScore}`;
}

function isValid(e) {
  console.log(e.target.dataset.value);
  console.log(e.target);
  console.log(e);
}

const btns = document.querySelectorAll("button");
btns.forEach((btn) => btn.addEventListener("click", playRound));
const roundOutcome = document.body.appendChild(document.createElement("div"));
const runningScore = document.body.appendChild(document.createElement("div"));
