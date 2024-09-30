import React, { useState } from 'react';
import Board from './Board';
import Dice from './Dice';
import Player from './Player';
export const snakes = {
  16: 6,
  47: 26,
  49: 11,
  56: 53,
  62: 19,
  64: 60,
  87: 24,
  93: 73,
  95: 75,
  98: 78,
};

export const ladders = {
  1: 38,
  4: 14,
  9: 31,
  21: 42,
  28: 84,
  36: 44,
  51: 67,
  71: 91,
  80: 100,
};

const Game = () => {
  const [positions, setPositions] = useState([0, 0, 0, 0, 0]); // up to 5 players for two plays [0.0]
  const [currentPlayer, setCurrentPlayer] = useState(0);

  const handleRoll = (diceValue) => {
    const newPositions = [...positions];
    let playerPos = newPositions[currentPlayer] + diceValue;

    if (playerPos > 100) {
      playerPos = newPositions[currentPlayer]; // Can't exceed 100
    } else if (snakes[playerPos]) {
      playerPos = snakes[playerPos]; // Move down due to snake
    } else if (ladders[playerPos]) {
      playerPos = ladders[playerPos]; // Move up due to ladder
    }

    newPositions[currentPlayer] = playerPos;
    setPositions(newPositions);

    if (playerPos === 100) {
      alert(`Player ${currentPlayer + 1} wins!`);
    } else if (diceValue !== 6) {
      setCurrentPlayer((currentPlayer + 1) % positions.length);
    }
  };

  return (
    <div>
      <Board />
      <Dice onRoll={handleRoll} />
      {positions.map((position, index) => (
        <Player key={index} player={index + 1} position={position} />
      ))}
    </div>
  );
};

export default Game;
