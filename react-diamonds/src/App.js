import React, { useState } from 'react';
import Board from './components/features/Board/Board';
import { useEffect } from 'react';

function App() {


  function generateRandomGrid(rows, cols) {
    const newGrid = [];
    for (let i = 0; i < rows; i++) {
      const row = [];
      for (let j = 0; j < cols; j++) {
        row.push(Math.floor(Math.random() * 4) + 1); // Losowe liczby od 1 do 4
      }
      newGrid.push(row);
    }
    return newGrid;
  }
  const [grid, setGrid] = useState(generateRandomGrid(8, 8));
console.log(grid);
  return (

    <div className="App flex flex-col items-center ">
      <h1 className="text-center">Diamenty !!!</h1>
    <Board grid={grid} setGrid={setGrid} />
  </div>
  );
}

export default App;