import React from 'react'
import './styles.css'

export const FormTextField = ({name, type, placeholder}) => {
    return (
        <div className = 'row'>
            <input type={type} id="textField" name={name} placeholder={placeholder}></input>  
        </div>
    )
}