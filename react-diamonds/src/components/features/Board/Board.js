import React from 'react';
import { useState } from 'react';
import ScoreBoard from '../ScoreBoard/ScoreBoard';
import Bean from '../Bean/Bean';


const Board = ({ grid, setGrid }) => {
  const [scoreDisplay, setScoreDisplay] = useState(0)
  const [isDragging, setIsDragging] = useState(false);

  const handleDrag = (event, i, j) => {
    // Zapamiętaj indeksy (i, j) w celu identyfikacji przeciąganego klocka
    event.dataTransfer.setData('row', i);
    event.dataTransfer.setData('col', j);
   // event.dataTransfer.setDragImage(new Image(), 0, 0);
    setIsDragging(true);
  };

  const handleDrop = (event, targetRow, targetCol) => {
    // Pobierz indeksy przeciąganego elementu
    const draggedRow = parseInt(event.dataTransfer.getData('row'));
    const draggedCol = parseInt(event.dataTransfer.getData('col'));

    // Sprawdź, czy przeciągnięcie jest dozwolone (do najbliższego klocka w tym samym rzędzie lub kolumnie)
    const rowDiff = Math.abs(draggedRow - targetRow);
    const colDiff = Math.abs(draggedCol - targetCol);
    if ((rowDiff === 1 && colDiff === 0) || (colDiff === 1 && rowDiff === 0)) {
      // Skopiuj stan planszy, żeby go zaktualizować
      let newGrid = [...grid];

      // Zamień przeciągany klocek z celem
      [newGrid[draggedRow][draggedCol], newGrid[targetRow][targetCol]] = [newGrid[targetRow][targetCol], newGrid[draggedRow][draggedCol]];

      // Zaktualizuj stan
      setGrid(newGrid);

      // Wywołaj logikę sprawdzającą dopasowania (jeżeli istnieje)
      checkMatchingFor3(grid, setGrid);
      checkMatchingFor4(grid, setGrid);
    }
    setIsDragging(false);
  };
  const fillZeros = (grid, col) => {
    for (let row = 0; row < grid.length; row++) {
      if (grid[row][col] === 0) {
        for (let aboveRow = row; aboveRow >= 0; aboveRow--) {
          grid[aboveRow][col] = aboveRow === 0 ? Math.floor(Math.random() * 4) + 1 : grid[aboveRow - 1][col];
        }
      }
    }
  };

  const checkMatchingFor3 = (grid, setGrid) => {
    let newGrid = [...grid];
    let hasMatch = false;
    console.log("Grid:", grid);
    // Sprawdzenie dopasowań (jak wcześniej)
    for (let row = 0; row < newGrid.length; row++) {
      for (let col = 0; col < newGrid[row].length - 2; col++) {
        if (newGrid[row][col] === newGrid[row][col + 1] && newGrid[row][col] === newGrid[row][col + 2] && newGrid[row][col] !== 0) {
          hasMatch = true;
          newGrid[row][col] = 0;
          newGrid[row][col + 1] = 0;
          newGrid[row][col + 2] = 0;
        }
      }
    }

    for (let col = 0; col < newGrid[0].length; col++) {
      for (let row = 0; row < newGrid.length - 2; row++) {
        if (newGrid[row][col] === newGrid[row + 1][col] && newGrid[row][col] === newGrid[row + 2][col] && newGrid[row][col] !== 0) {
          hasMatch = true;
          newGrid[row][col] = 0;
          newGrid[row + 1][col] = 0;
          newGrid[row + 2][col] = 0;
        }
      }
    }

    // Opadanie klocków
    for (let col = 0; col < newGrid[0].length; col++) {
      fillZeros(newGrid, col);
    }

    if (hasMatch) {
      setScoreDisplay((score) => score + 3)
      setGrid(newGrid);
      checkMatchingFor3(newGrid, setGrid);
      checkMatchingFor4(newGrid, setGrid);
    }
  };

  const checkMatchingFor4 = (grid, setGrid) => {
    let newGrid = [...grid];
    let hasMatch = false;

    for (let row = 0; row < newGrid.length; row++) {
      for (let col = 0; col < newGrid[row].length - 3; col++) {
        if (newGrid[row][col] === newGrid[row][col + 1] &&
            newGrid[row][col] === newGrid[row][col + 2] &&
            newGrid[row][col] === newGrid[row][col + 3] &&
            newGrid[row][col] !== 0) {
          hasMatch = true;
          newGrid[row][col] = 0;
          newGrid[row][col + 1] = 0;
          newGrid[row][col + 2] = 0;
          newGrid[row][col + 3] = 0;
        }
      }
    }

    for (let col = 0; col < newGrid[0].length; col++) {
      for (let row = 0; row < newGrid.length - 3; row++) {
        if (newGrid[row][col] === newGrid[row + 1][col] &&
            newGrid[row][col] === newGrid[row + 2][col] &&
            newGrid[row][col] === newGrid[row + 3][col] &&
            newGrid[row][col] !== 0) {
          hasMatch = true;
          newGrid[row][col] = 0;
          newGrid[row + 1][col] = 0;
          newGrid[row + 2][col] = 0;
          newGrid[row + 3][col] = 0;
        }
      }
    }

    for (let col = 0; col < newGrid[0].length; col++) {
      fillZeros(newGrid, col);
    }

    if (hasMatch) {
      setScoreDisplay((score) => score + 4)
      setGrid(newGrid);
      // Wywołaj ponownie, żeby znaleźć nowe dopasowania (kaskady)
      checkMatchingFor4(newGrid, setGrid);
    }
  };
  const handleDragEnd = () => {
    setIsDragging(false);
  };
    //useEffect(() => {
      // After each render, check for matching tiles
//checkMatching();
  //  }, [grid]);

  return (
    <div className="flex flex-col items-center justify-center h-screen">
  {grid.map((row, i) => (
    <div className="flex" key={i}>
      {row.map((cell, j) => (
        <div
          draggable
          onDragOver={(e) => e.preventDefault()}
          onDragStart={(e) => handleDrag(e, i, j)}
          onDragEnd={handleDragEnd}
          onDrop={(e) => handleDrop(e, i, j)}
          className={`w-16 h-16 ${getColor(cell)} border ${isDragging ? 'border-transparent' : 'border-gray-300'}`}
          key={j}
          style={{ transition: 'all 4s ease-in-out' }}
        >
             <Bean
              color={getColor(cell)}
            />
        </div>
      ))}
    </div>
  ))}
  <ScoreBoard score={scoreDisplay}/>
</div>
  );
};

const getColor = (cell) => {
  switch (cell) {
    case 1:
      return '#F87171'; // czerwony
    case 2:
      return '#60A5FA'; // niebieski
    case 3:
      return '#FBBF24'; // żółty
    case 4:
      return '#34D399'; // zielony
    default:
      return '#D1D5DB'; // szary
  }
};

export default Board;