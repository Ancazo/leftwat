
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
import { toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export const UploadPage = () => {
    const [cookies] = useCookies(["name"]);
    console.log(cookies)
    // set themeState
    ThemeToggleService('orange')

    // states for data to be transformed to table
    const [dataArray,setDataArray] = useState([])
    const [uploadImage, setUploadImage] = useState(null)
    const [uploadedStatus, setUploadedStatus] = useState(false)
    const [receiptID,setReceiptID] = useState('')
    const [dataUpload,setDataUpload] = useState(false)

    const handleSubmit = async(e) => {
        e.preventDefault()
        setUploadedStatus(true)

        // check file uploaded first
        if (uploadImage) {
            let formData = new FormData()
            formData.append('img',uploadImage)

            await axios.post('https://leftwat-be.herokuapp.com/api/v1/upload/', formData, {headers: {user:cookies.name, auth_token:cookies.name},}) 
                .then(response => {
                    console.log('uploaded successfully')
                    setReceiptID(response.data.receiptID)
                    console.log(response.data.receiptID)
                    toast(response.data.message)
                })
                .catch(err => {
                    console.log(err)
                })
            
            await axios.get('https://leftwat-be.herokuapp.com/api/v1/upload/confirm', {headers: {auth_token:cookies.name},}) 
            .then(response => {
                console.log('retrieve successfully')
                setDataArray(response.data.receiptData) //receipt ID set here to be used. 
                setDataUpload(true)
            })
            .catch(err => {
                console.log(err)
            })
            
        }       
    }

    const handleImageChange = (e) => {
        setUploadImage(e.target.files[0])
    }
    
    return (
        <PageContainer navlink ='/login' className = {navStyling} name='Logout'>
            { uploadedStatus ? '' 
                : <FileUploadButton filename = {uploadImage ? uploadImage.name : ''} submit={handleSubmit} onchange = {handleImageChange}/>
            }
            { dataUpload ?
                <UploadTableContainer data = {dataArray} receiptID = {receiptID}/>
                : ''
            }
        </PageContainer>
    )
};
