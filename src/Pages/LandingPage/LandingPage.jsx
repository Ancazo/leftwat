
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
    splitRight,
    splitLeft,
    } from './LandingPage.module.scss'

export const LandingPage = (props) => {
    console.log(props)

    // toggle color
    ThemeToggleService('dark blue')
    
    return (
        <PageContainer navlink ='/login' >
            <SplitPage >
                <div className = {`row ${splitLeft}`}>
                    <ImageContainer src ={mainlogo} alt ='mainlogo'/>
                </div>

                <div className = {`col ${splitRight}`}>
                    <Title title = 'Sign Up' comment='Sign up to get started!' />
                    <FormPage history={props.history}/>
                    
                </div>
            </SplitPage>
        </PageContainer>
    )
};
