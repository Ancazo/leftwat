
import React,{useEffect} from "react";
import { ThemeToggleService } from "../../services";
import {
    PageContainer,
    FileUploadButton,
    OnePageContent
    } from "../../Components";
import {
    navStyling
    } from './UploadPage.module.scss'

export const UploadPage = () => {

    // set themeState
    ThemeToggleService('orange')


    //upload image onto cloudinary here
    useEffect(() => {
        console.log('uploadImage here')
    }, [])
    
    return (
        <PageContainer navlink ='/login' className = {navStyling}>
            <OnePageContent>
                <FileUploadButton/>
            </OnePageContent>
        </PageContainer>
    )
};
