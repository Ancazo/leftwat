import React from 'react'
import './styles.css'

export const Button = (props) => {
    return (
        <div className = 'row'>
            <button className={`button ${props.style}`}>{props.text}</button>
        </div>
    )
}