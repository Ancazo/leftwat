import React from 'react'
import { DragDropContext, Droppable} from 'react-beautiful-dnd';
import {data} from '../../sample_data/data'
import { FridgeItem } from '..';

export const FridgeContainer =(props) => {

    // map modifies original data
    data.map(elem => elem.id = elem.itemName)

    const filterByCategory = (category) => {
        return data.filter(elem => elem["itemCategory"] === category)
                    .map(elem => elem.id)
    }

    const columns = {
        columns: {
            'column-1': {
            id: 'Meat',
            title: 'Meat',
            taskIds: filterByCategory('Meat')
            },
            'column-2': {
            id: 'Vegetable',
            title: 'Vegetable',
            taskIds: filterByCategory('Vegetable'),
            },
            'column-3': {
            id: 'Others',
            title: 'Others',
            taskIds: filterByCategory('Others'),
            },
        },
        columnOrder: ['column-1', 'column-2', 'column-3'],
    }

    return (
        <div className = 'row'>
            <DragDropContext>
            {columns.columnOrder.map(columnId => {
            const column = columns.columns[columnId];
            const tasks = data.filter(elem => elem.itemCategory === column.id)

            return(
                <div className = 'col'>
                <Droppable droppableId={column.id}>
                    {(provided, snapshot) => (
                        <div
                        ref={provided.innerRef}
                        {...provided.droppableProps}
                        isDraggingOver={snapshot.isDraggingOver}
                        style = {{backgroundColor:'blue' , minHeight:'80vh', minWidth: '30vw' }}
                        >
                        {tasks.map((task, index) => (
                            <FridgeItem key={task.id} task={task} index={index} />
                        ))}
                        {provided.placeholder}
                        </div>
                    )}
                </Droppable>
                </div>

                 )})}
            </DragDropContext>
        
        </div>
    )
}