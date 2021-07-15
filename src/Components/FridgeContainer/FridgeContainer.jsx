import React,{useState} from 'react'
import { DragDropContext} from 'react-beautiful-dnd';
import {data} from '../../sample_data/data'
import { FridgeColumn, Button } from '..';

export const FridgeContainer =(props) => { //contains drag and drop logic
    
    // modifyData for use
    data.map(elem => elem.id = elem.itemName)
    const[listData,setListData] = useState(data)

    const columnOrder = ['Meat', 'Vegetable', 'Others']
    const[state,setState] = useState(columnOrder);
    
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
            const index = listData.findIndex(elem => elem.itemName === movedItemID)

            // do not mutate original array so use spread operator such that change in state can be detected
            const newData = [...listData]
            const movedItem = newData[index]
            movedItem.itemCategory = finish
            setListData(newData)

            props.setItemState(movedItemID,'itemCategory',finish)
        }
    }
    

    const handleItemQuantityChange = (itemName,input) => {
        // update props data
        const index = listData.findIndex(elem => elem.itemName === itemName)
        const newData = [...listData]
        const changedItem = newData[index]
        changedItem.countUpdatedByUser = input
        setListData(newData)

        props.setItemState(itemName,'countUpdatedByUser',input)
    }

    

    // items
    const droppableContent = state.map(columnId => {
        const items = listData.filter(elem => elem.itemCategory === columnId)

        return(
            <FridgeColumn items={items} column = {columnId} onchange = {handleItemQuantityChange}/>
        )
    })
    

    return (
        <div className = 'col'>
            <div className = 'col center-align valign-wrapper'>
                <DragDropContext onDragEnd={onDragEnd}>
                    <div className = 'row center-align valign-wrapper'>
                    {droppableContent}
                    </div>
                </DragDropContext>
            </div>

            <div className = 'col right-align' style ={{width: '100%', alignItems : 'flex-end', padding: '0 1vw'}}>
                <form onSubmit = {e=>props.onsubmit(e)}>
                    <Button text= 'confirm changes' type = 'submit'/>
                </form>
            </div>
        </div>
    )
}