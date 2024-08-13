function getComputerChoice () {
    let computerPick = Math.floor((Math.random() * 3));
    if (computerPick === 0) {
        return 'rock';
    } else if (computerPick === 1) {
            return 'paper';
        } else {
        return 'scissors';
    }
    }

function getHumanChoice() {
    let humanPick = prompt("Rock, Paper, Scissors, GO!");
    humanPick = humanPick.toLowerCase();
    if (humanPick === 'rock' || humanPick === 'paper' || humanPick === 'scissors') {
    return humanPick;
    } else {
    return getHumanChoice();
    }
        }

function roundWinner (pickOne, pickTwo) {
    switch (pickOne) {
    case "rock" :
        if (pickTwo === "rock") {
            return 0;
        } else if (pickTwo === "paper") {
            return 2;
        } else {
            return 1;
        }
        break;
    case "paper" :
        if (pickTwo === "rock") {
            return 1;
        } else if (pickTwo === "paper") {
            return 0;
        } else {
            return 2;
        }
        break;
    case "scissors" :
        if (pickTwo === "rock") {
            return 2;
        } else if (pickTwo === "paper") {
            return 1;
        } else {
            return 0;
        }
        break;
     default :
        return NaN; 
        break;
    }
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanSelection, computerSelection) {
    
    humanSelection = getHumanChoice();
    computerSelection = getComputerChoice();
    
    console.log(
`Human picks: ${humanSelection}
Computer picks: ${computerSelection}`
    );

    let winner = roundWinner(humanSelection, computerSelection);
    switch (winner) {
    case 0: 
        console.log("Tie! Let's go again");
        break;  
    case 1:
        console.log("You win! " + humanSelection + " beats " + computerSelection);
        humanScore++;
        break;  
    case 2:
        console.log("You lose! " + computerSelection + " beats " + humanSelection);
        computerScore++;
        break;
    }
}



function playGame() {
    humanScore = 0;
    computerScore = 0;
    console.log("Here we go folks! Round 1");
    
    playRound();
    console.log
    (`
Round 1:
Human score:  ${humanScore}
Computer score: ${computerScore}
`)

console.log("Round 2");
    
    playRound();
    console.log
    (`
Round 2:
Human score:  ${humanScore}
Computer score: ${computerScore}
`)

console.log("Round 3. Two more to go!");
    
    playRound();
    console.log
    (`
Round 3:
Human score:  ${humanScore}
Computer score: ${computerScore}
`)

console.log("Round 4. Nailbitter...");
    
    playRound();
    console.log
    (`
Round 4:
Human score:  ${humanScore}
Computer score: ${computerScore}
`)

console.log("Here it is.. The final Round");
    
    playRound();
    console.log
    (`
Game over folks.
Human score:  ${humanScore}
Computer score: ${computerScore}
`)

}




