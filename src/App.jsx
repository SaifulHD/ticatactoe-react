import { useState } from 'react'

function Square({value, onSquareClick}) {
  
  return <button className = "square" onClick = {onSquareClick} >{value}</button>
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);
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
    setSquares(newSquares);
    setXIsNext(!xIsNext);
    //console.log(squares);
    //console.log(newSquares);

    const winner = calculateWinner(newSquares);
    //console.log(winner);
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

export default function Game(){
  return (
    <div className='game'>
      <div className='game-board'>
        <Board />
      </div>
      <div className='game-info'>
        <ol>{}</ol>
      </div>
    </div>
  )
}

function calculateWinner (newSquares){
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
    if (newSquares[a] && newSquares[a] === newSquares[b] && newSquares[c]){
      return newSquares[a];
    }
  }
  //console.log(squares);

  return false;
}

