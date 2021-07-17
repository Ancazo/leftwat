import React,{useState} from 'react'
import {data} from '../../sample_data/data'
import {Button,FridgeDragAndDrop } from '..';
import { useEffect } from 'react';
import axios from 'axios';

// state logic here
export const FridgeContainer =(props) => { 

    // set states
    const[listData,setListData] = useState([])
    const [itemChangeState, setItemChangeState] = useState({})
    // need to retrieve jwt token

    // only run once to retrieve intial data
    useEffect(()=> {
        // get user data first
        let user = 'user1'
        axios.get('http://localhost:7000/api/v1/inventory/',{headers: {user:user}})
        .then(response => {
            console.log(response.data)
            setListData(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }, [])

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
        const index = listData.findIndex(elem => elem.slug === itemID)
        // do not mutate original array so use spread operator such that change in state can be detected
        let newData = [...listData]
        let updateItem = newData[index]
        updateItem[updateKey] = input
        console.log(newData)
        newData = newData.filter(elem => elem['deletedByUser'] === false)
        console.log(newData)

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