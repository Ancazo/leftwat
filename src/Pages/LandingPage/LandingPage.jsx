
import React from "react";
import mainlogo from '../../Assets/mainlogo.png'
import {
    SplitPage,
    FormPage,
    Title,
    ImageContainer,
    PageContainer
    } from "../../Components";
import {
    buttonStyling,
    splitRight,
    splitLeft,
    blueThemeStyling
    } from './LandingPage.module.scss'

export const LandingPage = () => {
    return (
        <PageContainer navlink ='/login' themeStyle = {blueThemeStyling}>
            <SplitPage >
                <div className = {`row ${splitLeft}`}>
                    <ImageContainer src ={mainlogo} alt ='mainlogo'/>
                    
                </div>

                <div className = {`col ${splitRight}`}>
                    <Title title = 'Sign Up' comment='Sign up to get started!' />
                    <FormPage buttonStyling = {buttonStyling}/>
                </div>
            </SplitPage>
        </PageContainer>
    )
};
