let playerScoreDisplay = document.querySelector('#player-score')
let computerScoreDisplay = document.querySelector('#computer-score')
let drawScoreDisplay = document.querySelector('#draw-score')
let winnerDisplay = document.querySelector('#winner')

let playerScore = 0
let computerScore = 0
let draw = 0
let playerChoice = ""

const computerChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    let arrIndex = Math.floor((Math.random() * 3))
    console.log(arr[arrIndex])
    return arr[arrIndex]
};

const playRound = (playerChoice, computerChoice) => {

    if (playerChoice === computerChoice) {
        draw++
        drawScoreDisplay.textContent = draw
        return "Draw!"
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore
        return "Player Wins!"
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore
        return "Player Wins!"
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        playerScoreDisplay.textContent = playerScore
        return "Player Wins!"
    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore
        return "Computer Wins!"
    }
}

const game = (playerChoice) => {
    const currentComputerChoice = computerChoice();
    const result = playRound(playerChoice, currentComputerChoice)
    if (playerScore === 5) {
        return winnerDisplay.textContent = "You won!"
    } else if (computerScore === 5) {
        return winnerDisplay.textContent = "Computer won!"
    }
    console.log('Result:', result)
    console.log('Player score:', playerScore, 'Computer score:', computerScore, 'Draw:', draw)
}


document.querySelector('#rock').addEventListener('click', () => {
    game("rock")
})
document.querySelector('#paper').addEventListener('click', () => {
    game("paper")
})
document.querySelector('#scissors').addEventListener('click', () => {
    game("scissors")
})



// const playGame = () => {
//     for (let i = 1; i<=5; i++) {
//         // const playerChoice = prompt("Enter your choice (rock, paper, scissors):");
//         game(playerChoice)
//     }
// }

// playGame()
