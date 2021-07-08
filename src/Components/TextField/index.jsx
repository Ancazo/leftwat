import React from 'react'
import './styles.css'

const TextField = ({name, type, placeholder, width, height}) => {
    return (
        <input type={type} id="textField" name={name} placeholder={placeholder} style={{width: width, height:height}}></input> //type have text or password. 
    )
}

export default TextField