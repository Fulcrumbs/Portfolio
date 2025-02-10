import './TicTacToe.css';
import { useState } from 'react';

function Footer(){
  return(
    <footer>
      <p>All code displayed was taught by <a href='https://www.freecodecamp.org/learn/2022/responsive-web-design/' target='_blank' rel='noreferrer'> React</a>'s Tic-Tac-Toe tutorial</p>
    </footer>
  )
}

function declareWinner(squares){
  const lines = [
    [0,1,2],// ---
    [3,4,5],// ---
    [6,7,8],// ---
    [0,3,6],// | 
    [1,4,7],//  |
    [2,5,8],//   |
    [0,4,8],//  \
    [2,4,6] //  /
  ];

  for (let i = 0; i < lines.length; i++){
    const [a, b, c] = lines[i];
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]){
      return squares[a];
    }
  }
  return null;
}

function Square({value, onSquareClick}) {
    return(
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
    );
}

function Board({xIsNext, squares, onPlay}) {
  const winner = declareWinner(squares);
  let status;

  function handleClick(i) {
    const nextSquares = squares.slice();
    if (squares[i] || declareWinner(squares)) {
      return;
    }

    if (xIsNext) {
      nextSquares[i] = "X";
    } else {
      nextSquares[i] = "O";
    }
    onPlay(nextSquares)
  }

  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "0");
  }

  return (
    <>
      <div className="status">{status}</div>
      <div className="board">
        <div className="boardRow">
          <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
          <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
          <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
        </div>

        <div className="boardRow">
          <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
          <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
          <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
        </div>

        <div className="boardRow">
          <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
          <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
          <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
        </div>
      </div>
    </>
  );
}

function Game(){  
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  const currentSquares = history[currentMove];
  const xIsNext = currentMove % 2 === 0;
  const moves = history.map((element, index) => {
    let description;
    if(index > 0){
      description = "Go to turn #" + index;
    } else{
      description = "Go to start";
    }
    return(
      <li key={index}>
        <button onClick={() => jumpTo(index)}>{description}</button>
      </li>
    )
    }
  );

  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove+1), nextSquares]
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1)
  }

  function jumpTo(nextMove){
    setCurrentMove(nextMove)
  }
  return(
    <>
    <div className='game'>
      <div className='board'>
        <Board xIsNext={xIsNext} onPlay={handlePlay} squares={currentSquares}/>
      </div>
      <div className='Game-info'>
        <ol>{moves}</ol>
      </div>
    </div>
    <div>
      <Footer/>
    </div>
    </>
  )
}
export default Game;