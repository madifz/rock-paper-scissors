let computerSelection = "";
let playerSelection = "";

game();

function computerPlay() {
    let compStr = "";
    let randomNum = Math.floor((Math.random() * 3) + 1); 
    if (randomNum === 1) {
        compStr = "rock";
    } else if (randomNum === 2) {
        compStr = "paper";
    } else compStr = "scissors";
    return compStr;
}

function playRound() {
    computerSelection = computerPlay();
    playerSelection = prompt("Please choose: Rock, Paper or Scissors:").toLowerCase();
    //while ((playerSelection !== "rock") || (playerSelection !== "paper") || (playerSelection !== "scissors")) {
        //alert("Wrong input, please try again!");
        //playerSelection = prompt("Please choose: Rock, Paper or Scissor:").toLowerCase();
    //};

    if (playerSelection === "rock" && computerSelection === "rock" ||
    playerSelection === "paper" && computerSelection === "paper" || 
    playerSelection === "scissors" && computerSelection === "scissors") {
        console.log(`It's a draw! You and the computer chose ${playerSelection}!`);
    } else if (playerSelection === "rock" && computerSelection === "scissors" ||
    playerSelection === "paper" && computerSelection === "rock" || 
    playerSelection === "scissors" && computerSelection === "paper") {
        return console.log(`You win! ${playerSelection} beats ${computerSelection}!`);
    } else console.log(`You lose! ${computerSelection} beats ${playerSelection}!`);
}

function game() {
    let gameRounds = 5;
    let playerWins = 0;
    let computerWins = 0;
    for (let i = 1; i <= gameRounds; i++) {
        playRound();
        if (playerSelection === "rock" && computerSelection === "rock" ||
        playerSelection === "paper" && computerSelection === "paper" || 
        playerSelection === "scissors" && computerSelection === "scissors") {
            console.log(`No winner, it's a draw! Round ${i} tie!`);
        } else if (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" || 
        playerSelection === "scissors" && computerSelection === "paper") {
            playerWins ++;
            console.log(`You win round ${i}!`);
        } else {
            computerWins ++;
            console.log(`You lose round ${i}`);
        }
    }

    if (computerWins > playerWins) {
        console.log(`Computer beats you with ${computerWins} wins to ${playerWins}, this game of ${gameRounds} rounds ends with computer's win!`);
    } else if (computerWins < playerWins) {
        console.log(`You beat computer with ${playerWins} wins to ${computerWins}, this game of ${gameRounds} rounds ends with your win!`);
    } else console.log(`Both you and computer has ${playerWins} wins, this game of ${gameRounds} rounds is a draw!`);
}