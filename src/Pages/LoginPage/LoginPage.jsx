
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
    splitRight,
    splitLeft,
    } from './LoginPage.module.scss'

export const LoginPage = (props) => {

    // toggle color
    ThemeToggleService('dark blue')


    return (
        <PageContainer>
            <SplitPage >
                <div className = {`row ${splitLeft}`}>
                    <ImageContainer src ={mainlogo} alt ='mainlogo'/>
                    
                </div>

                <div className = {`col ${splitRight}`}>
                    <Title title = 'Login' comment='' />
                    <LoginFormContainer history={props.history}/>
                </div>
            </SplitPage>
        </PageContainer>
    )
};
