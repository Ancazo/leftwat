import {Draggable} from 'react-beautiful-dnd';
import React from 'react'

export const FridgeItem = (props) => {
    return(
        <Draggable draggableId={props.task.id} index={props.index}>
            {(provided, snapshot) => (
            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
            >
                <div style = {{backgroundColor:'white', margin : '2%'}}>
                {props.task.itemName}
                </div>
            </div>
            )}
      </Draggable>
    )
}