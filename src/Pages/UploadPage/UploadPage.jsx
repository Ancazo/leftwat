
import React,{useContext, useEffect} from "react";
import mainlogo from '../../Assets/mainlogo.png'
import { ThemeContext } from '../../Components/ThemeProvider'

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
    const themeState = useContext(ThemeContext)

    useEffect(()=>{
        themeState.setTheme('orange')},
        [] //empty depency makes it runonly once
    )

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
