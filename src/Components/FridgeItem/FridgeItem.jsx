import {Draggable} from 'react-beautiful-dnd';
import React,{useState} from 'react'
import './FridgeItem.scss'

export const FridgeItem = (props) => {
    const backgroundColors = {
        Meat: {
            primary: '#EB5335',
            text: 'white'
        },
        Vegetable: {
            primary: '#85D1D8',
            text: 'white'
        },
        Others: {
            primary: '#4C6AC4',
            text: 'white'
        }
    }
    const [inputState, setInputState] = useState(true)
    const handleOnClick = () => {
        if (inputState === false) {
            setInputState(true)
            return
        } else if (inputState === true) {
            setInputState(false)
            return
        }
    }

    return(
        <Draggable draggableId={props.item.id} index={props.index}>
            {(provided, snapshot) => (
            <div
                {...provided.draggableProps}
                {...provided.dragHandleProps}
                ref={provided.innerRef}
                isDragging={snapshot.isDragging}
            >
                <div>
                    <div className = 'row valign-wrapper' style={{backgroundColor: backgroundColors[props.columnID].primary,color: backgroundColors[props.columnID].text, opacity: '1.0',margin:'3% 3%'}}   >
                        <div className = 'col s6' onClick = {handleOnClick}>
                            {props.item.itemName}
                        </div>

                        <div className = 'col s4' >
                            <input 
                                className='browser-default center-align' 
                                type = 'text' 
                                disabled={inputState} 
                                style = {{width:'100%'}}
                                onChange = {e => {props.onchange(props.item.itemName,e.target.value)}}
                                value= {props.item.countUpdatedByUser}/>
                        </div>

                        <div className = 'col s2 center-align' onClick = {()=> props.handleDelete(props.item.itemName)}>
                            <i className = 'material-icons' style= {{fontSize:'1rem',padding:'0'}} >close</i>
                        </div>
                    </div>
                </div>

                
            </div>
            )}
      </Draggable>
    )
}