import React,{useState} from 'react'
import { DragDropContext} from 'react-beautiful-dnd';
import {data} from '../../sample_data/data'
import { FridgeColumn } from '..';

export const FridgeContainer =(props) => {
    
    // modifyData for use
    data.map(elem => elem.id = elem.itemName)
    const[listData,setListData] = useState(data)
    
    // can consider removing this unless we want to track location within the page
    const filterByCategory = (category) => {
        return listData.filter(elem => elem["itemCategory"] === category).map(elem => elem.id)
    }

    const columns = {
        columns: {
            'Meat': {
            id: 'Meat',
            title: 'Meat',
            taskIds: filterByCategory('Meat')
            },
            'Vegetable': {
            id: 'Vegetable',
            title: 'Vegetable',
            taskIds: filterByCategory('Vegetable'),
            },
            'Others': {
            id: 'Others',
            title: 'Others',
            taskIds: filterByCategory('Others'),
            },
        },
        columnOrder: ['Meat', 'Vegetable', 'Others'],
    }
    const[state,setState] = useState(columns);

    
    const onDragEnd = result => {
        const { destination, source, draggableId } = result;

        // do nothing if not a droppable area
        if (!destination) {
            return;
        }

        // do nothing if position is same
        if (
            destination.droppableId === source.droppableId &&
            destination.index === source.index
        ) {
            return;
        }

        // check start and end column ids
        const start = state.columns[source.droppableId]
        const finish = state.columns[destination.droppableId]

        if (start !== finish) {
            // Moving from one list to another
            const movedItemID = draggableId
            const index = listData.findIndex(elem => elem.itemName === movedItemID)

            // do not mutate original array so use spread operator such that change in state can be detected
            const newData = [...listData]
            const movedItem = newData[index]
            movedItem.itemCategory = finish.id
            setListData(newData)
        }
    }
    
    // items
    const droppableContent = state.columnOrder.map(columnId => {
        const column = state.columns[columnId];
        const tasks = listData.filter(elem => elem.itemCategory === column.id)

        return(
            <FridgeColumn tasks={tasks} column = {column}/>
        )
    })
    

    return (
        <div className = 'row'>
            <DragDropContext onDragEnd={onDragEnd}>
                {droppableContent}
            </DragDropContext>
        </div>
    )
}