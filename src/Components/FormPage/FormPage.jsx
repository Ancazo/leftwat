
import React, { useState, useEffect } from 'react'
import "./FormPage.scss";
import { FormTextField,Button } from '..';

export const FormPage = (props) => {

    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [confirm_password,setConfirm_password] = useState('')

    useEffect(()=>{
        // call to backend here
    })

    const handleFormSubmit = (e) => {
        e.preventDefault()
        let formData = new FormData()
        formData.append('email',email)
        formData.append('password',password)
        formData.append('confirm_password',confirm_password)

        console.log(...formData)
    }

    console.log(email)
    console.log(password)
    console.log(confirm_password)
    
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
            <FormTextField 
                name = 'confirm_password' 
                type='password'
                onChange = {value => setConfirm_password(value)}
                />
            <Button type='submit' text = 'register'/>
        </form>
    )
}