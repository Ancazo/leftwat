

import React,{useState} from 'react'
import {UploadTable, SmallButton } from '..';

export const UploadTableContainer = (props) => {
    // form logic here
    const [itemChangeState, setItemChangeState] = useState({})
    const [listData,setListData] = useState(props.data)

    const handleFormSubmit = (e) => {
        e.preventDefault()
    }

    const setListDataHandler = (itemID, updateKey, input) => {
        const index = listData.findIndex(elem => elem.slug === itemID)
        // do not mutate original array so use spread operator such that change in state can be detected
        let newData = [...listData]
        let updateItem = newData[index]
        updateItem[updateKey] = input
        console.log(newData)

        setListData(newData)
    }

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

    const changeHandler = (e,itemID,updateKey,linkedKey) => {
        let input = e.target.value
        console.log(input)
        setListDataHandler(itemID,updateKey,input)
        setItemStateHandler(itemID,updateKey,input)

        let itemPrice = input * linkedKey
        setListDataHandler(itemID,'itemPriceTotal',itemPrice)
        setItemStateHandler(itemID, 'itemPriceTotal',itemPrice)
    }

    return (
        <div className = 'container'>
            <form>
                <UploadTable data = {listData} onchange = {changeHandler} />
                <div className = 'right-align'>
                    <SmallButton type='submit' text = 'confirm'/>
                </div>
            </form>
      </div>
    )
}