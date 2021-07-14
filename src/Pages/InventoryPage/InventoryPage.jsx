
import React,{useEffect, useState} from "react";
import { ThemeToggleService } from "../../services";
import {
    PageContainer,
    OnePageContent,
    FridgeContainer
} from "../../Components";
import { data } from '../../sample_data/data'


export const InventoryPage = () => {

    // set themeState
    ThemeToggleService('blue')

    // states for data to be transformed to table
    const [dataArray,setDataArray] = useState([])
    
    useEffect(() => {
        //retrieve inventory here
    }, [])
    
    return (
        <PageContainer navlink ='/logout'>
            <OnePageContent>
                <FridgeContainer/>
            </OnePageContent>
        </PageContainer>
    )
};
