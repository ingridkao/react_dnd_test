import React from 'react'
import { ItemTypes } from './Constants'
import { useDrag } from 'react-dnd'

export default function Knight() {
    //create the constants for the draggable item types
    const [{ isDragging }, drag] = useDrag({
        item: { type: ItemTypes.KNIGHT },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging()
        })
    })

    return (
        <div
            className="knight"
            ref={drag}
            style={{
                opacity: isDragging ? 0.5 : 1,
            }}
        >
            ♘
        </div>
    )
}