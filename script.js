const RockButton = document.querySelector(".RockButton");
const PaperButton = document.querySelector(".PaperButton");
const ScissorsButton = document.querySelector(".ScissorsButton");
const Result = document.querySelector(".Result");
const playAgain = document.querySelector(".playAgain");

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;

function getComputerChoice() {
  let randomNumber = Math.floor(Math.random() * 3) + 1;
  if (randomNumber === 1) {
    return "✊🏻";
  } else if (randomNumber === 2) {
    return "✋🏻";
  } else {
    return "✌🏻";
  }
}
console.log(getComputerChoice());

function getPlayerChoice(playerSelection) {
  if (playerSelection === "✊🏻") {
    return "✊🏻";
  } else if (playerSelection === "✋🏻") {
    return "✋🏻";
  } else {
    return "✌🏻";
  }
}

function playRound(playerSelection, computerSelection) {
  roundsPlayed++;
  if (computerSelection === playerSelection) {
    document.querySelector(".Result").textContent = "It's a tie!";
  } else if (
    (computerSelection === "✊🏻" && playerSelection === "✋🏻") ||
    (computerSelection === "✋🏻" && playerSelection === "✌🏻")
  ) {
    playerScore++;
    document.querySelector(".playerScore").textContent =
      "Player Score = " + playerScore;
    document.querySelector(".Result").textContent = "";
  } else if (
    (computerSelection === "✋🏻" && playerSelection === "✊🏻") ||
    (computerSelection === "✌🏻" && playerSelection === "✋🏻") ||
    (computerSelection === "✊🏻" && playerSelection === "✌🏻")
  ) {
    computerScore++;
    document.querySelector(".computerScore").textContent =
      "Computer Score = " + computerScore;
    document.querySelector(".Result").textContent = "";
  } else {
    playerScore++;
    document.querySelector(".playerScore").textContent =
      "Player Score = " + playerScore;
    document.querySelector(".Result").textContent = "";
  }

  if (playerScore === 5) {
    game();
  } else if (computerScore === 5) {
    game();
  }
}

function game() {
  if (playerScore === 5) {
    Result.textContent = "You won the Game";
  } else if (computerScore === 5) {
    Result.textContent = "You lose the Game";
  } else {
    return;
  }
  RockButton.disabled = true;
  PaperButton.disabled = true;
  ScissorsButton.disabled = true;
}

function replayGame() {
  playerScore = 0;
  computerScore = 0;
  roundsPlayed = 0;
  document.querySelector(".playerScore").textContent = "Player Score " + "";
  document.querySelector(".computerScore").textContent = "Computer Score " + "";
  document.querySelector(".Result").textContent = "";
  RockButton.disabled = false;
  PaperButton.disabled = false;
  ScissorsButton.disabled = false;
}

RockButton.addEventListener("click", function () {
  const playerSelection = getPlayerChoice("✊🏻");
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

PaperButton.addEventListener("click", function () {
  const playerSelection = getPlayerChoice("✋🏻");
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});

ScissorsButton.addEventListener("click", function () {
  const playerSelection = getPlayerChoice("✌🏻");
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
});
playAgain.addEventListener("click", function () {
  replayGame();
});
