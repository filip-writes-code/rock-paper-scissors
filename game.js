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

    //cold console prompt
// function getHumanChoice() {
//     let humanPick = prompt("Rock, Paper, Scissors, GO!");
//     humanPick = humanPick.toLowerCase();
//     if (humanPick === 'rock' || humanPick === 'paper' || humanPick === 'scissors') {
//     return humanPick;
//     } else {
//     return getHumanChoice();
//     }
//         }

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
let roundCounter = 0;

const gameInfo = document.querySelector(".gameInfo");
const roundText = document.querySelector(".round");
const picksText = document.querySelector(".picks");
const resultText = document.querySelector(".result");
const scoreText = document.querySelector(".score");
const gameOverText = document.querySelector(".gameOver");

function showResetButton() {
    const resetButton = document.createElement('button');
    resetButton.id = "resetButton";
    resetButton.textContent = "Play Again?";
    gameInfo.appendChild(resetButton);
}

function resetGame () {
    humanScore = 0;
    computerScore = 0;
    roundCounter = 0;
    roundText.textContent = '';
    picksText.textContent = "";
    resultText.textContent = "Pick a hand...";
    scoreText.textContent = "";
    gameOverText.textContent = "";
    document.querySelectorAll('button').forEach(btn => btn.disabled = false);

}

function playRound(humanSelection) {
    roundCounter++;
    const computerSelection = getComputerChoice();
    let winner = roundWinner(humanSelection, computerSelection);
    
    switch (winner) {
    case 0: 
        picksText.textContent = "You picked: " + humanSelection + "\n" + "AI picked: " + computerSelection;
        resultText.textContent = "Tie! Let's go again";
        break;  
    case 1:
        picksText.textContent = "You picked: " + humanSelection + "\n" + "AI picked: " + computerSelection;
        resultText.textContent = "You win!";
        humanScore++;
        break;  
    case 2:
        picksText.textContent = "You picked: " + humanSelection + "\n" + "AI picked: " + computerSelection;
        resultText.textContent = "You lose!";
        computerScore++;
        break;
    }
    roundText.textContent = "Round " + roundCounter;
    scoreText.textContent = "Human Score: " + humanScore + "\n" + "AI Score: " + computerScore;

    if (humanScore === 5) {
        picksText.textContent = "";
        resultText.textContent = "";
        gameOverText.textContent = "You win the game!";
        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
        showResetButton();
    } else if (computerScore === 5){ 
        picksText.textContent = "";
        resultText.textContent = "";
        gameOverText.textContent = "You lose the game!";
        document.querySelectorAll('button').forEach(btn => btn.disabled = true);
        showResetButton();
    }
}



//old function
// function playGame() {
//     humanScore = 0;
//     computerScore = 0;
//     console.log("Here we go folks! Round 1");
    
//     playRound();
//     console.log
//     (`
// Round 1:
// Human score:  ${humanScore}
// Computer score: ${computerScore}
// `)

// console.log("Round 2");
    
//     playRound();
//     console.log
//     (`
// Round 2:
// Human score:  ${humanScore}
// Computer score: ${computerScore}
// `)

// console.log("Round 3. Two more to go!");
    
//     playRound();
//     console.log
//     (`
// Round 3:
// Human score:  ${humanScore}
// Computer score: ${computerScore}
// `)

// console.log("Round 4. Nailbitter...");
    
//     playRound();
//     console.log
//     (`
// Round 4:
// Human score:  ${humanScore}
// Computer score: ${computerScore}
// `)

// console.log("Here it is.. The final Round");
    
//     playRound();
//     console.log
//     (`
// Game over folks.
// Human score:  ${humanScore}
// Computer score: ${computerScore}
// `)
// }


//old stuff
// function writeResult(result) {
//     const resultOutput = document.querySelector('.results');
//     resultOutput.textContent = result;
// }

//event listener for the buttons
const btn = document.querySelector('.container');
btn.addEventListener('click', (e) => {
    if (e.target.nodeName === 'BUTTON') {
        const pick = e.target.id;
    playRound(pick);
    }
});

//event listener for reset button
const reset = document.querySelector('.gameInfo');
reset.addEventListener('click', (e) => {
    if (e.target.nodeName === "BUTTON") {
        resetGame();
        e.target.remove();
    }
})


