import React from 'react'
import Square from './Square'
import Knight from './Knight'


export default function Board({ knightPosition }) {
    
    const renderSquare = (x, y, [knightX, knightY]) => {
        const black = (x + y) % 2 === 1
        const isKnightHere = knightX === x && knightY === y
        const piece = isKnightHere ? <Knight /> : null
      
        return <Square black={black}>{piece}{x}</Square>
    }
    return (
        <div className="board">
            {/* <Square black>
                <Knight />
            </Square> */}
            {renderSquare(0, 0, knightPosition)}
            {renderSquare(1, 0, knightPosition)}
            {renderSquare(2, 0, knightPosition)}
        </div>
    )
}