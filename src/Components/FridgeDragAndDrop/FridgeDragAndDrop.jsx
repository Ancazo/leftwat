import React from 'react'
import { DragDropContext} from 'react-beautiful-dnd';
import { FridgeColumn } from '..';

// drag and drop logic here
export const FridgeDragAndDrop = (props) => {

    const columnOrder = ['Meat', 'Vegetable', 'Others']
    
    const onDragEnd = result => {
        const { destination, source, draggableId} = result;
        console.log(source)
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
            const movedItemArray = draggableId.split(',')
            const movedItemID = movedItemArray[0]
            const receiptID = movedItemArray[1]
            console.log(movedItemID)

            props.setListDataHandler(movedItemID,'itemCategory', finish, receiptID)
            props.setItemStateHandler(movedItemID,'itemCategory',finish, receiptID)
        }
    }
    
    const handleItemQuantityChange = (itemName,input,receiptID) => {
        // update props data
        props.setListDataHandler(itemName,'itemQuantityUpdatedByUser', input, receiptID)
        props.setItemStateHandler(itemName,'itemQuantityUpdatedByUser',input, receiptID)
    }

    const handleDelete = (itemName,receiptID) => {
        props.setListDataHandler(itemName, 'deletedByUser', true, receiptID)
        props.setItemStateHandler(itemName, 'deletedByUser', true, receiptID)
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