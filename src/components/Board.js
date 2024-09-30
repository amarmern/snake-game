import React from 'react';

const Board = () => {
  const cells = [];
  for (let i = 1; i <= 100; i++) {
    cells.push(
      <div key={i} className="cell">
        {i}
      </div>
    );
  }

  return <div className="board">{cells}</div>;
};

export default Board;
