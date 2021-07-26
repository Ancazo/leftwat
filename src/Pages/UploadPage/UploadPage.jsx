
import React,{useEffect, useState} from "react";
import { ThemeToggleService } from "../../services";
import {
    PageContainer,
    FileUploadButton,
    UploadTableContainer
    } from "../../Components";
import {
    navStyling
    } from './UploadPage.module.scss'
import { newdata } from '../../sample_data/data'
import axios from "axios";
import { useCookies } from "react-cookie";


export const UploadPage = () => {
    const [cookies] = useCookies(["name"]);
    console.log(cookies)
    // set themeState
    ThemeToggleService('orange')

    // states for data to be transformed to table
    const [dataArray,setDataArray] = useState([])
    const [uploadImage, setUploadImage] = useState(null)
    const [uploadedStatus, setUploadedStatus] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault()
        setDataArray(newdata)
        setUploadedStatus(true)

        // check file uploaded first
        if (uploadImage) {
            let formData = new FormData()
            formData.append('img',uploadImage)

            axios.post('https://leftwat-be.herokuapp.com/api/v1/upload', formData) 
                .then(response => {
                    console.log('uploaded successfully')
                    setUploadedStatus(1) //receipt ID set here to be used. 
                })
                .catch(err => {
                    console.log(err)
                })

            // data array retrieval here
        }

        // retrieve data for confirmation
    }

    const handleImageChange = (e) => {
        setUploadImage(e.target.files[0])
        console.log(e.target.files)
        console.log(uploadImage)
    }
    
    return (
        <PageContainer navlink ='/login' className = {navStyling} name='Logout'>
            { uploadedStatus ? '' 
                : <FileUploadButton filename = {uploadImage ? uploadImage.name : ''} submit={handleSubmit} onchange = {handleImageChange}/>
            }

            { dataArray.length !== 0 ?
                <UploadTableContainer data = {dataArray} />
                : ''
            }
        </PageContainer>
    )
};
