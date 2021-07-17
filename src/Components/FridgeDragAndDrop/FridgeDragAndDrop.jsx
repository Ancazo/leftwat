import React from 'react'
import { DragDropContext} from 'react-beautiful-dnd';
import { FridgeColumn } from '..';

// drag and drop logic here
export const FridgeDragAndDrop = (props) => {

    const columnOrder = ['Meat', 'Vegetable', 'Others']
    
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
        const start = source.droppableId
        const finish = destination.droppableId

        if (start !== finish) {
            // Moving from one list to another
            const movedItemID = draggableId

            props.setListDataHandler(movedItemID,'itemCategory', finish)
            props.setItemStateHandler(movedItemID,'itemCategory',finish)
        }
    }
    
    const handleItemQuantityChange = (itemName,input) => {
        // update props data
        props.setListDataHandler(itemName,'itemQuantityUpdatedByUser', input)
        props.setItemStateHandler(itemName,'itemQuantityUpdatedByUser',input)
    }

    const handleDelete = (itemName) => {
        props.setListDataHandler(itemName, 'deletedByUser', true)
        props.setItemStateHandler(itemName, 'deletedByUser', true)
    }

    const droppableContent = columnOrder.map(columnId => {
        const items = props.listData.filter(elem => elem.itemCategory === columnId)

        return(
            <FridgeColumn items={items} handleDelete = {handleDelete} column = {columnId} onchange = {handleItemQuantityChange}/>
        )
    })

    return (
        <div className = 'col center-align valign-wrapper'>
            <DragDropContext onDragEnd={onDragEnd}>
                <div className = 'row center-align valign-wrapper'>
                    {droppableContent}
                </div>
            </DragDropContext>
        </div>
    )
}