import React from 'react'
import './FormTextField.scss'

export const FormTextField = ({name, type, placeholder}) => {
    return (
        <div className = 'row'>
            <input type={type} id="textField" name={name} placeholder={placeholder}></input>  
        </div>
    )
}