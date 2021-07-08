import React from 'react'
import './styles.css'

const Button = ({background, width, height, text, textColour}) => {
    return (
        <button id='button' style={{background: background, width: width, height: height, color: textColour}}>{text}</button>
    )
}

export default Button