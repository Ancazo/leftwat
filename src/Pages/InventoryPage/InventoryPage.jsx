
import React,{useEffect, useState} from "react";
import { ThemeToggleService } from "../../services";
import {
    PageContainer,
    FridgeContainer
} from "../../Components";


export const InventoryPage = () => {

    // set themeState
    ThemeToggleService('blue')

    // states for data to be transformed to table
    const [dataArray,setDataArray] = useState([])

    const [itemChangeState, setItemChangeState] = useState({})

    const setItemStateHandler = (itemName,changedKey,input) => {
        const newUpdate = {...itemChangeState}
        if(newUpdate[itemName]) {
            newUpdate[itemName][changedKey] = input
        }else{
            newUpdate[itemName] = {[`${changedKey}`]:input}
        }
        setItemChangeState(newUpdate)

    }
    

    const handleFormSubmit = (e) => {
        e.preventDefault()
        // handle form submission
        console.log(itemChangeState)
    }
    
    useEffect(() => {
        //retrieve inventory here
    }, [])
    
    return (
        <PageContainer navlink ='/logout'>
            <FridgeContainer setItemState= {setItemStateHandler} onsubmit = {handleFormSubmit}/>
        </PageContainer>
    )
};
