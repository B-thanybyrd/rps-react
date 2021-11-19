import React from 'react'

const choices = ['rock', 'paper', 'scissors']

class Game extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            gameCount: 0,
            winHistory: 0,
            playerChoice: null,
            computerChoice: null,
            winner: null
        };
    }

    calculateWinner() {
        let gameCount = this.state.gameCount;
        gameCount++
        let winHistory = this.state.winHistory;
        const playerChoice = this.state.playerChoice;
        const computerChoice = this.state.computerChoice;
        
        let winner;

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

        this.setState({
            gameCount: gameCount,
            winner: winner
            // TODO: Add history - if player wins >= half games, winner
        });
    }
    
    handleClick(choice) {
        this.setState({
            playerChoice: choice,
            computerChoice: choices[Math.floor(Math.random() * choices.length)],
        });
        this.calculateWinner(this.playerChoice, this.computerChoice)
    }

    render() {
        return (
            <div className="game-board">
                <div className="info">
                    <h2>Your Move: {this.state.playerChoice}</h2>
                    <h2>Computer Move: {this.state.computerChoice}</h2>
                    <p>Winner: {this.state.winner}</p>
                    <p>Game: {this.state.gameCount}</p>
                </div>
                <div className="buttons">
                    {choices.map((choice, index) =>
                        <button key={index} onClick={() => this.handleClick(choice)}>
                            {choice}
                        </button>
                    )}
                </div> 
            </div>
        );
    }
}

export default Game