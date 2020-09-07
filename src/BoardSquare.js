//棋牌方塊的容器：包Square以及isOver的容器

import React from 'react'
import Square from './Square'

import { moveKnight, canMoveKnight } from './Game'
import { ItemTypes } from './Constants'
import { useDrop } from 'react-dnd'

export default function BoardSquare({ x, y, children }) {
    const black = (x + y) % 2 === 1

    // 處理drop事件的放置目標規範：
    const [{ isOver, canDrop }, drop] = useDrop({
        accept: ItemTypes.KNIGHT,
        //綁定移動騎士的event:知道騎士掉落後將其移動到何處
        drop: () => moveKnight(x, y),
        canDrop: () => canMoveKnight(x, y),
        collect: monitor => ({
            isOver: !!monitor.isOver(),
            canDrop: !!monitor.canDrop()
        }),
    })

    return (
        <div
            className="boardSquare"
            ref={drop}
        >
            {/* 騎士站的格子 */}
            <Square black={black}>{children}</Square>

            {/* 拖拉騎士的準備格子（isOver：滑鼠滑到的地方） */}
            {isOver && !canDrop && (<div className="isOverSquare red"/>)}
            {!isOver && canDrop && (<div className="isOverSquare yellow"/>)}
            {isOver && canDrop && (<div className="isOverSquare green"/>)}
        </div>
    )  
}