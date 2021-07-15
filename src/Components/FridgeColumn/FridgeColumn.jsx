import React from 'react'
import {Droppable} from 'react-beautiful-dnd';
import { FridgeItem,ImageContainer } from '..';
import { columnImage } from '../../Assets';
import './FridgeColumn.scss'

export const FridgeColumn = (props) => {
    const backgroundColors = {
        Meat: 'rgb(235, 83, 53, 0.5)',
        Vegetable: 'rgb(133, 209, 216 , 0.5)',
        Others: 'rgb(76, 106, 196,0.5)'
    }
    
    return(
        <div className = 'col' style= {{width: '30vw', margin:'1vw'}}>
            <ImageContainer src={columnImage[props.column]}/>

            <Droppable droppableId={props.column}>
                {(provided, snapshot) => (
                    <div
                    ref={provided.innerRef}
                    {...provided.droppableProps}
                    isDraggingOver={snapshot.isDraggingOver}
                    style = {{backgroundColor: backgroundColors[props.column] , height:'60vh', minWidth: '30vw', overflow:'scroll'}}
                    >
                    {props.items.map((item, index) => (
                        <FridgeItem handleDelete={props.handleDelete} key={item.id} item={item} index={index} columnID = {props.column} onchange= {props.onchange}/>
                    ))}
                    {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </div>
    )
}