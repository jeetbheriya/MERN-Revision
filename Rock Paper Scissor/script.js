
const options = ["rock", "paper", "scissor"];
const player = document.getElementById("playerDisplay");
const computer = document.getElementById("computerDisplay");
const result = document.getElementById("resultDisplay");
const playerScore = document.getElementById("playerScore");
const computerScore = document.getElementById("computerScore");
const reset = document.getElementById("reset-game");
let pScore= 0;
let cScore = 0;

function playGame(playerChoice){
    const computerChoice = options[Math.floor(Math.random() * 3)];
    console.log(computerChoice);

    player.textContent = playerChoice;
    computer.textContent = computerChoice;

    if(playerChoice === "rock"){
        if(playerChoice === computerChoice){
            result.textContent = "It's Tie"
        }else if(computerChoice === 'paper'){
            result.textContent = "Computer Wins !";
            computerScore.textContent = ++cScore;
        }else{
            result.textContent = "Player Wins !";
            playerScore.textContent = ++pScore;
        }
    }
    if(playerChoice === 'paper'){
        if(playerChoice === computerChoice){
            result.textContent = "It's Tie"
        }else if(computerChoice === 'scissor'){
            result.textContent = "Computer Wins !";
            computerScore.textContent = ++cScore;
        }else{
            result.textContent = "Player Wins !";
            playerScore.textContent = ++pScore;
        }
    }
    if(playerChoice === 'scissor'){
        if(playerChoice === computerChoice){
            result.textContent = "It's Tie"
        }else if(computerChoice === 'rock'){
            result.textContent = "Computer Wins !";
            computerScore.textContent = ++cScore;
        }else{
            result.textContent = "Player Wins !";
            playerScore.textContent = ++pScore;
        }
    }
};

function resetGame(){
    playerScore.textContent = 0;
    computerScore.textContent = 0;
}