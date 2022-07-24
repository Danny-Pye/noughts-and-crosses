import React, {useState, useEffect} from 'react';
import './App.css';
import Cell from './components/Cell'


function App() {
  const [turn, setTurn] = useState('X');
  const [board, setBoard] = useState(new Array(9).fill(null));

  function checkWhoWon(newBoard) {
    const winningCombinations = [
        [0,1,2],
        [3,4,5],
        [6,7,8],

        [0,3,6],
        [1,4,7],
        [2,5,8],

        [0,4,8],
        [2,4,6]
    ];

    for (let combo of winningCombinations) {
      if (newBoard[combo[0]] === 'X' && newBoard[combo[1]] === 'X' && newBoard[combo[2]] === 'X'){
        setTimeout(() => {
          alert("X Won!");
          setBoard(new Array(9).fill(null));
          setTurn('X');
        }, 100);
      } else if (newBoard[combo[0]] === 'O' && newBoard[combo[1]] === 'O' && newBoard[combo[2]] === 'O'){
        setTimeout(() => {
          alert("O Won!");
          setBoard(new Array(9).fill(null));
          setTurn('X');
        }, 100);
      }
    }
  }

  useEffect(() => {
    if (turn === 'X') {
      return;
    }
    if (turn === 'O') {
      setTimeout(() => {
        const newBoard = [];
        board.forEach((cell, idx) => {
          if (cell === null) {
            newBoard.push(idx);
          }
        })
        console.log(newBoard);
        newBoard.sort((a, b) => Math.random() - 0.5);
        const choice = newBoard[0];
        clickHandler(choice);
      }, 1000);
    }
  }, [board]);

  function  clickHandler(position) {
    const newBoard = [...board];
    if (newBoard[position] !== null) {
      alert("Already taken!");
    }
    if (turn === 'X'){
      newBoard[position] = 'X';
    } else if (turn === 'O') {
      newBoard[position] = 'O'
    }
    setTurn(turn === 'X' ? 'O' : 'X');
    checkWhoWon(newBoard);
    setBoard(newBoard);
  }

  return (
    <div className="App">
      <h2 style={{position: 'absolute', left: '47%' }}>{turn}'s Turn</h2>
      <table>
        <tbody>
          <tr>
            <Cell position={0} clickHandler={clickHandler} board={board} />
            <Cell position={1} clickHandler={clickHandler} board={board} />
            <Cell position={2} clickHandler={clickHandler} board={board}/>
          </tr>
          <tr>
            <Cell position={3} clickHandler={clickHandler} board={board}/>
            <Cell position={4} clickHandler={clickHandler} board={board}/>
            <Cell position={5} clickHandler={clickHandler} board={board}/>
          </tr>
          <tr>
            <Cell position={6} clickHandler={clickHandler} board={board}/>
            <Cell position={7} clickHandler={clickHandler} board={board}/>
            <Cell position={8} clickHandler={clickHandler} board={board}/>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default App;
