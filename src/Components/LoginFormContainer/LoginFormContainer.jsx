
import React, { useState,useEffect } from 'react'
import "./LoginFormContainer.scss";
import { FormTextField,Button } from '..';

export const LoginFormContainer = (props) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')

    useEffect(()=>{
        // call to backend here
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('email',email)
        formData.append('password',password)

        console.log(...formData)
    }

    console.log(email)
    console.log(password)
    
    return (
        <form className = 'col' onSubmit = {(e)=> handleFormSubmit(e)}>
            <FormTextField 
                name='email' 
                type ='text' 
                placeholder = 'xyz@gmail.com'
                onChange = {value => setEmail(value)}
                />
            <FormTextField 
                name = 'password' 
                type = 'password'
                onChange = {value => setPassword(value)}/>
            <Button type='submit' text = 'login' style ={props.buttonStyling}/>
            <Button text = 'forget password?'/>
        </form>
    )
}