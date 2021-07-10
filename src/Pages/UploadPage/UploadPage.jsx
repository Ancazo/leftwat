
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
    const themeState = useContext(ThemeContext)

    useEffect(()=>{
        // set theme state 
        themeState.setTheme('orange')},
        [] //empty depency makes it runonly once
    )

    return (
        <PageContainer className = {navStyling}>
            <OnePageContent>
                <FileUploadButton/>
            </OnePageContent>
        </PageContainer>
    )
};
