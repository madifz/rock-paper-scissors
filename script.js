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

function playRound(playerSelection, computerSelection) {
    let computerSelection = computerPlay();
    let playerSelection = prompt("Please choose: Rock, Paper or Scissor:").toLowerCase();
    if (playerSelection !== "rock" || "paper" || "scissors") {
        alert("Wrong input, please try again!");
        playerSelection = prompt("Please choose: Rock, Paper or Scissor:").toLowerCase();
    } else break;
    //return `You Lose! ${computerSelection} beats ${playerSelection}`;
}