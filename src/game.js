import React, { useState } from 'react'
import Square from './square'
import Restart from './restart'

const calculateWinner = (squares) => {
  const possibleWins = [
    [0, 1, 2],
    [0, 4, 8],
    [0, 3, 6],
    [2, 5, 8],
    [1, 4, 7],
    [2, 4, 6],
    [3, 4, 5],
    [5, 7, 8]
  ]

  for (let i = 0; i < possibleWins.length; i++){
    const [a, b, c] = possibleWins[i]
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a]
    }
  }
  return null
}

const isBoardFull = (squares) => {
  for (let i = 0; i < squares.length; i++){
    return !squares ? false : true
  }
}

const Game = () => {
  const [squares, setSquares] = useState(Array(9).fill(null))
  const [isXNext, setIsXNext] = useState(true)
  const nextSymbol = isXNext ? "X" : "0"

  const winner = calculateWinner(squares)

  const getStatus = () => {
    if (winner) return `Winner is: ${winner}`
    else if (isBoardFull(squares)) return 'Draw'
    else return `Next player: ${nextSymbol}`
  }

  const renderSquare = (i) => (
    <Square
      value={squares[i]}
      onClick={() => {
        if (squares[i] || winner) return
        const nextSquares = squares.slice()
        nextSquares[i] = nextSymbol
        setSquares(nextSquares)
        setIsXNext(!isXNext)
        }}
      />
  )
  
  const renderRestartButton = () => (
    <Restart
      onClick={() => {
        setSquares(Array(9).fill(null))
        setIsXNext(true)
      }}
    />
  )

  return (
    <div className="container">
    <div className="game">
      <div className="game-board">
        <div className="board-row">
          {renderSquare(0)}
          {renderSquare(1)}
          {renderSquare(2)}
        </div>
        <div className="board-row">
          {renderSquare(3)}
          {renderSquare(4)}
          {renderSquare(5)}
        </div>
        <div className="board-row">
          {renderSquare(6)}
          {renderSquare(7)}
          {renderSquare(8)}
        </div>
      </div>
      <div className="game-info">{getStatus()}</div>
      <div className="restart-button">{renderRestartButton()}</div>
    </div>
    </div>
  )
}

export default Game
