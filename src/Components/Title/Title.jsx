import React from 'react'
import './Title.scss'

export const Title = (props) => {
    return (
        <div className = 'col title'>
            <h1>{props.title}</h1>
            <p>{props.comment}</p>
        </div>
    )
}