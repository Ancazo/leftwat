
import React,{useState} from 'react'
import {UploadTable, SmallButton } from '..';
import axios from 'axios';
import { useCookies } from 'react-cookie';
import { useHistory } from 'react-router-dom';
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';


export const UploadTableContainer = (props) => {
    // form logic here
    const [itemChangeState, setItemChangeState] = useState({})
    const [listData,setListData] = useState(props.data)
    const [cookies] = useCookies(["name"]);
    const history = useHistory()

    const handleFormSubmit = (e) => {
        e.preventDefault()
        console.log('clicked')
        axios.patch('https://leftwat-be.herokuapp.com/api/v1/upload/confirm',{itemChangeState:itemChangeState},{headers: {auth_token:cookies.name,receiptid: props.receiptID}})
        .then(response => {
            toast('changes updated')
            history.push('/inventory')
        })
        .catch(err => {
            console.log(err)
        })
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
        itemPrice = itemPrice.toFixed(2)
        setListDataHandler(itemID,'itemPriceTotal',itemPrice)
        setItemStateHandler(itemID, 'itemPriceTotal',itemPrice)
    }

    return (
        <div className = 'container' style={{overflow:'scroll',margin : '2%', padding: '2%', width: '70%'}}>
            <form>
                <UploadTable data = {listData} onchange = {changeHandler} />
                <div className = 'right-align' style= {{margin:'2%'}}>
                    <SmallButton type='submit' text = 'confirm' onclick = {handleFormSubmit}/>
                </div>
            </form>
      </div>
    )
}