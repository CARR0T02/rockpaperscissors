let playerSelection;

function getComputerChoice() {
    let choice;
    let number = getRandomInt(3);
    switch(number) {
        case 0:
            return choice = "rock";
        case 1:
            return choice = "paper";
        case 2:
            return choice = "scissors";
    }
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function playRound(playerSelection, computerSelection) {
    let win = "You Win!";
    let lose = "You Lose!";
    let draw;
    playerSelection = playerSelection.toLowerCase();
    if (playerSelection != "paper" && playerSelection != "rock" & playerSelection != "scissors") {
        return "ERROR WRONG INPUT";
    }
    if (playerSelection === computerSelection) {
        return draw = "It's a draw";}
    else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "scissors" && computerSelection === "rock" || playerSelection === "paper" && computerSelection === "scissors" ) {
        return lose = lose + ` ${computerSelection} beats ${playerSelection}`;} 
    else {
        return win = win + ` ${playerSelection} beats ${computerSelection}`;
    }
}

function game() {
    let count = 0;
    for(let i = 0; i < 5; i++) {
        playerSelection =  prompt("What would you like to choose?");
        console.log(playerSelection);
        if(playerSelection == undefined) {
            break;   
       }
        console.log(playRound(playerSelection, getComputerChoice()));
        console.log(++count);
    }
    console.log("end of game");
}