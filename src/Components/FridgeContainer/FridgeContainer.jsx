import React,{useState,useEffect} from 'react'
import {Button,FridgeDragAndDrop } from '..';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';
import { useHistory } from 'react-router-dom';


// state logic here
export const FridgeContainer =(props) => { 
    let history = useHistory()
    // set states
    const[listData,setListData] = useState([])
    const [itemChangeState, setItemChangeState] = useState({})
    const [itemUpdateCount, setItemUpdateCount] = useState(0)
    const [cookies] = useCookies(["name"]);

    useEffect(()=> {

        // get user data first
        axios.get('https://leftwat-be.herokuapp.com/api/v1/inventory/',{headers: {user:cookies.name}})
        .then(response => {
            console.log(response.data)
            setListData(response.data)

            // redirect if inventory is empty
            if (response.data.length === 0) {
                history.push("/upload");
                toast('please upload receipt to start')
            }
        })
        .catch(err => {
            console.log(err)
        })
    }, [itemUpdateCount,cookies.name,history])

    const setItemStateHandler = (itemName,changedKey,input) => {
        const newUpdate = {...itemChangeState}
        if(newUpdate[itemName]) {
            newUpdate[itemName][changedKey] = input
        }else{
            newUpdate[itemName] = {[`${changedKey}`]:input}
        }
        setItemChangeState(newUpdate)
    }

    const setListDataHandler = (itemID, updateKey, input) => {
        const index = listData.findIndex(elem => elem.slug === itemID)
        // do not mutate original array so use spread operator such that change in state can be detected
        let newData = [...listData]
        let updateItem = newData[index]
        updateItem[updateKey] = input
        newData = newData.filter(elem => elem['deletedByUser'] === false)
        setListData(newData)
    }
    
    const handleFormSubmit = (e) => {
        e.preventDefault()
        // handle form submission
        console.log(itemChangeState)

        axios.patch('https://leftwat-be.herokuapp.com/api/v1/inventory/',{itemChangeState},{headers: {user:cookies.name}})
        .then(response => {
            let newCount = itemUpdateCount + 1
            setItemUpdateCount(newCount)
        })
        .catch(err => {
            console.log(err)
        })
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