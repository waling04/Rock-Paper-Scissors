const RockButton = document.querySelector('.RockButton');
const PaperButton = document.querySelector('.PaperButton');
const ScissorsButton = document.querySelector('.ScissorsButton');
const Result = document.querySelector('.Result');
const finalResult = document.querySelector('.finalResult');

let playerScore = 0;
let computerScore = 0;
let roundsPlayed = 0;


function getComputerChoice() {
    let randomNumber = Math.floor(Math.random()*3)+1;
    if (randomNumber === 1) {
        return 'Rock';
    }
    else if (randomNumber === 2) {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}
console.log(getComputerChoice());


function getPlayerChoice(playerSelection) {
    if (playerSelection === 'Rock') {
        return 'Rock';
    }
    else if (playerSelection === 'Paper') {
        return 'Paper';
    }
    else {
        return 'Scissors';
    }
}


function playRound(playerSelection, computerSelection) {
        roundsPlayed++;
    if (computerSelection === playerSelection) {
        Result.textContent = 'It\'s a tie!';
    }
    else if (computerSelection === 'Rock' && playerSelection === 'Paper') {
        playerScore++;
        document.querySelector('.playerScore').textContent = 'Player Score = ' + playerScore;
        Result.textContent = 'You Win! Paper beats Rock';
    }
    else if (computerSelection === 'Paper' && playerSelection === 'Rock') {
        computerScore++;
        document.querySelector('.computerScore').textContent = 'Computer Score = ' + computerScore;
        Result.textContent = 'You Lose! Paper beats Rock';
    }
    else if (computerSelection === 'Paper' && playerSelection === 'Scissors') {
        playerScore++;
        document.querySelector('.playerScore').textContent = 'Player Score = ' + playerScore;
        Result.textContent = 'You Win! Scissors beats Paper';
    }
    else if (computerSelection === 'Scissors' && playerSelection === 'Paper') {
        computerScore++;
        document.querySelector('.computerScore').textContent = 'Computer Score = ' + computerScore;
        Result.textContent = 'You Lose! Scissors beats Paper';
    }
    else if (computerSelection === 'Rock' && playerSelection === 'Scissors') {
        computerScore++;
        document.querySelector('.computerScore').textContent = 'Computer Score = ' + computerScore;
        Result.textContent = 'You Lose! Rock beats Scissors';
    }
    else {
        playerScore++;
        document.querySelector('.playerScore').textContent = 'Player Score = ' + playerScore;
        Result.textContent = 'You Win! Rock beats Scissors';
    }
    if  (playerScore === 3){
        game();
    }
    else if (computerScore === 3) {
        game();
    }
  }

    function game() {
        if (playerScore === 3) {
            finalResult.textContent = 'You won the Game';
            Result.textContent = 'Game Over!';
        }
        else if (computerScore === 3) {
            finalResult.textContent = 'You lose the Game';
            Result.textContent = 'Game Over!';
        }
        else {
            return;
        }
        RockButton.disabled = true;
        PaperButton.disabled = true;
        ScissorsButton.disabled = true;
    }
    

  RockButton.addEventListener('click',function(){
    const playerSelection = getPlayerChoice('Rock');
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  })

  PaperButton.addEventListener('click',function(){
    const playerSelection = getPlayerChoice('Paper');
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  })

  ScissorsButton.addEventListener('click',function(){
    const playerSelection = getPlayerChoice('Scissors');
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);
  })
