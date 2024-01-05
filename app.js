let playerScore = 0
let computerScore = 0
let draw = 0

const computerChoice = () => {
    let arr = ["rock", "paper", "scissors"];
    let arrIndex = Math.floor((Math.random() * 3))
    console.log(arr[arrIndex])
    return arr[arrIndex]
};

const playRound = (playerChoice, computerChoice) => {
    let playerChoiceLowerCase = playerChoice.toLowerCase()

    if (playerChoiceLowerCase === computerChoice) {
        draw++
        return "Draw!"
    } else if (playerChoice === "rock" && computerChoice === "scissors") {
        playerScore++;
        return "Player Wins!"
    } else if (playerChoice === "paper" && computerChoice === "rock") {
        playerScore++;
        return "Player Wins!"
    } else if (playerChoice === "scissors" && computerChoice === "paper") {
        playerScore++;
        return "Player Wins!"
    } else {
        computerScore++;
        return "Computer Wins!"
    }
};

const game = (playerChoice) => {
    const currentComputerChoice = computerChoice();
    const result = playRound(playerChoice, currentComputerChoice)
    console.log('Result:', result)
    console.log('Player score:', playerScore, 'Computer score:', computerScore, 'Draw:', draw)
}



const playGame = () => {
    for (let i = 1; i<=5; i++) {
        const playerChoice = prompt("Enter your choice (rock, paper, scissors):");
        game(playerChoice)
    }
}

playGame()