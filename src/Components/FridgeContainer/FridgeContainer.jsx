import React,{useState} from 'react'
import {data} from '../../sample_data/data'
import {Button,FridgeDragAndDrop } from '..';

// state logic here
export const FridgeContainer =(props) => { 

    // modifyData for use
    data.map(elem => elem.id = elem.itemName)
    
    // set states
    const[listData,setListData] = useState(data)
    const [itemChangeState, setItemChangeState] = useState({})

    const setItemStateHandler = (itemName,changedKey,input) => {
        const newUpdate = {...itemChangeState}
        if(newUpdate[itemName]) {
            newUpdate[itemName][changedKey] = input
        }else{
            newUpdate[itemName] = {[`${changedKey}`]:input}
        }
        setItemChangeState(newUpdate)
        console.log(itemChangeState)
    }

    const setListDataHandler = (itemID, updateKey, input) => {
        const index = listData.findIndex(elem => elem.itemName === itemID)
        // do not mutate original array so use spread operator such that change in state can be detected
        let newData = [...listData]
        const updateItem = newData[index]
        updateItem[updateKey] = input
        newData = newData.filter(elem => elem['deleted'] === false)
        setListData(newData)
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        // handle form submission
        console.log(itemChangeState)
    }

    return (
        <div className = 'col'>
            <FridgeDragAndDrop listData = {listData} setItemStateHandler = {setItemStateHandler} setListDataHandler = {setListDataHandler}/>

            <div className = 'col right-align' style ={{width: '100%', alignItems : 'flex-end', padding: '0 1vw'}}>
                <form onSubmit = {e=>handleFormSubmit(e)}>
                    <Button text= 'confirm changes' type = 'submit'/>
                </form>
            </div>
        </div>
    )
}