
import React,{useEffect, useState} from "react";
import { ThemeToggleService } from "../../services";
import {
    PageContainer,
    FridgeContainer
} from "../../Components";


export const InventoryPage = () => {

    // set themeState
    ThemeToggleService('yellow')

    // states for data to be transformed to table
    const [dataArray,setDataArray] = useState([])

    
    useEffect(() => {
        //retrieve inventory here
    }, [])
    
    return (
        <PageContainer navlink ='/logout'>
            <FridgeContainer/>
        </PageContainer>
    )
};
