
import React,{useEffect, useState} from "react";
import { ThemeToggleService } from "../../services";
import {
    PageContainer,
    FileUploadButton,
    OnePageContent,
    UploadTableContainer
    } from "../../Components";
import {
    navStyling
    } from './UploadPage.module.scss'
import { data } from '../../sample_data/data'


export const UploadPage = () => {

    // set themeState
    ThemeToggleService('orange')

    // states for data to be transformed to table
    const [dataArray,setDataArray] = useState([])
    
    useEffect(() => {
        //upload image onto cloudinary here
        console.log('uploadImage here')
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setDataArray(data)
    }
    
    return (
        <PageContainer navlink ='/login' className = {navStyling}>
            <OnePageContent>
                <FileUploadButton submit={e=>handleSubmit(e)}/>
                { dataArray.length !== 0 ?
                    <UploadTableContainer data = {dataArray} />
                    : ''
                }
            </OnePageContent>
        </PageContainer>
    )
};
