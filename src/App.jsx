import { useState } from 'react'

function Square({value, onSquareClick}) {
  

  return <button className = "square" onClick = {onSquareClick} >{value}</button>
}

export default function Board() {

  const [squares, setSquares] = useState(Array(9).fill(null));
  const [xIsNext, setXIsNext] = useState(true);

  function handleClickSquare(index){
    if (squares[index]){
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
  }

  return (
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
  )
}

