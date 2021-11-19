import {useState} from 'react'


function useGameState() {
    const choices = ['rock', 'paper', 'scissors']
    const [gameState, setGameState] = useState({
        gameCount: 0,
        winHistory: 0,
        playerChoice: null,
        computerChoice: null,
        winner: null,
    })


    function calculateWinner(playerChoice, computerChoice) {
        
        let winner

        switch(playerChoice + computerChoice) {
            case 'rockrock':
            case 'scissorsscissors':
            case 'paperpaper':
                winner = `It's a draw!`
            break;
            case 'rockscissors':
            case 'scissorspaper':
            case 'paperrock':
                winner = 'You win!' 
                break;
            default: 
                winner = 'You lose.'
                break;
        } 

        console.log(gameState)
        setGameState({
            ...gameState,
            playerChoice,
            gameCount: gameState.gameCount + 1,
            computerChoice,
            winner: winner
            // TODO: Add history - if player wins >= half games, winner
        })
    }

    function makeSelection(choice) {
        const computerChoice = choices[Math.floor(Math.random() * choices.length)]
        calculateWinner(choice, computerChoice)
    }

    return {gameState, calculateWinner, setGameState, makeSelection, choices}
}

export default useGameState