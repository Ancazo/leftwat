import React from 'react'
import {Droppable} from 'react-beautiful-dnd';
import { FridgeItem } from '..';

export const FridgeColumn = (props) => {
    return(
        <div className = 'col'>
            <Droppable droppableId={props.column.id}>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    style = {{backgroundColor:'blue' , minHeight:'80vh', minWidth: '30vw' }}
                    >
                    {props.tasks.map((task, index) => (
                        <FridgeItem key={task.id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}