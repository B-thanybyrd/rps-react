import React from 'react'
import useGameState from './useGameState';

function Buttons({ choices, handleClick }) {
    return (
        <div className="buttons">
        {choices.map((choice, index) =>
            <button key={index} onClick={() => handleClick(choice)}>
                {choice}
            </button>
        )}
        </div> 
    );
}

function Info({gameState}) {
    return ( 
        <div className="info">
            <h2>Your Move: {gameState.playerChoice}</h2>
            <h2>Computer Move: {gameState.computerChoice}</h2>
            <p>Winner: {gameState.winner}</p>
            <p>Game: {gameState.gameCount}</p>
        </div>
    )
}

function Game() {
    const {makeSelection, gameState, choices} = useGameState()

    return (
        <div className="game-board">
            <Info gameState={gameState}/>
            <Buttons choices={choices} handleClick={makeSelection} />
        </div>
    )

}

export default Game