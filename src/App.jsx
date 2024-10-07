import { useState } from 'react'

function Square({value, onSquareClick}) {
  
  return <button className = "square" onClick = {onSquareClick} >{value}</button>
}
function Board({xIsNext, squares, onPlay}){ 

  const [statusMenang, setStatus] = useState('');

  function handleClickSquare(index){
    if (squares[index] || calculateWinner(squares)){
      console.log('sudah ada yang menang');
      return;
    }
    const newSquares = squares.slice();

    // if (xIsNext) {
    //   newSquares[index] = 'X';
    // } else {
    // newSquares[index] = 'O';
    // }

    newSquares[index] = xIsNext ? 'X' : 'O';
    onPlay (newSquares);
    // setSquares(newSquares);
    // setXIsNext(!xIsNext);
    //console.log(squares);
    //console.log(newSquares);

    const winner = calculateWinner(newSquares);
    console.log(newSquares);
    console.log(winner);
    let statusmenang = '';
    if (winner){
      statusmenang = `Pemenangnya adalah ${winner}`;
      setStatus (statusmenang);
    } else {
      statusmenang = `Giliran ${xIsNext ? 'X' : 'O'}`;
      setStatus (statusmenang);
    }
    return statusmenang;
    console.log(statusmenang);
  }

  return (
    <>
    <div className="status">{statusMenang}</div>    
    <div className= "board">
      <Square value = {squares[0]} onSquareClick={() => handleClickSquare(0)}/>
      <Square value = {squares[1]} onSquareClick={() => handleClickSquare(1)}/>
      <Square value = {squares[2]} onSquareClick={() => handleClickSquare(2)}/>
      <Square value = {squares[3]} onSquareClick={() => handleClickSquare(3)}/>
      <Square value = {squares[4]} onSquareClick={() => handleClickSquare(4)}/>
      <Square value = {squares[5]} onSquareClick={() => handleClickSquare(5)}/>
      <Square value = {squares[6]} onSquareClick={() => handleClickSquare(6)}/>
      <Square value = {squares[7]} onSquareClick={() => handleClickSquare(7)}/>
      <Square value = {squares[8]} onSquareClick={() => handleClickSquare(8)}/>
    </div>
    </>
  )
}

export default function Game() {
  const [history, setHistory] = useState([Array(9).fill(null)]);
  const [currentMove, setCurrentMove] = useState(0);
  
  const xIsNext = currentMove % 2 === 0;
  const currentSquare = history[currentMove];

  function jumpTo(nextMove){
    setCurrentMove(nextMove);
    console.log(nextMove);
 
  }

  function handlePlay(nextSquares) {
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
    setCurrentMove(nextHistory.length-1);

  }

  const moves = history.map((squares, move) => {
    let description = '';
    if (move > 0){
      description = `Go to move #${move}`;
    }else {
      description = 'Go to game start';
    }

    return(
      <li key ={move}>
        <button onClick={() =>jumpTo(move)}>
        {description}
        </button>
      </li>
    )
  })


  return (
    <div className="game">
      <div className="game-board">
        <Board xIsNext={xIsNext} squares = { currentSquare } onPlay={handlePlay} />
      </div>
      <div className="game-info">
        <ol>{moves}</ol>
      </div>
    </div>
  )
}

function calculateWinner (newSquares){
  let cobaliat = '';
  const lines = [
    [0, 1, 2], // horizontal
    [3, 4, 5], // horizontal
    [6, 7, 8], // horizontal
    [0, 3, 6], // vertical
    [1, 4, 7], // vertical
    [2, 5, 8], // vertical
    [0, 4, 8], // diagonal
    [2, 4, 6], // diagonal
  ];
  for (let i=0; i<lines.length; i++){
    const [a, b, c] = lines[i];
    if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[a] === newSquares[c]){
      return cobaliat = newSquares[a];
    }
  }
  console.log(cobaliat);

  //console.log(newSquares);

  return false;
}

