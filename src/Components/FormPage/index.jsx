import React from 'react'
import "./styles.scss";
import { FormTextField,Button } from '../';

export const FormPage = (props) => {
    
    return (
        <form className = 'col' >
            <FormTextField name='email' type ='text' placeholder = 'xyz@gmail.com'/>
            <FormTextField name = 'password' type = 'password'/>
            <FormTextField name = 'confirm_password' type='password'/>
            <Button text = 'login' style ={props.buttonStyling}/>
        </form>
    )
}