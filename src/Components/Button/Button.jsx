import React from 'react'
import './Button.scss'

export const Button = (props) => {
    return (
        <div className = 'row'>
            <button className={`button ${props.style}`}>{props.text}</button>
        </div>
    )
}