import React from 'react'
import './ImageContainer.scss'

export const ImageContainer =(props) => {
    return (
        <div className = 'col imageContainer'>
            <img src = {props.src} alt = {props.alt}/>
        </div>
    )
}