
import React from "react";
import mainlogo from '../../Assets/mainlogo.png'
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
    blueThemeStyling
    } from './LoginPage.module.scss'

export const LoginPage = () => {
    return (
        <PageContainer className = {blueThemeStyling}>
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
