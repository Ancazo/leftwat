
import React from "react";
import mainlogo from '../../Assets/mainlogo.png'
import { ThemeToggleService } from "../../services";
import {
    SplitPage,
    Title,
    ImageContainer,
    PageContainer,
    LoginFormContainer
    } from "../../Components";
import {
    buttonStyling,
    splitRight,
    splitLeft,
    } from './LoginPage.module.scss'

export const LoginPage = () => {

    // toggle color
    ThemeToggleService('blue')

    return (
        <PageContainer>
            <SplitPage >
                <div className = {`row ${splitLeft}`}>
                    <ImageContainer src ={mainlogo} alt ='mainlogo'/>
                    
                </div>

                <div className = {`col ${splitRight}`}>
                    <Title title = 'Login' comment='' />
                    <LoginFormContainer buttonStyling = {buttonStyling}/>
                </div>
            </SplitPage>
        </PageContainer>
    )
};
