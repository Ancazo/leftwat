import React from 'react'
import './smallButton.css'

export const SmallButton = (props) => {
    return (
        <div className = 'row'>
            <button className={`smallButton ${props.style}`}>{props.text}</button>
        </div>
    )
}