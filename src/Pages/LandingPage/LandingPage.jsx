
import React from "react";
import mainlogo from '../../Assets/mainlogo.png'
import { ThemeToggleService } from "../../services";
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
    } from './LandingPage.module.scss'

export const LandingPage = () => {

    // toggle color
    ThemeToggleService('blue')
    
    return (
        <PageContainer navlink ='/login' >
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
