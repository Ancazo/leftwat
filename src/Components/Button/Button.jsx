import React from 'react'
import './Button.scss'

export const Button = (props) => {
    return (
        <div className = 'row'>
            <button className={`button ${props.style}`} type = {props.type}>{props.text}</button>
        </div>
    )
}