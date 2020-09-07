//棋盤中的方塊：綁定DndProvider
//           DndProvider應用程序提供React-DnD功能，使用backend將HTML5註入React-DnD。

import React from 'react'
// import Square from './Square'
import Knight from './Knight'

import { moveKnight, canMoveKnight } from './Game'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import BoardSquare from './BoardSquare'

export default function Board({ knightPosition }) {
    const handleSquareClick = (toX, toY) => {
        if (canMoveKnight(toX, toY)) {
            moveKnight(toX, toY)
        }
    }

    const renderPiece = (x, y, [knightX, knightY]) => {
        if (x === knightX && y === knightY) {
          return <Knight />
        }
    }

    const renderSquare = (i, [knightX, knightY]) => {
        const x = i % 8
        const y = Math.floor(i / 8)
        const black = (x + y) % 2 === 1
        const isKnightHere = knightX === x && knightY === y
        const piece = isKnightHere ? <Knight /> : null
      
        return (
            <div 
                className="squares"
                key={i} 
                style={{ width: '12.5%', height: '12.5%' }} 
                onClick={() => handleSquareClick(x, y)}
            >
                {/* <Square black={black}>{piece}</Square> */}
                <BoardSquare x={x} y={y}>
                    {renderPiece(x, y, knightPosition)}
                </BoardSquare>
            </div>
        )
    }

    const squares = []
    for (let i = 0; i < 64; i++) {
        squares.push(renderSquare(i, knightPosition))
    }

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="board">
                {squares}
            </div>
        </DndProvider>
    )
}
  
